export type PostStatus = "draft" | "published";

export type PostSource = "editorial" | "community" | "report";

export type Category = {
  name: string;
  slug: string;
  description: string;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  categorySlug: string;
  coverImage?: string;
  author: string;
  status: PostStatus;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  sourceType: PostSource;
};
