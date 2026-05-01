# AGENT.md

## Project Overview

ToplumPlatformu Haber is an independent news, content, and civic feedback site for ToplumPlatformu. It will be published on `toplumplatformu.com` and must stand apart from the main ToplumPlatformu application while staying visually adjacent to its modern dark/violet identity.

The first version is a static-data editorial site. It presents news-like content and collects visitor concerns, opinions, suggestions, and beta interest through a frontend-only form. No backend, auth, CMS, or admin panel is implemented in this phase.

## Goals

- Build a readable, calm, dark-themed news/content site.
- Use Next.js App Router, TypeScript, and Tailwind CSS.
- Keep routes SEO-friendly and content-driven.
- Store initial posts and categories as typed static data.
- Keep the architecture clean enough to connect Payload CMS or another admin panel later.
- Provide a data collection page that can later connect to Tally, Airtable, Google Sheets, Supabase, or a custom API endpoint.

## Non-goals

- Do not build backend APIs in this phase.
- Do not add authentication or user accounts.
- Do not implement a real CMS/admin panel yet.
- Do not persist form submissions outside the browser/runtime yet.
- Do not add unnecessary animation or extra runtime dependencies.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components by default
- Client Components only where interactivity is required
- Static TypeScript data files for MVP content

## Routes

- `/`: Home page with hero, featured post, recent posts, categories, data collection CTA, and beta/contact section.
- `/haber/[slug]`: Post detail page generated from static post data.
- `/kategori/[slug]`: Category landing page filtered by category slug.
- `/hakkimizda`: About page explaining the independent publication area.
- `/veri-topla`: Frontend-only data collection form.

Header navigation maps `Haberler` to `/#son-icerikler` and `Kategoriler` to `/#kategoriler` until dedicated listing routes are added.

## Data Model

Post fields:

- `id`
- `title`
- `slug`
- `excerpt`
- `content`
- `categorySlug`
- `coverImage` optional
- `author`
- `status`: `draft` or `published`
- `publishedAt`
- `readingTime`
- `tags`
- `sourceType`: `editorial`, `community`, or `report`

Category fields:

- `name`
- `slug`
- `description`

## Folder Structure

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    haber/[slug]/page.tsx
    kategori/[slug]/page.tsx
    hakkimizda/page.tsx
    veri-topla/page.tsx
  components/site/
    Header.tsx
    Footer.tsx
    PostCard.tsx
    FeaturedPost.tsx
    CategoryPill.tsx
    ReportCTA.tsx
    NewsletterBox.tsx
    DataCollectionForm.tsx
  data/
    posts.ts
    categories.ts
  lib/
    slug.ts
    posts.ts
  types/
    post.ts
```

## Task Checklist

- Update project documentation.
- Set up Next.js, TypeScript, and Tailwind configuration.
- Create the requested folder structure.
- Add typed category and post data.
- Add reusable post helper functions.
- Build reusable site components.
- Build App Router pages and SEO metadata.
- Update README with setup and content-editing guidance.
- Run lint and build checks before completion.

## Future CMS Plan

Static data should be shaped like CMS records so it can later move to Payload CMS or another admin panel with minimal changes. Keep post/category access behind helper functions in `src/lib/posts.ts`; future CMS integration should replace those helpers first rather than rewriting pages.

Potential future integrations:

- Payload CMS collections for posts, categories, authors, and submissions.
- Supabase or custom API endpoint for citizen report submissions.
- Tally, Airtable, or Google Sheets for early non-technical collection workflows.
- Preview/draft support for editorial review.

## Coding Rules

- Prefer Server Components unless a component needs browser interactivity.
- Keep components small, typed, and readable.
- Avoid unused imports and TypeScript errors.
- Do not hardcode repeated post/category lookup logic in pages.
- Use `src/lib/posts.ts` for post querying helpers.
- Use mobile-first Tailwind classes.
- Keep the design readable, subdued, and editorial.
- Use `bg-neutral-950`, `text-neutral-*`, and restrained violet accents.
- Do not add extra dependencies without clear value.

## Deployment Notes

- Target domain: `toplumplatformu.com`.
- The site should be deployable to Vercel or any Next.js-compatible platform.
- Backend and CMS environment variables are not required for this MVP.
- Before deployment, run `npm run lint` and `npm run build`.
