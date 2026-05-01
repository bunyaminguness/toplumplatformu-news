import Link from "next/link";

import { formatPostDate, getCategoryName } from "@/lib/posts";
import type { Post } from "@/types/post";

type FeaturedPostProps = {
  post: Post;
};

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-violet-300/20 bg-white/[0.04] ring-1 ring-white/10">
      <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-64 items-end bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.35),transparent_32%),linear-gradient(135deg,rgba(39,39,42,0.95),rgba(10,10,10,0.95))] p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-100/80">Öne çıkan</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-300">
              Yurttaş deneyimlerini haber diliyle görünür kılan bağımsız yayın alanı.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
            <Link href={`/kategori/${post.categorySlug}`} className="font-medium text-violet-200 hover:text-violet-100">
              {getCategoryName(post.categorySlug)}
            </Link>
            <span aria-hidden="true">/</span>
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true">/</span>
            <span>{post.readingTime} dk okuma</span>
          </div>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            <Link href={`/haber/${post.slug}`} className="hover:text-violet-100">
              {post.title}
            </Link>
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-300">{post.excerpt}</p>

          <Link
            href={`/haber/${post.slug}`}
            className="mt-6 inline-flex rounded-full bg-violet-300 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-violet-200"
          >
            Haberi oku
          </Link>
        </div>
      </div>
    </article>
  );
}
