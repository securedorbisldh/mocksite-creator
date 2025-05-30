
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import KloudBeanPartnership from "./pages/KloudBeanPartnership";
import BusinessPartnerships from "./pages/BusinessPartnerships";
import NotFound from "./pages/NotFound";
import SitemapGenerator from "./components/SitemapGenerator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kloudbean-partnership" element={<KloudBeanPartnership />} />
          <Route path="/business-partnerships" element={<BusinessPartnerships />} />
          <Route path="/generate-sitemap" element={<SitemapGenerator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
