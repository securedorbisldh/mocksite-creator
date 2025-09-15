import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    channelLink: "",
    query: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          channelLink: formData.channelLink,
          query: formData.query,
        },
      });

      if (error) throw error;

      toast({
        title: "Form submitted successfully",
        description: "We will get back to you soon!",
        duration: 5000,
      });

      setFormStatus({
        type: "success",
        message: "Thanks! Your message has been sent.",
      });

      setFormData({ name: "", email: "", channelLink: "", query: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
      setFormStatus({
        type: "error",
        message: `Failed to submit the form: ${error instanceof Error ? error.message : "Unknown error"}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Book a Free <span className="text-red-600">Consultation</span></h1>
        
        {formStatus.type && (
          <Alert variant={formStatus.type === "error" ? "destructive" : "default"} className="mb-6">
            <AlertDescription>{formStatus.message}</AlertDescription>
          </Alert>
        )}
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact us</h2>
            <p className="text-gray-600 mb-8">
              We'd love to help you out with any queries or service-related information at the earliest. Please drop in a line.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-red-600">Working Hours</h3>
              <p>10 AM to 6 PM IST</p>
              <p>Mon - Sat</p>
            </div>
            
            <a href="mailto:info@rightboxmedia.com" className="text-red-600 hover:underline block mb-4">
              info@rightboxmedia.com
            </a>
            <p className="mt-4 text-gray-600 font-medium text-red-600">Trusted by global creators.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input 
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
              />
            </div>
            <div>
              <input 
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
              />
            </div>
            <div>
              <input 
                type="url"
                name="channelLink"
                placeholder="Your Channel Link*"
                value={formData.channelLink}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
              />
            </div>
            <div>
              <textarea 
                name="query"
                placeholder="Your Query*"
                rows={4}
                value={formData.query}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
              />
            </div>
            <button 
              type="submit" 
              className="w-full p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      
      <Footer showBanner={false} />
    </div>
  );
};

export default Contact;
