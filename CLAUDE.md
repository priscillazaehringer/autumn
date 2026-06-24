# CLAUDE.md

Project notes for the Autumn art portfolio site (autumnzart.com).

## Stack at a glance

- **Framework: Astro** — this repo *is* the website. Pages are `.astro` files in
  `src/pages/`, built to static output and deployed to `autumnzart.com`
  (`astro.config.mjs`, `package.json`).
- **CMS: Sanity** — a *headless content database*, not a framework. The site reads
  content from it at build time. Sanity is **not** an alternative to Astro here;
  they work together: **Astro renders the site, Sanity stores the content.**
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`).
- **Sitemap:** `@astrojs/sitemap`.

The two are connected through `src/lib/sanity.js`:

```js
projectId: 'bywgwr6x'
dataset:   'production'
```

`urlFor()` (from `@sanity/image-url`) builds cropped/sized image URLs on the fly.

## Content collections (Sanity document types)

"Collections" = Sanity **document types**. They are queried via GROQ throughout the
site. The known types and their key fields:

| Type | Purpose | Notable fields |
| --- | --- | --- |
| `project` | Portfolio work | `title`, `medium`, `year`, `location`, `festival`, `placement`, `description`, `heroImage`, `gallery`, `slug`, `featured` |
| `note` | Journal / blog posts | `publishedAt`, `featuredOnHomepage`, `slug` |
| `event` | Festivals / live appearances / exhibitions | `eventType` (`festival`/`live`/`exhibition`), `featuredOnHomepage` |
| `testimonial` | Client quotes | `order`, `year`, `featuredOnHomepage` |

`project.medium` is the category: `chalk`, `window`, `mural`, `portrait`, `other`.

> ⚠️ **The Sanity schema definitions are NOT in this repo.** This repo is only the
> Astro front end and only *reads* from Sanity. The actual document-type/field
> definitions live in a separate **Sanity Studio** project. Edit content there;
> edit presentation here.

## How collections appear on the site

Each page runs a GROQ query in its Astro frontmatter (server-side, at build time)
and renders the results:

- `src/pages/work.astro` — all `project` docs; medium/year filters auto-derived from the data.
- `src/pages/pet-portraits.astro` — `project` where `medium == "portrait"`.
- `src/pages/services.astro` — one hero image per medium + all `testimonial`s.
- `src/pages/notes/index.astro` + `notes/[slug].astro` — `note` list and detail pages.
- `src/pages/index.astro` — homepage: `featuredOnHomepage` events, notes, testimonial.
- `src/layouts/BaseLayout.astro` — upcoming `event`s.

## Forms

Two forms, two different services. Both ultimately reach `aezaehri@gmail.com`.

### Newsletter opt-in form — Kit / ConvertKit

- Location: footer of `src/layouts/BaseLayout.astro` ("Notes between the pieces").
- Endpoint: `https://app.kit.com/forms/9412451/subscriptions`.
- Fields: `fields[first_name]`, `email_address`.
- JS intercepts submit, posts via `fetch`, shows "check your inbox to confirm"
  (double opt-in).

### Inquiry form — Formspree

- Location: slide-out drawer in `src/components/ContactDrawer.astro`.
- Endpoint: `https://formspree.io/f/xdabazap`.
- Fields: service/surface, name, email, timeline (`when`), message.
- **Opening it:** any element with a `data-inquire="<key>"` attribute opens the
  drawer (e.g. the `FinalCTA` button). The key (`chalk`, `windows`, `portraits`,
  `murals`, `commissions`/`custom`) pre-fills the "What's the surface?" dropdown.
- JS submits via `fetch` and swaps to a success/error view in place.

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the build |
