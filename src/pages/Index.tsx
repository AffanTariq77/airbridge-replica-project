import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import { Eye, Cpu, Globe, MessageSquare } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <FullStackIcon />,
      title: "Full-Stack Development",
      description:
        "Building durable, secure, and high-performance digital platforms, from initial front-end design to final back-end architecture.",
      link: "/services",
    },
    {
      icon: <AIEngineeringIcon />,
      title: "AI-Driven Engineering",
      description:
        "Applying custom AI pipelines, automation, and Large Language Models (LLMs) to improve your operational speed and overall effectiveness.",
      link: "/services",
    },
    {
      icon: <StaffAugmentationIcon />,
      title: "Staff Augmentation",
      description:
        "Embedding our specialists within your team to provide the focused expertise needed to solve difficult problems and meet critical deadlines.",
      link: "/services",
    },
    {
      icon: <StrategicConsultingIcon />,
      title: "Strategic AI Consulting",
      description:
        "Providing a clear strategic plan to help you design, build, and scale your AI capabilities with a focus on security, reliability, and long-term results.",
      link: "/services",
    },
  ];

  const aiApproach = [
    {
      icon: <StrategicConsultingIcon />,
      title: "Operational Efficiency",
      description:
        "Achieved by automating key processes and strengthening your existing systems for peak, reliable performance",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution2-5.png" alt="Secure Systems" className="w-16 h-16 object-contain" />,
      title: "Secure & Resilient Systems",
      description:
        "Building intelligent platforms on a foundation of trust, with resilient architecture designed for sustained, dependable operation.",
    },
    {
      icon: <FullStackIcon />,
      title: "Control & Guardrails",
      description:
        "Establishing clear protocols and safeguards for a controlled, ethical, and effective deployment of AI capabilities.",
    },
    {
      icon: <AIEngineeringIcon />,
      title: "Future-Proofing Your Core Systems",
      description:
        "Architecting a scalable framework that ensures your core AI capabilities can evolve and adapt to future challenges.",
    },
    {
      icon: <StaffAugmentationIcon />,
      title: "Actionable Intelligence",
      description:
        "Building systems that analyze complex data sets, uncovering critical insights, and empowering your team to make smarter, data-driven decisions.",
    },
  ];

  const clientLogos = [
    { name: "FanFood", color: "#ec4899" },
    { name: "DEVBLOCK", color: "#06b6d4" },
    { name: "RAFF", color: "#8b5cf6" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <span className="section-badge mb-6 inline-block">INTO THE FUTURE</span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Your Strategic Airbridge to the Forefront of Technology.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                We provide complete, mission-driven teams that specialize in advanced AI
                and full-stack development. They will help you integrate LLMs, fortify
                your systems, and make your business operations more effective.
              </p>
              <Link to="/contact-us">
                <Button className="btn-gradient text-base">
                  DEPLOY A MISSION TEAM
                </Button>
              </Link>
            </div>
            <div className="relative animate-float hidden lg:block">
              <img
                src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-slide_IMG-4.png"
                alt="3D AI Technology Illustration"
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Clients We Worked With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="text-2xl font-bold opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: logo.color }}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge mb-4 inline-block">OUR SERVICES</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Solutions to Propel Your Mission
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Vision to Execution Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Bridging the Gap from <br className="hidden sm:block" />
              Vision to Execution
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold">Vision:</h4>
                  <p className="text-sm text-muted-foreground">
                    Discover what's possible through clarity, creativity, and AI insight.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold">Execution:</h4>
                  <p className="text-sm text-muted-foreground">
                    From concept to completion, we turn intelligent ideas into working
                    systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["AI Discovery", "AI Implementation", "Global Teams", "Tech Translation"].map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl text-center border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    {index === 0 && <Eye className="w-6 h-6 text-white" />}
                    {index === 1 && <Cpu className="w-6 h-6 text-white" />}
                    {index === 2 && <Globe className="w-6 h-6 text-white" />}
                    {index === 3 && <MessageSquare className="w-6 h-6 text-white" />}
                  </div>
                  <h4 className="font-semibold">{item}</h4>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* AI Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge mb-4 inline-block">OUR APPROACH TO AI</span>
            <h2 className="text-3xl lg:text-4xl font-bold max-w-4xl mx-auto">
              We treat LLM integration as the starting point for a larger AI strategy
              that builds a lasting, competitive advantage
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiApproach.map((item, index) => (
              <div
                key={index}
                className="service-card"
              >
                <div className="icon-container">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-badge mb-4 inline-block">WHY CHOOSE US</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                The Airbridge Advantage
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="value-item">
                  Vetted Teams: Rigorously vetted, top-tier technical experts selected
                  for skill and strategic thinking.
                </li>
                <li className="value-item">
                  An Airforce-inspired approach defined by discipline, structure, and a
                  relentless focus on results.
                </li>
                <li className="value-item">
                  Global strategic support for partners in the USA & KSA.
                </li>
                <li className="value-item">
                  A dedicated strategic partner, fully integrated with your team to
                  achieve your objectives.
                </li>
              </ul>
              <Link to="/contact-us">
                <Button className="btn-gradient">Book an Introductory Call</Button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-About_img-4.png"
                alt="AI Innovation"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <img
                src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-over_img-4.png"
                alt="Technology Network"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <span className="section-badge mb-4 inline-block">ABOUT US</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Mission: Connecting Vision with Precision
              </h2>
              <p className="text-muted-foreground mb-6">
                Airbridge Devs is founded on a core engineering principle: the
                "airbridge," which creates a direct and reliable connection for
                delivering critical capabilities.
              </p>
              <p className="text-muted-foreground mb-8">
                Guided by our founder's ex-Airforce background, our culture of
                discipline, structure, and operational excellence is precisely how we
                turn ambitious goals into measurable results.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Precision", "Discipline", "Integrity", "Innovation"].map(
                  (value, index) => (
                    <div key={index} className="value-item">
                      {value}
                    </div>
                  )
                )}
              </div>
              <Link to="/about-us">
                <Button variant="outline" className="btn-outline-gradient">
                  Ready to Launch Your Next Initiative?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        badge="REQUEST FREE TRIAL"
        title="Let's Discuss Your Objective"
        description="Whether you're ready to start a new project, exploring how to scale your technical capabilities, or simply have questions about our approach, we'd love to hear from you."
        buttonText="Discover More"
        buttonLink="/ai-expertise"
      />

      <Footer />
    </div>
  );
};

export default Index;
