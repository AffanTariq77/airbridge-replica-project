import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FullStackIcon,
  AIEngineeringIcon,
  StaffAugmentationIcon,
  StrategicConsultingIcon,
} from "@/components/icons/ServiceIcons";

const Services = () => {
  const services = [
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution6-4.png" alt="Full-Stack Development" className="w-full h-full object-contain" />,
      title: "Full-Stack Development",
      description:
        "Building durable, secure, and high-performance digital platforms, from initial front-end design to final back-end architecture.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution4-4.png" alt="AI-Driven Engineering" className="w-full h-full object-contain" />,
      title: "AI-Driven Engineering",
      description:
        "Applying custom AI pipelines, automation, and Large Language Models (LLMs) to improve your operational speed and overall effectiveness.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution05-1-4.png" alt="Staff Augmentation" className="w-full h-full object-contain" />,
      title: "Staff Augmentation",
      description:
        "Embedding our specialists within your team to provide the focused expertise needed to solve difficult problems and meet critical deadlines.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution1-4.png" alt="Strategic AI Consulting" className="w-full h-full object-contain" />,
      title: "Strategic AI Consulting",
      description:
        "Providing a clear strategic plan to help you design, build, and scale your AI capabilities with a focus on security, reliability, and long-term results.",
    },
  ];

  const phases = [
    {
      phase: "Phase: Reconnaissance & Strategy",
      description:
        "We begin with a deep dive into your objectives, mapping the technical terrain and defining the strategic plan for mission success.",
      image: "https://airbridgedevs.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-11-at-17.11.47_8889e8f0.jpg",
    },
    {
      phase: "Phase: Blueprint & Fortification",
      description:
        "Our architects design the complete system blueprint, focusing on a resilient, scalable, and secure foundation from the start.",
      image: "https://airbridgedevs.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-11-at-17.15.12_e765c6ef.jpg",
    },
    {
      phase: "Phase: Execution & Deployment",
      description:
        "With the plan in place, our teams execute the development with precision, followed by a controlled and seamless deployment into your live environment.",
      image: "https://airbridgedevs.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-11-at-17.16.24_e20887b8.jpg",
    },
    {
      phase: "Phase: Support & Reinforcement",
      description:
        "After launch, we provide ongoing support and strategic reinforcements to ensure your system operates at peak performance and evolves to meet new challenges.",
      image: "https://airbridgedevs.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-11-at-17.18.49_9f6f8abb.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero
        title="Solutions to Propel Your Mission"
        subtitle="A strategic overview of our core operational capabilities."
        backgroundImage="https://airbridgedevs.com/wp-content/uploads/2025/11/Services-.jpeg"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link="/contact-us"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Protocol */}
      <section className="py-20 bg-secondary">
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
            {phases.map((phase, index) => (
              <div key={index} className="phase-card h-full flex flex-col p-2">
                <div className="p-3">
                  <div
                    className="h-32 bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${phase.image})` }}
                  />
                </div>
                <div className="px-6 pb-8 pt-2 flex-grow">
                  <h3 className="text-lg font-bold mb-3">{phase.phase}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
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
        introButtonLink="/services/#"
      />

      <Footer />
    </div>
  );
};

export default Services;
