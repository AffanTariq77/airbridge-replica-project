import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import ContactFormModal from "@/components/ContactFormModal";

const CTASection = lazy(() => import("@/components/CTASection"));
const ClientCarousel = lazy(() => import("@/components/ui/ClientCarousel"));
const StrategicFocus = lazy(() => import("@/components/StrategicFocus"));
const Footer = lazy(() => import("@/components/Footer"));

interface DeferredSectionProps {
  children: React.ReactNode;
  minHeight?: number;
}

const DeferredSection = ({ children, minHeight = 0 }: DeferredSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "450px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={isVisible ? undefined : { minHeight }}>
      {isVisible ? children : null}
    </div>
  );
};

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
    description:
      "Uncovering hidden inefficiencies in your LLM stack to reduce token and model costs by up to 80% through disciplined audits, architecture optimization, and continuous performance monitoring.",
    link: "/services",
  },
  {
    icon: <img src="/images/icon-staff.webp" alt="Staff Augmentation" width={64} height={64} loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
    title: "Staff Augmentation",
    description:
      "Embedding our specialists within your team to provide the focused expertise needed to solve difficult problems and meet critical deadlines.",
    link: "/services/staff-augmentation",
  },
];

const aiApproach = [
  {
    icon: <img src="/images/icon-efficiency.webp" alt="Efficiency" width={64} height={64} loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
    title: "Operational Efficiency",
    description:
      "Achieved by automating key processes and strengthening your existing systems for peak, reliable performance",
  },
  {
    icon: <img src="/images/icon-secure.webp" alt="Secure Systems" width={64} height={64} loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
    title: "Secure & Resilient Systems",
    description:
      "Building intelligent platforms on a foundation of trust, with resilient architecture designed for sustained, dependable operation.",
  },
  {
    icon: <img src="/images/icon-llm.webp" alt="Guardrails" width={64} height={64} loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
    title: "Control & Guardrails",
    description:
      "Establishing clear protocols and safeguards for a controlled, ethical, and effective deployment of AI capabilities.",
  },
  {
    icon: <img src="/images/icon-ai-eng.webp" alt="Future-Proofing" width={64} height={64} loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
    title: "Future-Proofing Your Core Systems",
    description:
      "Architecting a scalable framework that ensures your core AI capabilities can evolve and adapt to future challenges.",
  },
  {
    icon: <img src="/images/icon-staff.webp" alt="Intelligence" width={64} height={64} loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
    title: "Actionable Intelligence",
    description:
      "Building systems that analyze complex data sets, uncovering critical insights, and empowering your team to make smarter, data-driven decisions.",
  },
];

