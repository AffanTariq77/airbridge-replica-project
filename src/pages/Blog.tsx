import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { excerpt, listPosts, readingTime, type BlogPost } from "@/lib/blog";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Blog | Airbridge Devs";

    let active = true;

    listPosts()
      .then((data) => {
        if (active) setPosts(data);
      })
      .catch(() => {
        if (active) setError("We could not load the posts. Please try again shortly.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

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
          <div className="mx-auto max-w-5xl">
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
                {posts.map((post) => (
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
