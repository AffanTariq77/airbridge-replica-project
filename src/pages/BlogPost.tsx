import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { ArrowLeft, Clock } from "lucide-react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  getPostBySlug,
  readingTime,
  type BlogPost as BlogPostType,
  type BlogSectionStyle,
} from "@/lib/blog";

// A wide table would otherwise push the whole article sideways on a phone, so
// it scrolls inside its own box instead.
const markdownComponents: Components = {
  table: ({ node: _node, ...props }) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
};

// Section text and legacy bodies are both Markdown, so authors get smaller
// headings, bold, lists and tables from the text itself.
const Markdown = ({ children, className = "" }: { children: string; className?: string }) => (
  <div
    className={`prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-2xl ${className}`}
  >
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
      {children}
    </ReactMarkdown>
  </div>
);

// Per-section presentation. "callout" is the highlighted box for an author
// insight, "quote" a pull quote.
const SECTION_STYLE: Record<BlogSectionStyle, { wrapper: string; body: string }> = {
  normal: { wrapper: "", body: "" },
  callout: {
    wrapper: "rounded-2xl border-l-4 border-primary bg-brand-lavender/70 p-6 sm:p-8",
    body: "prose-p:font-semibold prose-p:text-primary prose-strong:text-primary prose-li:text-primary",
  },
  quote: {
    wrapper: "border-l-4 border-primary pl-6",
    body: "prose-p:text-xl prose-p:italic prose-p:text-muted-foreground",
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    let active = true;
    setLoading(true);
    setError(null);

    getPostBySlug(slug)
      .then((data) => {
        if (active) setPost(data);
      })
      .catch(() => {
        if (active) setError("We could not load this post. Please try again shortly.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  useEffect(() => {
    document.title = post ? `${post.title} | Airbridge Devs` : "Blog | Airbridge Devs";
  }, [post]);

  // Go back to wherever they came from, falling back to the blog index on a
  // direct visit
  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/blog");
    }
  };

  const BackButton = () => (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to blog
    </button>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[hsl(var(--brand-lavender-dark))]">
        <Header />
        <section className="border-y border-border bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl animate-pulse space-y-5">
              <div className="h-9 w-32 rounded-full bg-muted" />
              <div className="h-10 w-3/4 rounded bg-muted" />
              <div className="aspect-[16/9] w-full rounded-3xl bg-muted" />
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-5/6 rounded bg-muted" />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[hsl(var(--brand-lavender-dark))]">
        <Header />
        <section className="border-y border-border bg-white py-32">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-10 text-center shadow-card">
              <h1 className="mb-3 text-2xl font-bold">
                {error ? "Something went wrong" : "Post not found"}
              </h1>
              <p className="mb-6 text-muted-foreground">
                {error || "This post may have been moved or removed."}
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary underline hover:text-primary/90"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all posts
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Posts written entirely in the description field still need to read as an
  // article, so fall back to it when there is no Markdown body
  const sections = post.sections ?? [];
  const faqs = (post.faqs ?? []).filter((faq) => faq?.question?.trim() && faq?.answer?.trim());
  const summary = post.description?.trim() || "";

  // Posts written before sections existed have their article in content_md or
  // in the description. Treat the longer field as the article, and only show
  // the description separately when it is genuinely a short summary.
  const markdown = post.content_md?.trim() || "";
  const bodyIsMarkdown = markdown.length >= summary.length;

  const markdownBody = sections.length ? "" : bodyIsMarkdown ? markdown : "";
  const plainBody = sections.length ? "" : bodyIsMarkdown ? "" : summary;
  const hasBody = Boolean(sections.length || markdownBody || plainBody);

  // With sections the summary is always the lead. On legacy posts, only when it
  // is short enough not to be the article itself.
  const hasLead = sections.length
    ? Boolean(summary)
    : bodyIsMarkdown && Boolean(summary) && summary !== markdown && summary.length <= 400;

  return (
    <div className="min-h-screen bg-[hsl(var(--brand-lavender-dark))]">
      <Header />

      {/* White band so the article is clearly its own section, separate from
          the lavender CTA below */}
      <section className="border-y border-border bg-white py-10 lg:py-14">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <BackButton />

            <article className="mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              {/* Author row, matching the feed cards */}
              <div className="flex items-center gap-3 px-6 pt-6 sm:px-8 sm:pt-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white">
                  AD
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Airbridge Devs</p>
                  <p className="flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
                    <span>{format(new Date(post.created_at), "d MMMM yyyy")}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {readingTime(post)} min read
                    </span>
                  </p>
                </div>
              </div>

              <div className="px-6 pt-6 sm:px-8">
                <h1 className="text-3xl font-bold leading-tight sm:text-[38px]">{post.title}</h1>
                {hasLead && (
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                )}
              </div>

              {post.cover_image_url && (
                // Same horizontal padding as the text above and below, so the
                // cover sits inside the card instead of bleeding to its edges
                <div className="mt-6 px-6 sm:px-8">
                  <img
                    src={post.cover_image_url}
                    alt={post.title}
                    decoding="async"
                    className="aspect-[16/9] w-full rounded-2xl object-cover"
                  />
                </div>
              )}

              <div className="px-6 py-8 sm:px-8">
                {sections.length > 0 ? (
                  <div className="space-y-12">
                    {sections.map((section, index) => {
                      const style = SECTION_STYLE[section.style ?? "normal"] ?? SECTION_STYLE.normal;

                      return (
                      <section key={index} className={`space-y-5 ${style.wrapper}`}>
                        {section.heading && (
                          <h2 className="text-2xl font-bold leading-snug sm:text-[28px]">
                            {section.heading}
                          </h2>
                        )}

                        {section.description && (
                          <Markdown className={style.body}>{section.description}</Markdown>
                        )}

                        {section.images?.length > 0 && (
                          <div className="space-y-5">
                            {section.images.map((url) => (
                              <img
                                key={url}
                                src={url}
                                alt={section.heading || post.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full rounded-2xl object-cover shadow-card"
                              />
                            ))}
                          </div>
                        )}
                      </section>
                      );
                    })}
                  </div>
                ) : markdownBody ? (
                  <Markdown>{markdownBody}</Markdown>
                ) : plainBody ? (
                  // Plain text from the description field: keep the author's
                  // line breaks instead of letting Markdown collapse them
                  <div className="prose prose-lg max-w-none whitespace-pre-line">{plainBody}</div>
                ) : faqs.length === 0 ? (
                  <p className="text-muted-foreground">This post has no content yet.</p>
                ) : null}

                {faqs.length > 0 && (
                  // Only separate the block from the article when there is an
                  // article above it
                  <section className={hasBody ? "mt-12 border-t border-border pt-8" : ""}>
                    <h2 className="text-2xl font-bold leading-snug sm:text-[28px]">
                      Frequently asked questions
                    </h2>
                    <Accordion type="single" collapsible className="mt-4 w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`faq-${index}`}
                          className="border-b border-border last:border-0"
                        >
                          <AccordionTrigger className="break-words py-4 pr-8 text-left text-base font-medium transition-colors hover:text-primary sm:text-lg">
                            <span className="block w-full">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="whitespace-pre-line break-words pb-4 pr-4 text-sm leading-relaxed text-muted-foreground sm:text-base md:pb-6">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </section>
                )}
              </div>
            </article>

            <div className="mt-8">
              <BackButton />
            </div>
          </div>
        </div>
      </section>

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

export default BlogPost;
