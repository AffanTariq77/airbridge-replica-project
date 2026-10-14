import { supabase } from "@/lib/supabaseClient";

// How a section is presented. Written by the admin panel; older posts have no
// value, which reads as "normal".
export type BlogSectionStyle = "normal" | "callout" | "quote";

// One block of a post. Array order is display order.
export type BlogSection = {
  heading: string | null;
  description: string | null;
  images: string[];
  style?: BlogSectionStyle;
};

// One question and answer pair, rendered as an accordion at the end of a post.
// Array order is display order.
export type BlogFaq = {
  question: string;
  answer: string;
};

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description?: string | null;
  sections?: BlogSection[] | null;
  faqs?: BlogFaq[] | null;
  content_md?: string | null; // legacy body, only used when there are no sections
  cover_image_url?: string | null;
  category_id?: string | null;
  created_at: string;
  updated_at: string;
}

// A side tab on the blog page, managed in the admin panel
export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  position: number;
}

type PostText = Pick<BlogPost, "content_md" | "description" | "sections" | "faqs">;

// Every section's text, in order
function sectionText(post: PostText) {
  return (post.sections ?? [])
    .map((section) => [section.heading, section.description].filter(Boolean).join(" "))
    .join(" ")
    .trim();
}

// Every FAQ's text, in order
function faqText(post: PostText) {
  return (post.faqs ?? [])
    .map((faq) => [faq.question, faq.answer].filter(Boolean).join(" "))
    .join(" ")
    .trim();
}

// Rough reading time, at ~200 words a minute
export function readingTime(post: PostText) {
  const source =
    `${post.description || ""} ${sectionText(post)} ${faqText(post)} ${post.content_md || ""}`.trim();
  const words = source ? source.split(/\s+/).length : 0;
  return Math.max(1, Math.round(words / 200));
}

// Short card summary. Falls back to the first section, then the legacy body, so
// a card is never blank. Strips Markdown syntax so it reads as plain text.
export function excerpt(post: PostText, limit = 220) {
  const firstSection = (post.sections ?? []).find((section) => section.description?.trim());

  const source = (post.description || firstSection?.description || post.content_md || "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`~-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (source.length <= limit) return source;
  return `${source.slice(0, limit).replace(/\s+\S*$/, "")}...`;
}

// All posts, newest first
export async function listPosts() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Blog posts fetch error:", error);
    throw new Error(error.message || "Failed to load posts");
  }

  return (data || []) as BlogPost[];
}

// A single post, or null when the slug does not exist
export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Blog post fetch error:", error);
    throw new Error(error.message || "Failed to load post");
  }

  return (data as BlogPost | null) ?? null;
}

// Categories in sidebar order. Empty when the table is missing or unreachable,
// so the blog still renders without its side tabs.
export async function listCategories() {
  const { data, error } = await supabase
    .from("blog_categories")
    .select("*")
    .order("position")
    .order("created_at");

  if (error) {
    console.error("Blog categories fetch error:", error);
    return [];
  }

  return (data || []) as BlogCategory[];
}
