import Link from "next/link";

import { formatPostDate, getCategoryName } from "@/lib/posts";
import type { Post } from "@/types/post";

type FeaturedPostProps = {
  post: Post;
};

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-violet-300/25 bg-white/[0.04] shadow-2xl shadow-violet-950/20 ring-1 ring-white/10">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex min-h-80 items-end bg-[radial-gradient(circle_at_18%_18%,rgba(167,139,250,0.38),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(76,29,149,0.42),transparent_36%),linear-gradient(135deg,rgba(39,39,42,0.96),rgba(10,10,10,0.96))] p-6 sm:p-8 lg:min-h-[30rem]">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-violet-100/80">Öne çıkan dosya</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Yurttaş deneyimleri haber diline dönüşüyor.
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300">
              Yerel sorunları yalnızca okumak için değil, kendi çevrendeki benzer durumları bildirmek için de takip edebilirsin.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2 text-xs leading-5 text-neutral-400">
            <Link href={`/kategori/${post.categorySlug}`} className="font-semibold text-violet-200 hover:text-violet-100">
              {getCategoryName(post.categorySlug)}
            </Link>
            <span aria-hidden="true">/</span>
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true">/</span>
            <span>{post.readingTime} dk okuma</span>
          </div>

          <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            <Link href={`/haber/${post.slug}`} className="hover:text-violet-100">
              {post.title}
            </Link>
          </h3>

          <p className="mt-5 text-base leading-8 text-neutral-300">{post.excerpt}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/haber/${post.slug}`}
              className="inline-flex justify-center rounded-full bg-violet-300 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-violet-200"
            >
              Haberi oku
            </Link>
            <Link
              href="/veri-topla"
              className="inline-flex justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-neutral-100 hover:border-violet-300/40 hover:bg-white/5"
            >
              Benzer durumu bildir
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
