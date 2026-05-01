import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ReportCTA } from "@/components/site/ReportCTA";
import { formatPostDate, getCategoryName, getPostBySlug, getPublishedPosts } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Haber bulunamadı",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function PostDetailPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-neutral-950">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
            <span className="font-medium text-violet-200">{getCategoryName(post.categorySlug)}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true">/</span>
            <span>{post.readingTime} dk okuma</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-neutral-300">{post.excerpt}</p>
          <p className="mt-6 text-sm text-neutral-500">Yazar: {post.author}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-7 text-lg leading-9 text-neutral-300">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs text-neutral-400 ring-1 ring-white/10">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <ReportCTA title="Bu konuyla ilgili senin çevrende de benzer bir durum var mı?" buttonLabel="Veri toplama formuna git" />
        </div>
      </div>
    </article>
  );
}
