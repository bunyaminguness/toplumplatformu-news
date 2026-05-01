# TODO.md

## Documentation

- [x] Update `AGENT.md` for Next.js App Router architecture.
- [x] Expand `TODO.md` with the approved implementation plan.
- [x] Update `README.md` with setup, structure, content editing, and CMS notes.

## Project Setup

- [x] Create Next.js package scripts and dependency manifest.
- [x] Add TypeScript configuration.
- [x] Add Tailwind and PostCSS configuration.
- [x] Add ESLint configuration.
- [x] Create requested `src/` folder structure.

## Data Model

- [x] Create `Post`, `Category`, `PostStatus`, and `PostSource` types.
- [x] Add static categories.
- [x] Add at least 8 realistic Turkish sample posts.
- [x] Add slug helper utilities.
- [x] Add post helper functions: `getPublishedPosts`, `getPostBySlug`, `getPostsByCategory`, `getFeaturedPost`, `getRecentPosts`.

## Components

- [x] Build `Header`.
- [x] Build `Footer`.
- [x] Build `PostCard`.
- [x] Build `FeaturedPost`.
- [x] Build `CategoryPill`.
- [x] Build `ReportCTA`.
- [x] Build `NewsletterBox`.
- [x] Build `DataCollectionForm` with frontend-only submit and future integration TODO comment.

## Pages

- [x] Build home page sections: hero, featured post, recent posts, categories, data collection CTA, beta/contact area.
- [x] Build post detail page with `notFound()` and post-level metadata.
- [x] Build category page with filtered posts and `notFound()`.
- [x] Build data collection page.
- [x] Build about page.
- [x] Add global layout metadata and OpenGraph metadata.
- [x] Add responsive dark editorial styling.

## Verification

- [x] Run `npm run lint`.
- [x] Run `npm run build` if dependencies are available.
- [x] Fix all lint/build errors.
- [x] Confirm final TODO checklist reflects completed work.

## Future Scope

- [ ] Future CMS integration.
- [ ] Future backend/API submission handling.
- [ ] Future dedicated `/haber` listing route.
- [ ] Deploy to `toplumplatformu.com`.
