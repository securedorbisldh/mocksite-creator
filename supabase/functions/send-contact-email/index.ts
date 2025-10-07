import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const resendApiKey = Deno.env.get("RESEND_API_KEY");
const resend = new Resend(resendApiKey);

// Input validation schema
const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email").max(255, "Email too long"),
  channelLink: z.string().url("Invalid URL").max(500, "URL too long").optional().or(z.literal("")),
  query: z.string().trim().min(1, "Query is required").max(2000, "Query too long").optional().or(z.literal("")),
});

// Simple rate limiting using in-memory store (resets on function restart)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in ms
const MAX_REQUESTS_PER_WINDOW = 3;

// HTML escaping to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY secret");
    return new Response(
      JSON.stringify({ error: "Unable to send email. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    // Rate limiting by IP
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0] || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    const now = Date.now();
    const rateLimitData = rateLimitStore.get(clientIp);
    
    if (rateLimitData) {
      if (now < rateLimitData.resetTime) {
        if (rateLimitData.count >= MAX_REQUESTS_PER_WINDOW) {
          console.warn(`Rate limit exceeded for IP: ${clientIp}`);
          return new Response(
            JSON.stringify({ error: "Too many requests. Please try again later." }),
            { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
        rateLimitData.count++;
      } else {
        rateLimitStore.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      }
    } else {
      rateLimitStore.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }

    // Validate input
    const rawData = await req.json();
    const validatedData = ContactSchema.parse(rawData);
    const { name, email, channelLink, query } = validatedData;
    
    // Escape HTML to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeChannelLink = channelLink ? escapeHtml(channelLink) : "";
    const safeQuery = query ? escapeHtml(query) : "";

    const adminEmail = Deno.env.get("CONTACT_RECEIVER_EMAIL");

    // Send confirmation to the submitter (using escaped values)
    const confirmation = await resend.emails.send({
      from: "RightBox Media <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks! We've received your message",
      html: `
        <h2>Hi ${safeName},</h2>
        <p>Thanks for reaching out to RightBox Media. We've received your message and will get back to you soon.</p>
        <p><strong>Your details</strong></p>
        <ul>
          <li>Name: ${safeName}</li>
          <li>Email: ${safeEmail}</li>
          ${safeChannelLink ? `<li>Channel: ${safeChannelLink}</li>` : ""}
          ${safeQuery ? `<li>Message: ${safeQuery}</li>` : ""}
        </ul>
        <p>— Team RightBox Media</p>
      `,
    });

    console.log("Confirmation email response:", confirmation);

    // Forward to admin if configured (using escaped values)
    if (adminEmail) {
      const adminMsg = await resend.emails.send({
        from: "RightBox Media <onboarding@resend.dev>",
        to: [adminEmail],
        subject: "New Contact Form Submission",
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          ${safeChannelLink ? `<p><strong>Channel Link:</strong> ${safeChannelLink}</p>` : ""}
          ${safeQuery ? `<p><strong>Query:</strong> ${safeQuery}</p>` : ""}
        `,
      });
      console.log("Admin email sent successfully");
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    // Log detailed error server-side only
    console.error("Error in send-contact-email:", error);
    
    // Return generic error to user
    const isValidationError = error.name === "ZodError";
    const statusCode = isValidationError ? 400 : 500;
    const userMessage = isValidationError 
      ? "Invalid form data. Please check your inputs." 
      : "Unable to send message. Please try again later.";
    
    return new Response(JSON.stringify({ error: userMessage }), {
      status: statusCode,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
