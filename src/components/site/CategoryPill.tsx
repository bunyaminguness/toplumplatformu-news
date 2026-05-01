import Link from "next/link";

import type { Category } from "@/types/post";

type CategoryPillProps = {
  category: Category;
};

export function CategoryPill({ category }: CategoryPillProps) {
  return (
    <Link
      href={`/kategori/${category.slug}`}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-neutral-200 hover:border-violet-300/50 hover:bg-violet-400/10 hover:text-white"
    >
      {category.name}
    </Link>
  );
}
