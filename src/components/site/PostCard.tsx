import Link from "next/link";

import { formatPostDate, getCategoryName } from "@/lib/posts";
import type { Post } from "@/types/post";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 ring-1 ring-transparent transition-colors hover:border-violet-300/30 hover:bg-white/[0.05]">
      <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
        <Link href={`/kategori/${post.categorySlug}`} className="font-medium text-violet-200 hover:text-violet-100">
          {getCategoryName(post.categorySlug)}
        </Link>
        <span aria-hidden="true">/</span>
        <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime} dk okuma</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold leading-snug text-white group-hover:text-violet-100">
        <Link href={`/haber/${post.slug}`}>{post.title}</Link>
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-400">{post.excerpt}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full bg-neutral-900 px-2.5 py-1 text-xs text-neutral-400 ring-1 ring-white/10">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
