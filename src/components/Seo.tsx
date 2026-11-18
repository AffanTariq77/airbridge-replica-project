import { useEffect } from "react";

/**
 * Per-page document metadata.
 *
 * index.html ships a single set of homepage tags, so without this every route
 * served the homepage's title, description and canonical — visible today in
 * Google's own results for /services and /terms.
 *
 * Written against the DOM rather than react-helmet-async so this stays
 * dependency-free. Pre-rendering captures the DOM after React runs, so these
 * tags are picked up when static generation is added later.
 */

export const SITE_ORIGIN = "https://airbridgedevs.com";
export const DEFAULT_OG_IMAGE = "/images/og-airbridge-devs.jpg";

type Schema = Record<string, unknown>;

interface SeoProps {
  /** Full <title>. Aim for 60 characters or fewer. */
  title: string;
  /** Meta description. Aim for 155 characters or fewer. */
  description: string;
  /** Route path, e.g. "/" or "/services". Builds the canonical and og:url. */
  path: string;
  /** Social card image, site-relative or absolute. */
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  /** JSON-LD, one object or several. */
  schema?: Schema | Schema[];
}

const absolute = (value: string) =>
  value.startsWith("http") ? value : `${SITE_ORIGIN}${value.startsWith("/") ? "" : "/"}${value}`;

/** Create or update <meta>, keyed by name= or property=. */
const setMeta = (keyAttr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${keyAttr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(keyAttr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const removeMeta = (keyAttr: "name" | "property", key: string) => {
  document.head.querySelector(`meta[${keyAttr}="${key}"]`)?.remove();
};

const SCHEMA_ID = "seo-jsonld";

/**
 * index.html's own tags, captured once before anything overwrites them.
 *
 * Routes that do not render <Seo> would otherwise keep whatever the previously
 * visited route set, so a visitor clicking Services then About Us saw the
 * Services title in their tab. Restoring these on unmount keeps every such page
 * on the document default until it gets metadata of its own.
 */
const DOCUMENT_DEFAULTS = {
  title: typeof document === "undefined" ? "" : document.title,
  description:
    typeof document === "undefined"
      ? ""
      : document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? "",
};

const Seo = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  schema,
}: SeoProps) => {
  const schemaKey = schema ? JSON.stringify(schema) : "";

  useEffect(() => {
    const url = absolute(path);
    const imageUrl = absolute(image);

    document.title = title;

    setMeta("name", "description", description);

    // index.html hard-codes the homepage canonical; point it at this route.
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    if (noindex) {
      setMeta("name", "robots", "noindex, follow");
    } else {
      removeMeta("name", "robots");
    }

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", "Airbridge Devs");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);

    return () => {
      // Hand the document back to its defaults so a route without <Seo> does
      // not inherit this one's title. A route that has its own <Seo> overwrites
      // these again immediately, since cleanup runs before the next effect.
      document.title = DOCUMENT_DEFAULTS.title;
      setMeta("name", "description", DOCUMENT_DEFAULTS.description);
      setMeta("property", "og:title", DOCUMENT_DEFAULTS.title);
      setMeta("property", "og:description", DOCUMENT_DEFAULTS.description);
      setMeta("name", "twitter:title", DOCUMENT_DEFAULTS.title);
      setMeta("name", "twitter:description", DOCUMENT_DEFAULTS.description);
      removeMeta("name", "robots");
    };
  }, [title, description, path, image, type, noindex]);

  useEffect(() => {
    if (!schemaKey) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = SCHEMA_ID;
    script.textContent = schemaKey;
    document.head.appendChild(script);

    // Remove on unmount so one route's schema never leaks into the next.
    return () => {
      script.remove();
    };
  }, [schemaKey]);

  return null;
};

export default Seo;
