import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import {
  excerpt,
  listCategories,
  listPosts,
  readingTime,
  type BlogCategory,
  type BlogPost,
} from "@/lib/blog";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  // Kept in the URL so a filtered view can be shared: /blog?category=ai-strategy
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSlug = searchParams.get("category");

  useEffect(() => {
    document.title = "Blog | Airbridge Devs";

    let active = true;

    listCategories().then((data) => {
      if (active) setCategories(data);
    });

    listPosts()
      .then((data) => {
        if (active) setPosts(data);
      })
      .catch(() => {
        if (active)
          setError("We could not load the posts. Please try again shortly.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  // Only tabs that lead somewhere: a category with no posts is hidden
  const tabs = useMemo(
    () =>
      categories
        .map((category) => ({
          ...category,
          count: posts.filter((post) => post.category_id === category.id)
            .length,
        }))
        .filter((category) => category.count > 0),
    [categories, posts],
  );

  // An unknown or emptied slug in the URL falls back to every post
  const activeTab = tabs.find((tab) => tab.slug === activeSlug) ?? null;
  const visiblePosts = activeTab
    ? posts.filter((post) => post.category_id === activeTab.id)
    : posts;

  const selectTab = (slug: string | null) => {
    setSearchParams(slug ? { category: slug } : {}, { replace: true });
  };

  // Minimal rail: an underline on mobile, a left accent bar on desktop
  const tabClass = (active: boolean) =>
    `group -mb-px flex shrink-0 items-center gap-3 whitespace-nowrap border-b-2 pb-3 text-[15px] transition-colors xl:-ml-px xl:mb-0 xl:w-full xl:justify-between xl:border-b-0 xl:border-l-2 xl:py-2.5 xl:pb-2.5 xl:pl-5 ${
      active
        ? "border-primary font-semibold text-primary"
        : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
    }`;

  const countClass = (active: boolean) =>
    `text-xs tabular-nums ${active ? "text-primary" : "text-muted-foreground/70"}`;

  const showTabs = !loading && !error && tabs.length > 0;

  return (
    <div className="min-h-screen bg-[hsl(var(--brand-lavender-dark))]">
      <Header />

      <PageHero
        title="Ideas That Power Intelligent Growth"
        subtitle="Insights on AI, technology, and innovation—written for those building the next decade, not just the next quarter."
        backgroundImage="/images/blog-cover.jpeg"
      />

      {/* White band, so the feed reads as its own section against the lavender
          hero above and the CTA below. Same alternation as Services.tsx */}
      <section className="border-y border-border bg-white py-20">
        <div className="container mx-auto px-6">
          <div
            className={
              showTabs
                ? "grid gap-10 xl:grid-cols-[200px_minmax(0,1fr)] xl:gap-16 2xl:gap-20"
                : "mx-auto max-w-5xl"
            }
          >
            {showTabs && (
              <aside className="xl:sticky xl:top-32 xl:self-start">
                <p className="mb-5 hidden text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground xl:block">
                  Topics
                </p>
                <nav
                  aria-label="Blog categories"
                  className="-mx-6 flex gap-7 overflow-x-auto border-b border-border px-6 xl:mx-0 xl:flex-col xl:gap-0 xl:overflow-visible xl:border-b-0 xl:border-l xl:px-0"
                >
                  <button
                    type="button"
                    onClick={() => selectTab(null)}
                    aria-current={!activeTab ? "page" : undefined}
                    className={tabClass(!activeTab)}
                  >
                    All posts
                    <span className={countClass(!activeTab)}>{posts.length}</span>
                  </button>
                  {tabs.map((tab) => {
                    const active = tab.id === activeTab?.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => selectTab(tab.slug)}
                        aria-current={active ? "page" : undefined}
                        className={tabClass(active)}
                      >
                        <span className="xl:truncate">{tab.name}</span>
                        <span className={countClass(active)}>{tab.count}</span>
                      </button>
                    );
                  })}
                </nav>
              </aside>
            )}

            <div className="min-w-0">
              {showTabs && (
                <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-border pb-5">
                  <h2 className="text-3xl font-bold tracking-tight">
                    {activeTab ? activeTab.name : "All posts"}
                  </h2>
                  <p className="shrink-0 text-sm text-muted-foreground">
                    {visiblePosts.length} {visiblePosts.length === 1 ? "article" : "articles"}
                  </p>
                </div>
              )}
              {loading ? (
                <div className="grid gap-8 md:grid-cols-2">
                  {[0, 1].map((index) => (
                    <div
                      key={index}
                      className="animate-pulse overflow-hidden rounded-3xl border border-border bg-secondary p-6"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-border" />
                        <div className="space-y-2">
                          <div className="h-3 w-28 rounded bg-border" />
                          <div className="h-3 w-20 rounded bg-border" />
                        </div>
                      </div>
                      <div className="mb-3 h-6 w-3/4 rounded bg-border" />
                      <div className="mb-2 h-4 w-full rounded bg-border" />
                      <div className="mb-5 h-4 w-2/3 rounded bg-border" />
                      <div className="aspect-[16/9] w-full rounded-2xl bg-border" />
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="rounded-3xl border border-border bg-secondary p-8 text-center shadow-card">
                  <p className="text-muted-foreground">{error}</p>
                </div>
              ) : posts.length === 0 ? (
                <div className="rounded-3xl border border-border bg-secondary p-8 text-center shadow-card">
                  <h2 className="mb-2 text-xl font-bold">No posts yet</h2>
                  <p className="text-muted-foreground">
                    We are working on the first one. Check back soon.
                  </p>
                </div>
              ) : (
                <div className="grid items-stretch gap-8 md:grid-cols-2">
                  {visiblePosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      slug={post.slug}
                      title={post.title}
                      excerpt={excerpt(post)}
                      coverImageUrl={post.cover_image_url}
                      createdAt={post.created_at}
                      minutes={readingTime(post)}
                    />
                  ))}
                </div>
              )}
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

export default Blog;
