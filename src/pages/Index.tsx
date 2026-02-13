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
import ClientCarousel from "@/components/ui/ClientCarousel";
import StrategicFocus from "@/components/StrategicFocus";

const Index = () => {
  const services = [
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution4-4.png" alt="AI Engineering" className="w-16 h-16 object-contain" />,
      title: "AI-Driven Engineering & Consulting",
      description: "Designing secure, scalable AI solutions—combining custom AI pipelines, automation, and LLMs with clear strategic guidance to accelerate performance and long-term growth.",
      //  "Applying custom AI pipelines, automation, and Large Language Models (LLMs) to improve your operational speed and overall effectiveness.",
      link: "/services",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution6-4.png" alt="Full-Stack" className="w-16 h-16 object-contain" />,
      title: "LLM Cost Audit & Optimization",
      description:
        "Uncovering hidden inefficiencies in your LLM stack to reduce token and model costs by up to 80% through disciplined audits, architecture optimization, and continuous performance monitoring.",
      link: "/services",
    },

    // {
    //   icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution1-4.png" alt="AI Consulting" className="w-16 h-16 object-contain" />,
    //   title: "Strategic AI Consulting",
    //   description:
    //     "Providing a clear strategic plan to help you design, build, and scale your AI capabilities with a focus on security, reliability, and long-term results.",
    //   link: "/services",
    // },
    // {
    //   icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution1-4.png" alt="Full-Stack" className="w-16 h-16 object-contain" />,
    //   title: "Full-Stack Development",
    //   description:
    //     "Building durable, secure, and high-performance digital platforms, from initial front-end design to final back-end architecture.",
    //   link: "/services",
    // },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution05-1-4.png" alt="Staff Augmentation" className="w-16 h-16 object-contain" />,
      title: "Staff Augmentation",
      description:
        "Embedding our specialists within your team to provide the focused expertise needed to solve difficult problems and meet critical deadlines.",
      link: "/services",
    },
  ];

  const aiApproach = [
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution1-4.png" alt="Efficiency" className="w-16 h-16 object-contain" />,
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
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution6-4.png" alt="Guardrails" className="w-16 h-16 object-contain" />,
      title: "Control & Guardrails",
      description:
        "Establishing clear protocols and safeguards for a controlled, ethical, and effective deployment of AI capabilities.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution4-4.png" alt="Future-Proofing" className="w-16 h-16 object-contain" />,
      title: "Future-Proofing Your Core Systems",
      description:
        "Architecting a scalable framework that ensures your core AI capabilities can evolve and adapt to future challenges.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution05-1-4.png" alt="Intelligence" className="w-16 h-16 object-contain" />,
      title: "Actionable Intelligence",
      description:
        "Building systems that analyze complex data sets, uncovering critical insights, and empowering your team to make smarter, data-driven decisions.",
    },
  ];

  const clientLogos = [
    { name: "FanFood", logo: "http://airbridgedevs.com/wp-content/uploads/2025/10/logoo-1.png" },
    { name: "DEVBLOCK", logo: "http://airbridgedevs.com/wp-content/uploads/2025/10/DevBlock_Logo_Color.png" },
    { name: "RAFF", logo: "http://airbridgedevs.com/wp-content/uploads/2025/10/raff2.png" },
    { name: "NewClient", logo: "http://airbridgedevs.com/wp-content/uploads/2025/10/logoo-2.png" },
  ];


  return (
    <div className="min-h-screen bg-background bg-[#FFFFFF]">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-[#F7F4FD]">
        {/* Background Ornaments */}
        <div className="absolute top-[20%] right-[5%] w-[180px] z-20 animate-float">
          <img
            src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-slider3-4.png"
            alt=""
            className="w-full h-auto transition-transform duration-300 hover:-translate-y-2"
          />
        </div>
        <div className="absolute top-[10%] left-[45%] w-[150px] z-20 animate-float delay-100">
          <img
            src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-slider1-4.png"
            alt=""
            className="w-full h-auto transition-transform duration-300 hover:-translate-y-2"
          />
        </div>
        <div className="absolute bottom-[15%] right-[40%] w-[120px] z-20 animate-float delay-300">
          <img
            src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-slider1-4.png"
            alt=""
            className="w-full h-auto transition-transform duration-300 hover:-translate-y-2"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
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
            <div className="relative animate-float hidden lg:block z-0">
              <img
                src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-slide_IMG-4.png"
                alt="3D AI Technology Illustration"
                className="w-full max-w-[630px] mx-auto drop-shadow-2xl transition-transform duration-300 ease-out hover:translate-y-2 hover:-translate-x-2"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="section-badge mb-4 inline-block">OUR SERVICES</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Solutions to Propel Your Mission
            </h2>
          </div>
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

      {/* Vision to Execution Section */}
      <section className="relative overflow-hidden">
        <div className="
        absolute inset-0 
        bg-secondary 
        bg-[url('https://airbridgedevs.com/wp-content/uploads/2025/10/freepik__dark-futuristic-technology-background-with-glowing__14781.jpeg')] 
        bg-cover bg-center filter brightness-50 contrast-100 saturate-100 blur-0 hue-rotate-0">
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#31303f]/60" />

        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="text-center mb-16">
            <h2 className="text-[80px] lg:text-[80px] font-medium mb-8 text-[#FFFFFF]">
              Bridging the Gap from <br className="hidden sm:block" />
              Vision to Execution
            </h2>
            <div className="grid md:grid-cols-2 gap-20 lg:gap-32 max-w-4xl mx-auto mb-12 mt-12">
              <div className="flex flex-col items-center md:items-end gap-8">
                <div className="flex items-center justify-center w-36 h-36 hover:scale-105 transition-transform duration-300">
                  <img src="http://airbridgedevs.com/wp-content/uploads/2025/10/eye-scan.png" alt="Vision Icon" />
                </div>
                <div className="text-xl text-center md:text-right">
                  <h4 className="font-semibold text-[#FFFFFF]">Vision:</h4>
                  <p className="text-[#FFFFFF]">
                    Discover what's possible through clarity, creativity, and AI insight.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-8">
                <div className="flex items-center justify-center w-36 h-36 hover:scale-105 transition-transform duration-300">
                  <img src="http://airbridgedevs.com/wp-content/uploads/2025/10/chip.png" alt="Execution Icon" />
                </div>
                <div className="text-xl text-center md:text-left">
                  <h4 className="font-semibold text-[#FFFFFF]">Execution:</h4>
                  <p className="text-[#FFFFFF]">
                    From concept to completion, we turn intelligent ideas into working
                    systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div> */}

          {/* Bottom Footer Strip */}
          <div className="absolute bottom-0 left-0 w-full bg-[#dddddd30] backdrop-blur-sm">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 text-center py-8">

                {["AI Discovery", "AI Implementation", "Migration", "Global Teams"].map((item, index) => (
                  <div key={index} className="text-white font-semibold">
                    {item}
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

      </section >

      {/* AI Approach Section */}
      < section className="py-24 bg-white animde-fade-in-up" >
        <div className="container max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col gap-6 lg:pr-6">
              <span className="section-badge w-fit inline-block">OUR APPROACH TO AI</span>

              <h3 className="text-3xl lg:text-4xl font-normal leading-tight">
                We treat LLM integration as the starting point for a larger AI strategy
                that builds a lasting, competitive advantage
              </h3>
            </div>



            {aiApproach.map((item, index) => (
              <div
                key={index}
                className="service-card flex flex-col gap-4"
              >
                <div className="icon-container">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Why Choose Us Section */}
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
        buttonLink="/contact-us"
      />

      {/* About Section */}
      < section className="py-20 bg-[#FFFFFF]" >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block relative w-full group cursor-pointer">
              {/* Bottom Image */}
              <img
                src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-About_img-4.png"
                alt="AI Innovation"
                className="w-full h-full"
              />

              {/* Top Image: constrained to the same container */}
              <img
                src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-over_img-4.png"
                alt="Technology Network"
                className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div>
              <span className="section-badge mb-6 inline-block text-[#222222] bg-[#F7F7F8]">ABOUT US</span>
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
            </div>
          </div>
        </div>
      </section >

      {/* Clients Section */}
      <div className="bg-[#FFFFFF]">
        <hr className="w-[80%] mx-auto" />
        <ClientCarousel />
      </div>
      {/* CTA Section */}
      <CTASection
        badge="REQUEST FREE TRIAL"
        title="Let's Discuss Your Objective"
        description="Whether you're ready to start a new project, exploring how to scale your technical capabilities, or simply have questions about our approach, we'd love to hear from you."
        buttonText="Discover More"
        buttonLink="/ai-expertise"
        introButtonText="Ready to Launch Your Next Initiative?"
        introButtonLink="#"
      />

      <Footer />
    </div >
  );
};

export default Index;
