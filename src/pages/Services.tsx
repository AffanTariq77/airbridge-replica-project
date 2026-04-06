import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Compass, Layers, Rocket, Shield } from "lucide-react";

const Services = () => {
 const services = [
    {
      icon: <img src="/images/icon-ai-eng.webp" alt="AI Engineering" width="64" height="64" loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
      title: "AI-Driven Engineering & Consulting",
      description: "Designing secure, scalable AI solutions combining custom AI pipelines, automation, and LLMs with clear strategic guidance to accelerate performance and long-term growth.",
      //  "Applying custom AI pipelines, automation, and Large Language Models (LLMs) to improve your operational speed and overall effectiveness.",
      link: "/services/ai-driven-engineering-and-consulting",
    },
    {
      icon: <img src="/images/icon-llm.webp" alt="Full-Stack" width="64" height="64" loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
      title: "LLM Cost Audit & Optimization",
      description:
        "Uncovering hidden inefficiencies in your LLM stack to reduce token and model costs by up to 80% through disciplined audits, architecture optimization, and continuous performance monitoring.",
      link: "/services",
    },

    // {
    //   icon: <img src="/images/icon-efficiency.webp" alt="AI Consulting" width="64" height="64" loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
    //   title: "Strategic AI Consulting",
    //   description:
    //     "Providing a clear strategic plan to help you design, build, and scale your AI capabilities with a focus on security, reliability, and long-term results.",
    //   link: "/services",
    // },
    // {
    //   icon: <img src="/images/icon-efficiency.webp" alt="Full-Stack" width="64" height="64" loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
    //   title: "Full-Stack Development",
    //   description:
    //     "Building durable, secure, and high-performance digital platforms, from initial front-end design to final back-end architecture.",
    //   link: "/services",
    // },
    {
      icon: <img src="/images/icon-staff.webp" alt="Staff Augmentation" width="64" height="64" loading="lazy" decoding="async" className="w-16 h-16 object-contain" />,
      title: "Staff Augmentation",
      description:
        "Embedding our specialists within your team to provide the focused expertise needed to solve difficult problems and meet critical deadlines.",
      link: "/services/staff-augmentation",
    },
  ];

  const phases = [
    {
      phase: "Phase: Reconnaissance & Strategy",
      description:
        "We begin with a deep dive into your objectives, mapping the technical terrain and defining the strategic plan for mission success.",
      image: "/images/logo-whatsapp1.webp",
    },
    {
      phase: "Phase: Blueprint & Fortification",
      description:
        "Our architects design the complete system blueprint, focusing on a resilient, scalable, and secure foundation from the start.",
      image: "/images/logo-whatsapp2.webp",
    },
    {
      phase: "Phase: Execution & Deployment",
      description:
        "With the plan in place, our teams execute the development with precision, followed by a controlled and seamless deployment into your live environment.",
      image: "/images/logo-whatsapp3.webp",
    },
    {
      phase: "Phase: Support & Reinforcement",
      description:
        "After launch, we provide ongoing support and strategic reinforcements to ensure your system operates at peak performance and evolves to meet new challenges.",
      image: "/images/logo-whatsapp4.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--brand-lavender-dark))]">
      <Header />

      <PageHero
        title="Solutions to Propel Your Mission"
        subtitle="A strategic overview of our core operational capabilities."
        backgroundImage="/images/bg-services.webp"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Engagement Protocol */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 ">
              Our Engagement Protocol
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every project is executed with precision and discipline. Our protocol
              ensures clarity, alignment, and a successful outcome at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => {
              const iconMap = [
                <Compass className="w-6 h-6 text-primary" />,
                <Layers className="w-6 h-6 text-primary" />,
                <Rocket className="w-6 h-6 text-primary" />,
                <Shield className="w-6 h-6 text-primary" />,
              ];
              return (
                <div key={index} className="phase-card h-full flex flex-col p-2">
                  <div className="p-3 flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {iconMap[index]}
                    </div>
                  </div>
                  <div className="px-6 pb-8 pt-2 flex-grow">
                    <h3 className="text-lg font-bold mb-3">{phase.phase}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        badge="Request Free Trial"
        title="Initiate Contact"
        description="Whether you have a defined project or are in the early stages of planning, we're ready to listen. Send us a message to start the conversation."
        buttonText="Discover More"
        buttonLink="/ai-expertise"
        introButtonText="Ready to Launch Your Next Initiative?"
        introButtonLink="/contact-us"
      />

      <Footer />
    </div>
  );
};

export default Services;
