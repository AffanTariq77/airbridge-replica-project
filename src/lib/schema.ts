import { SITE_ORIGIN } from "@/components/Seo";

/**
 * Shared JSON-LD. The site had no structured data at all, so search engines and
 * AI answer engines had nothing to resolve "Airbridge Devs" as an entity with.
 *
 * sameAs matters here beyond the usual: an unrelated company owns airbridge.io
 * and shares our brand results. Listing our own profiles tells Google which
 * entity they belong to.
 */

export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Airbridge Devs",
  alternateName: "AirBridge Devs",
  url: `${SITE_ORIGIN}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_ORIGIN}/images/airbridge-logo.svg`,
  },
  image: `${SITE_ORIGIN}/images/og-airbridge-devs.jpg`,
  description:
    "Airbridge Devs builds secure, scalable AI systems: LLM integration, cost optimization, and mission-ready engineering teams embedded with client teams.",
  telephone: "+1-628-262-5009",
  address: {
    "@type": "PostalAddress",
    streetAddress: "56-C, NFC Commercial Area",
    addressLocality: "Lahore",
    postalCode: "54332",
    addressCountry: "PK",
  },
  // Global target market, led by the regions already served.
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "Pakistan" },
  ],
  knowsAbout: [
    "AI engineering",
    "Large language model integration",
    "LLM cost optimization",
    "Generative AI development",
    "Retrieval-augmented generation",
    "AI consulting",
    "Staff augmentation",
    "Full-stack development",
  ],
  sameAs: [
    "https://www.linkedin.com/company/airbridgedevs/",
    "https://www.instagram.com/airbridgedevs/",
    "https://theorg.com/org/airbridge-devs",
    "https://www.g2.com/sellers/airbridge-devs",
    "https://www.crunchbase.com/organization/airbridge-devs",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@airbridgedevs.com",
    url: `${SITE_ORIGIN}/contact-us`,
    availableLanguage: ["English"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_ORIGIN}/`,
  name: "Airbridge Devs",
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: "en",
};

/**
 * Breadcrumb trail for a page. "Home" is prepended automatically, so a call
 * passing [{ name: "Services", path: "/services" }] yields Home > Services.
 */
export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...trail].map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: `${SITE_ORIGIN}${crumb.path}`,
  })),
});

/**
 * FAQ markup. Worth more than usual here: answer engines quote self-contained
 * question/answer pairs, so this is the most directly citable thing on a page.
 * Google requires the marked-up text to match what the visitor actually sees,
 * so always build this from the same array the page renders.
 */
export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

/** A single blog post. */
export const articleSchema = ({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  image?: string | null;
  datePublished: string;
  dateModified?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_ORIGIN}${path}`,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_ORIGIN}${path}` },
  image: image ? [image] : [`${SITE_ORIGIN}/images/og-airbridge-devs.jpg`],
  datePublished,
  dateModified: dateModified ?? datePublished,
  author: { "@id": ORGANIZATION_ID },
  publisher: { "@id": ORGANIZATION_ID },
});

/** A single service offering page. */
export const serviceSchema = ({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: `${SITE_ORIGIN}${path}`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: organizationSchema.areaServed,
});

/** The three service offerings, shared by the homepage and the services hub. */
export const homeServicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "AI-Driven Engineering & Consulting",
      description:
        "Secure, scalable AI solutions combining custom AI pipelines, automation and LLMs with strategic guidance.",
      url: `${SITE_ORIGIN}/services/ai-driven-engineering-and-consulting`,
      provider: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "Service",
      position: 2,
      name: "LLM Cost Audit & Optimization",
      description:
        "Audits of the LLM stack that reduce token and model costs by up to 80% through architecture optimization and monitoring.",
      url: `${SITE_ORIGIN}/services`,
      provider: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "Service",
      position: 3,
      name: "Staff Augmentation",
      description:
        "Specialists embedded within client teams to supply focused expertise and meet critical deadlines.",
      url: `${SITE_ORIGIN}/services/staff-augmentation`,
      provider: { "@id": ORGANIZATION_ID },
    },
  ],
};
