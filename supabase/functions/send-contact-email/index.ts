import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const resendApiKey = Deno.env.get("RESEND_API_KEY");
const resend = new Resend(resendApiKey);

interface ContactRequest {
  name: string;
  email: string;
  channelLink?: string;
  query?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY secret");
    return new Response(
      JSON.stringify({ error: "Server not configured. Missing email secret." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    const { name, email, channelLink, query }: ContactRequest = await req.json();

    const adminEmail = Deno.env.get("CONTACT_RECEIVER_EMAIL");

    // Send confirmation to the submitter
    const confirmation = await resend.emails.send({
      from: "RightBox Media <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks! We've received your message",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for reaching out to RightBox Media. We've received your message and will get back to you soon.</p>
        <p><strong>Your details</strong></p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          ${channelLink ? `<li>Channel: ${channelLink}</li>` : ""}
          ${query ? `<li>Message: ${query}</li>` : ""}
        </ul>
        <p>— Team RightBox Media</p>
      `,
    });

    console.log("Confirmation email response:", confirmation);

    // Forward to admin if configured
    if (adminEmail) {
      const adminMsg = await resend.emails.send({
        from: "RightBox Media <onboarding@resend.dev>",
        to: [adminEmail],
        subject: "New Contact Form Submission",
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${channelLink ? `<p><strong>Channel Link:</strong> ${channelLink}</p>` : ""}
          ${query ? `<p><strong>Query:</strong> ${query}</p>` : ""}
        `,
      });
      console.log("Admin email response:", adminMsg);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email:", error);
    return new Response(JSON.stringify({ error: error.message || "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
