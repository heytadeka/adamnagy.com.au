# adamnagy.com.au

Personal portfolio for Adam Nagy — performance marketer & ecommerce manager. Built with Next.js (App Router), TypeScript and CSS Modules from the design handoff in [`design_handoff_adam_nagy_portfolio/`](design_handoff_adam_nagy_portfolio/README.md).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

- `app/` — root layout, page, metadata, generated favicon (`icon.tsx`) and share image (`opengraph-image.tsx`)
- `components/` — one component + co-located CSS Module per section (`Hero`, `WhoIAm`, `TheWork`, `TheVideo`, `Quote`, `LetsTalk`), plus shared behaviour (`Reveal` scroll-reveal, `CountUp`, `ScrollChoreography` for parallax/nav, `CustomCursor`)
- `lib/content.ts` — the site's copy/stats/work items in one place
- `public/images/` — the hero portrait

All motion respects `prefers-reduced-motion`.

## Outstanding

- **CV**: the "Download CV" button links to `/Adam-Nagy-CV.pdf` — drop the real file into `public/` (as that exact name) to make it live.
- **Video**: `components/TheVideo.tsx` renders the "coming soon" placeholder state from the design. Swap it for a real `<video>` (or embed) once the reel is ready.
- **OG image / favicon**: currently generated at request time from the brand colours (`app/icon.tsx`, `app/opengraph-image.tsx`) rather than custom-designed — good enough to ship, swap out if you want something bespoke.

## Notes

- `next dev`/`build` run on Turbopack, whose CSS pipeline (Lightning CSS) has an [open bug](https://github.com/vercel/next.js/issues/78302) where `backdrop-filter` gets silently dropped if it's declared *before* `-webkit-backdrop-filter`. Every glass effect in this repo declares `-webkit-backdrop-filter` first — keep that order in any new one.
- Deploys cleanly to Vercel with no extra config.
