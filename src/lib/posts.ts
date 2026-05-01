import { categories } from "@/data/categories";
import { posts } from "@/data/posts";

export function getPublishedPosts() {
  return posts
    .filter((post) => post.status === "published")
    .sort(
      (firstPost, secondPost) =>
        new Date(secondPost.publishedAt).getTime() - new Date(firstPost.publishedAt).getTime(),
    );
}

export function getPostBySlug(slug: string) {
  return getPublishedPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(categorySlug: string) {
  return getPublishedPosts().filter((post) => post.categorySlug === categorySlug);
}

export function getFeaturedPost() {
  return getPublishedPosts()[0];
}

export function getRecentPosts(limit: number) {
  return getPublishedPosts().slice(0, limit);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryName(slug: string) {
  return getCategoryBySlug(slug)?.name ?? "Gündem";
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
