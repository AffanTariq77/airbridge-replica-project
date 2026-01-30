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
      icon: <FullStackIcon />,
      title: "Full-Stack Development",
      description:
        "Building durable, secure, and high-performance digital platforms, from initial front-end design to final back-end architecture.",
    },
    {
      icon: <AIEngineeringIcon />,
      title: "AI-Driven Engineering",
      description:
        "Applying custom AI pipelines, automation, and Large Language Models (LLMs) to improve your operational speed and overall effectiveness.",
    },
    {
      icon: <StaffAugmentationIcon />,
      title: "Staff Augmentation",
      description:
        "Embedding our specialists within your team to provide the focused expertise needed to solve difficult problems and meet critical deadlines.",
    },
    {
      icon: <StrategicConsultingIcon />,
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
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    },
    {
      phase: "Phase: Blueprint & Fortification",
      description:
        "Our architects design the complete system blueprint, focusing on a resilient, scalable, and secure foundation from the start.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      phase: "Phase: Execution & Deployment",
      description:
        "With the plan in place, our teams execute the development with precision, followed by a controlled and seamless deployment into your live environment.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    },
    {
      phase: "Phase: Support & Reinforcement",
      description:
        "After launch, we provide ongoing support and strategic reinforcements to ensure your system operates at peak performance and evolves to meet new challenges.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero
        title="Solutions to Propel Your Mission"
        subtitle="A strategic overview of our core operational capabilities."
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Engagement Protocol
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every project is executed with precision and discipline. Our protocol
              ensures clarity, alignment, and a successful outcome at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="phase-card">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${phase.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{phase.phase}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact-us">
              <Button className="btn-gradient">
                Ready to Launch Your Next Initiative?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        badge="Request Free Trail"
        title="Initiate Contact"
        description="Whether you have a defined project or are in the early stages of planning, we're ready to listen. Send us a message to start the conversation."
        buttonText="Discover More"
        buttonLink="/ai-expertise"
      />

      <Footer />
    </div>
  );
};

export default Services;
