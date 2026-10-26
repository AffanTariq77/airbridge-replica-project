import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. About these terms",
    body: [
      "These terms govern your use of airbridgedevs.com, its subdomains (such as strategy.airbridgedevs.com and food-tech.airbridgedevs.com) and airbridgedevs.co (together, the \"Sites\"), operated by AirBridge Devs (\"AirBridge\", \"we\", \"us\").",
      "By using the Sites you agree to these terms. If you do not agree, please do not use the Sites.",
    ],
  },
  {
    title: "2. Our services",
    body: [
      "The Sites describe our services, including AI-driven engineering and consulting, LLM cost audits and optimisation, strategic AI consulting, full-stack and custom software development, and staff augmentation.",
      "Information on the Sites is general and is not an offer. Any engagement with us, including a free trial, consultation or strategy call, is governed by a separate written proposal or agreement. If that agreement conflicts with these terms, the agreement applies.",
      "Examples, case studies and figures such as cost savings are illustrative. Actual results depend on your systems, data and circumstances.",
    ],
  },
  {
    title: "3. Enquiries and consultations",
    body: [
      "When you submit a form on the Sites, you confirm that the information is accurate and that you are authorised to share it. Submitting a form does not create a contract or any obligation for either party, and we may decline any request.",
      "Please do not send confidential or sensitive information through the Sites. If an engagement needs it, we will agree a non-disclosure agreement with you first.",
    ],
  },
  {
    title: "4. Information we collect and how we use it",
    body: [
      "Our forms collect the details you choose to give us, such as your name, work email, phone number, company, project details, budget, timeline and, for LLM cost audits, your LLM provider and monthly spend. We use this information to respond to you, prepare proposals and improve our services.",
      "We use trusted service providers to run the Sites: Supabase to store form submissions, Resend to send email notifications, and Google Analytics to understand how the Sites are used, which sets cookies in your browser. The assistant chat on our food technology site is powered by Google Gemini, so messages you type there are processed by Google.",
      "We do not sell your personal information. To access, correct or delete the information we hold about you, email info@airbridgedevs.com. You can unsubscribe from our emails at any time using the link in the email or by contacting us.",
    ],
  },
  {
    title: "5. Acceptable use",
    body: [
      "You must not use the Sites unlawfully, submit spam or automated form entries, attempt to gain unauthorised access to the Sites or their systems, interfere with their operation, scrape their content at scale, or upload malicious code.",
    ],
  },
  {
    title: "6. Intellectual property",
    body: [
      "The content, design, logos and the AirBridge Devs name on the Sites belong to us or our licensors. You may view the Sites and share links to them, but you may not copy or reuse their content for commercial purposes without our written permission.",
      "Names and logos of third-party technologies and clients shown on the Sites belong to their respective owners.",
    ],
  },
  {
    title: "7. Blog and AI-generated content",
    body: [
      "Our blog articles are for general information and are not professional, legal or financial advice. Responses from the assistant chat are generated automatically and may be inaccurate or incomplete, so please confirm anything important with our team before relying on it.",
    ],
  },
  {
    title: "8. Third-party links",
    body: [
      "The Sites link to third-party websites, including our social media pages. We are not responsible for their content, availability or privacy practices.",
    ],
  },
  {
    title: "9. Disclaimer",
    body: [
      "The Sites are provided \"as is\". We work to keep them accurate and available but do not guarantee that they will be error-free, uninterrupted or up to date.",
    ],
  },
  {
    title: "10. Limitation of liability",
    body: [
      "To the extent permitted by law, we are not liable for any indirect or consequential loss, or for any loss of profit, revenue or data, arising from your use of the Sites. Nothing in these terms limits any liability that cannot be limited by law.",
    ],
  },
  {
    title: "11. Changes to these terms",
    body: [
      "We may update these terms from time to time. The date at the top of this page shows when they last changed. Continuing to use the Sites after a change means you accept the updated terms.",
    ],
  },
  {
    title: "12. Governing law",
    body: [
      "These terms are governed by the laws of Singapore, and the courts of Singapore have jurisdiction over any dispute arising from them.",
    ],
  },
];

const Terms = () => {
  useEffect(() => {
    document.title = "Terms and Conditions | Airbridge Devs";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-3xl px-6 py-32">
        <h1 className="text-4xl font-bold mb-3">Terms and Conditions</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: 26 October 2026</p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-bold mb-4">13. Contact us</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              AirBridge Devs, 20A Tanjong Pagar Road, Singapore 088443
              <br />
              Email:{" "}
              <a href="mailto:info@airbridgedevs.com" className="text-primary hover:underline">
                info@airbridgedevs.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+16282625009" className="text-primary hover:underline">
                +1 628 2625 009
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