const DesktopHomeSections = () => {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <DeferredSection minHeight={2500}>
        <div style={{ contentVisibility: "auto", containIntrinsicSize: "1px 2500px" }}>
       <section className="py-20 bg-[#FFFFFF]">
  <div className="container mx-auto px-6 text-center">
    
    <div className="mb-16 flex flex-col items-center">
      <span className="section-badge mb-4 inline-block">OUR SERVICES</span>
      
      <h2 className="text-3xl lg:text-4xl font-bold">
        Solutions to Propel Your Mission
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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

          <section className="relative min-h-[650px] sm:min-h-[700px] md:min-h-[700px] lg:min-h-[800px]">
            <div className="absolute inset-0 bg-secondary">
              <img
                src="/images/bg-dark-tech.webp"
                alt=""
                loading="lazy"
                decoding="async"
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-[#31303f]/60" />

            <div className="relative z-10 min-h-[650px] sm:min-h-[700px] md:min-h-[700px] lg:min-h-[800px] flex flex-col justify-between">
              <div className="flex-1 flex items-center py-10 sm:py-16 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6">
                  <div className="text-center w-full max-w-5xl mx-auto">
                    <h2 className="text-[26px] xxs:text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-medium mb-10 sm:mb-12 md:mb-16 text-[#FFFFFF] leading-[1.3] px-2">
                      Bridging the Gap from <br className="hidden sm:block" />
                      Vision to Execution
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-32">
                      <div className="flex flex-col items-center sm:items-end gap-4 sm:gap-6 md:gap-8">
                        <div className="flex items-center justify-center w-16 h-16 xs:w-20 xs:h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 hover:scale-105 transition-transform duration-300">
                          <img src="/images/icon-eye-scan.webp" alt="Vision Icon" width={144} height={144} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-center sm:text-right px-3 sm:px-0 max-w-[280px] xs:max-w-xs sm:max-w-none mx-auto">
                          <h4 className="font-semibold text-[#FFFFFF] mb-2 text-base xs:text-lg sm:text-xl">Vision:</h4>
                          <p className="text-[#FFFFFF] leading-relaxed">Discover what's possible through clarity, creativity, and AI insight.</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                        <div className="flex items-center justify-center w-16 h-16 xs:w-20 xs:h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 hover:scale-105 transition-transform duration-300">
                          <img src="/images/icon-chip.webp" alt="Execution Icon" width={144} height={144} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-center sm:text-left px-3 sm:px-0 max-w-[280px] xs:max-w-xs sm:max-w-none mx-auto">
                          <h4 className="font-semibold text-[#FFFFFF] mb-2 text-base xs:text-lg sm:text-xl">Execution:</h4>
                          <p className="text-[#FFFFFF] leading-relaxed">From concept to completion, we turn intelligent ideas into working systems.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="container bg-[#5a5968]/80 mx-auto px-4 sm:px-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 text-center py-5 sm:py-5 md:py-6 lg:py-8 gap-y-2 md:gap-y-0">
                    {["AI Discovery", "AI Implementation", "Tech Migration", "Global Teams"].map((item, index) => (
                      <div key={index} className="text-white font-semibold text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base px-2">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-20 md:py-24 lg:py-24 bg-white">
            <div className="container max-w-[1300px] mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
                <div className="flex flex-col gap-6 lg:pr-6 mb-4 md:mb-0">
                  <span className="section-badge w-fit inline-block mx-auto md:mx-0">OUR APPROACH TO AI</span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight break-words">
                    We treat LLM integration as the starting point for a larger AI strategy that builds a lasting, competitive advantage
                  </h3>
                </div>

                {aiApproach.map((item, index) => (
                  <div key={index} className="service-card flex h-full min-h-[320px] flex-col gap-4">
                    <div className="icon-container">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground flex-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </DeferredSection>

      <DeferredSection minHeight={1300}>
        <>
          <Suspense fallback={<div className="min-h-[400px]" aria-hidden="true" />}>
            <StrategicFocus
              badge="WHY CHOOSE US"
              title="The Airbridge Advantage"
              items={[
                "Vetted Teams: Rigorously vetted, top-tier technical experts selected for skill and strategic thinking.",
                "An Airforce-inspired approach defined by discipline, structure, and a relentless focus on results.",
                "Global strategic support for partners in the USA & Middle East.",
                "A dedicated strategic partner, fully integrated with your team to achieve your objectives.",
              ]}
              buttonText="Book an Introductory Call"
              onButtonClick={() => setContactOpen(true)}
            />
          </Suspense>

          <section className="py-20 bg-[#FFFFFF]" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 720px" }}>
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="hidden lg:block relative w-full group cursor-pointer">
                  <img
                    src="/images/about-img.webp"
                    alt="AI Innovation"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full"
                  />

                  <img
                    src="/images/over-img.webp"
                    alt="Technology Network"
                    loading="lazy"
                    decoding="async"
                    className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div>
                  <span className="section-badge mb-6 inline-block text-[#222222] bg-[#F7F7F8]">ABOUT US</span>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission: Connecting Vision with Precision</h2>
                  <p className="text-muted-foreground mb-6">
                    Airbridge Devs is founded on a core engineering principle: the "airbridge," which creates a direct and reliable connection for delivering critical capabilities.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    Guided by our founder's ex-Airforce background, our culture of discipline, structure, and operational excellence is precisely how we turn ambitious goals into measurable results.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {["Precision", "Discipline", "Integrity", "Innovation"].map((value, index) => (
                      <div key={index} className="value-item">
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-[#FFFFFF]" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 220px" }}>
            <hr className="w-[80%] mx-auto" />
            <Suspense fallback={<div className="min-h-[220px]" aria-hidden="true" />}>
              <ClientCarousel />
            </Suspense>
          </div>

          <div style={{ contentVisibility: "auto", containIntrinsicSize: "1px 760px" }}>
            <Suspense fallback={<div className="min-h-[400px]" aria-hidden="true" />}>
              <CTASection
                badge="REQUEST FREE TRIAL"
                title="Let's Discuss Your Objective"
                description="Whether you're ready to start a new project, exploring how to scale your technical capabilities, or simply have questions about our approach, we'd love to hear from you."
                buttonText="Discover More"
                buttonLink="/ai-expertise"
                introButtonText="Ready to Launch Your Next Initiative?"
                introButtonLink="/contact-us"
              />
            </Suspense>
          </div>

          <Suspense fallback={<div className="min-h-[300px]" aria-hidden="true" />}>
            <Footer />
          </Suspense>
        </>
      </DeferredSection>
      <ContactFormModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default DesktopHomeSections;
