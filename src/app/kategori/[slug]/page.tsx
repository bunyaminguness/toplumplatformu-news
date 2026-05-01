import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostCard } from "@/components/site/PostCard";
import { categories } from "@/data/categories";
import { getCategoryBySlug, getPostsByCategory } from "@/lib/posts";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Kategori bulunamadı",
    };
  }

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} | ToplumPlatformu Haber`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryPosts = getPostsByCategory(category.slug);

  return (
    <div className="bg-neutral-950">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200/80">Kategori</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">{category.name}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300">{category.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {categoryPosts.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {categoryPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-neutral-400">
            Bu kategoride henüz yayınlanmış içerik bulunmuyor.
          </p>
        )}
      </section>
    </div>
  );
}
