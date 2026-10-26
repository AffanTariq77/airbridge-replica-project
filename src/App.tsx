import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";

const StaffAugmentation = lazy(() => import("./pages/staff-augmentation"));
const Services = lazy(() => import("./pages/Services"));
const AIDrivenEngineeringAndConsulting = lazy(() => import("./pages/AI-Driven-Engineering-&-Consulting"));
const AIExpertise = lazy(() => import("./pages/AIExpertise"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // index.html ships a homepage canonical; point it at the current route so inner pages are indexable
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://airbridgedevs.com${pathname}`);
  }, [pathname]);
  return null;
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<div className="min-h-screen bg-background" aria-hidden="true" />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-driven-engineering-and-consulting" element={<AIDrivenEngineeringAndConsulting />} />
        <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
        <Route path="/ai-expertise" element={<AIExpertise />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/terms" element={<Terms />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
