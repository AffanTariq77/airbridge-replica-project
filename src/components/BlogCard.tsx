import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ArrowRight, Clock } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  coverImageUrl?: string | null;
  createdAt: string;
  minutes: number;
}

const BlogCard = ({ slug, title, excerpt, coverImageUrl, createdAt, minutes }: BlogCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-secondary text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-card-hover">
      {/* Post header, like a feed item */}
      <div className="flex items-center gap-3 px-5 pt-5 sm:px-6 sm:pt-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white">
          AD
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">Airbridge Devs</p>
          <p className="text-xs text-muted-foreground">
            {format(new Date(createdAt), "d MMM yyyy")}
          </p>
        </div>
      </div>

      <Link to={`/blog/${slug}`} className="flex flex-1 flex-col">
        <div className="flex-1 px-5 pt-4 sm:px-6">
          <h2 className="line-clamp-2 text-xl font-bold leading-snug transition-colors group-hover:text-primary">
            {title}
          </h2>
          {excerpt && (
            <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted-foreground">
              {excerpt}
            </p>
          )}
        </div>

        {/* Same horizontal padding as the title and excerpt, so the image lines
            up with the text instead of bleeding to the card edges */}
        <div className="mt-5 px-5 sm:px-6">
          {coverImageUrl ? (
            <img
              src={coverImageUrl}
              alt={title}
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full rounded-2xl object-cover"
            />
          ) : (
            <div
              className="aspect-[16/9] w-full rounded-2xl bg-gradient-primary"
              aria-hidden="true"
            />
          )}
        </div>
      </Link>

      {/* Post footer */}
      <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-6">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {minutes} min read
        </span>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform hover:translate-x-0.5"
        >
          Read more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
