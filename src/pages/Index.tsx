import React, { Suspense, lazy, useEffect, useState } from "react";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = lazy(() => import("@/components/Footer"));
const DesktopHomeSections = lazy(() => import("@/components/home/DesktopHomeSections"));

// Synchronous mobile detection - prevents layout shift
const getIsMobile = (): boolean =>
  typeof window !== "undefined" && window.innerWidth < 768;

const services = [
  {
    icon: <img src="/images/icon-ai-eng.webp" alt="AI Engineering" width={64} height={64} loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
    title: "AI-Driven Engineering & Consulting",
    description: "Designing secure, scalable AI solutions combining custom AI pipelines, automation, and LLMs with clear strategic guidance to accelerate performance and long-term growth.",
    link: "/services/ai-driven-engineering-and-consulting",
  },
  {
    icon: <img src="/images/icon-llm.webp" alt="LLM Cost Audit" width={64} height={64} loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
    title: "LLM Cost Audit & Optimization",
    description: "Uncovering hidden inefficiencies in your LLM stack to reduce token and model costs by up to 80% through disciplined audits, architecture optimization, and continuous performance monitoring.",
    link: "/services",
  },
  {
    icon: <img src="/images/icon-staff.webp" alt="Staff Augmentation" width={64} height={64} loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
    title: "Staff Augmentation",
    description: "Embedding our specialists within your team to provide the focused expertise needed to solve difficult problems and meet critical deadlines.",
    link: "/services/staff-augmentation",
  },
];

const Index = () => {
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    const mql = window.matchMedia("(max-width: 767px)");
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-32 overflow-hidden bg-[#F7F4FD]">
        {/* Ornaments - desktop only, lazy loaded */}
        <div className="absolute top-[55%] right-[10%] w-[180px] z-20 animate-float hidden xl:block">
          <img
            src="/images/ornament3.webp"
            alt=""
            loading="lazy"
            decoding="async"
            width={180}
            height={180}
            aria-hidden="true"
            className="w-full h-auto transition-transform duration-300 hover:-translate-y-2"
          />
        </div>
        <div className="absolute top-[15%] right-[10%] w-[150px] z-20 animate-float delay-100 hidden xl:block">
          <img
            src="/images/ornament1.webp"
            alt=""
            loading="lazy"
            decoding="async"
            width={150}
            height={150}
            aria-hidden="true"
            className="w-full h-auto transition-transform duration-300 hover:-translate-y-2"
          />
        </div>

        <div className="container mx-auto px-2 sm:px-6 relative z-10 mt-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero text — no animation so LCP text paints immediately */}
            <div className="mt-0 mb-8 lg:mb-0">
              <span className="section-badge mb-6 inline-block text-[14px] font-bold text-[#222222] bg-[#FFFFFF] rounded-full shadow-sm">
                INTO THE FUTURE
              </span>
              <h1 className="text-4xl lg:text-[40px] font-extrabold mb-6 leading-[1.2] text-[#000000] font-inter">
                Your Strategic Airbridge to the Forefront of Technology.
              </h1>
              <p className="text-lg text-[#444444] mb-8 max-w-xl leading-relaxed">
                We provide complete, mission-driven teams that specialize in advanced AI
                and full-stack development. They will help you integrate LLMs, fortify
                your systems, and make your business operations more effective.
              </p>
              <Link to="/contact-us">
                <Button className="btn-gradient px-8 py-6 text-base font-bold rounded-full hover:scale-105 transition-transform uppercase tracking-wider">
                  Deploy a Mission Team
                </Button>
              </Link>
            </div>

            {/* Hero image — eager on desktop for fast LCP */}
            <div className="relative hidden lg:block z-0">
              <img
                src="/images/hero-illustration.webp"
                alt="3D AI Technology Illustration"
                width={630}
                height={630}
                fetchPriority="high"
                decoding="sync"
                className="w-full max-w-[630px] mx-auto drop-shadow-2xl transition-transform duration-300 ease-out hover:translate-y-2 hover:-translate-x-2"
              />
            </div>
          </div>
        </div>
      </section>

      {isMobile ? (
        <>
          <section className="py-10 bg-[#FFFFFF]">
            <div className="container mx-auto px-4">
              <div className="mb-8 text-center">
                <span className="section-badge mb-3 inline-block">OUR SERVICES</span>
                <h2 className="text-2xl font-bold">Mission-Ready Solutions</h2>
              </div>
              <div className="grid gap-5">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    link={service.link}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-[#F7F4FD]">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Launch Your Next Initiative?</h2>
              <p className="text-[#444444] mb-6">Book a briefing with our team and get a focused execution plan.</p>
              <Link to="/contact-us">
                <Button className="btn-gradient px-8 py-5 text-sm font-bold rounded-full uppercase tracking-wider">
                  Book a Briefing
                </Button>
              </Link>
            </div>
          </section>

          <Suspense fallback={<div className="min-h-[220px] bg-white" aria-hidden="true" />}>
            <Footer />
          </Suspense>
        </>
      ) : (
        <Suspense fallback={<div className="min-h-[2600px] bg-white" aria-hidden="true" />}>
          <DesktopHomeSections />
        </Suspense>
      )}
    </div>
  );
};

export default Index;
