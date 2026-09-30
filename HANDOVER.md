# Handover — adamnagy.com.au

_Last updated: 2026-09-30, end of the session that built this site from scratch._

Read this before doing anything else in this repo. It's written for whichever Claude session (or human) picks this up next.

## What this is

Adam Nagy's personal portfolio/marketing site — performance marketer & ecommerce manager, Sydney. Built this session from a static design-reference HTML handoff (`design_handoff_adam_nagy_portfolio/`, a prototype export, not production code) into a real Next.js app, then iterated on extensively with Adam directly: copy rewrites, a second page, a real photo and video, etc.

## Where it lives

- **Local**: `/Users/Pongi/Desktop/adamnagy.com.au`
- **GitHub**: https://github.com/heytadeka/adamnagy.com.au (public, default branch `main`)
- **Live**: https://adamnagy-com-au.vercel.app (Vercel project `adamnagy-com-au`, under "Adam's projects" / Hobby tier)
- **Deploy**: auto-deploys on every push to `main` via Vercel's GitHub integration. No manual deploy step, no CLI needed for normal changes.
- **Real domain**: Adam owns `adamnagy.com.au` but it is **not connected yet** — site is only reachable at the `.vercel.app` URL above.

## Stack

Next.js 16 (App Router, Turbopack, React 19) + TypeScript + **CSS Modules** (deliberately not Tailwind — the design is bespoke enough that utility classes would've just been arbitrary-value soup; see the design handoff README for why). Fonts: Anton via `next/font/google`, Geist + Geist Mono via the `geist` npm package. No backend, no database, no env vars — it's a fully static marketing site.

## Structure

```
app/
  page.tsx                 homepage — assembles the section components below
  behind-the-ads/page.tsx  second page (personal "about" page)
  layout.tsx               root layout: fonts, metadata, mounts Nav/BackgroundLayer/
                            GrainOverlay/CustomCursor/ScrollChoreography globally
  icon.tsx                 generated favicon (next/og)
  opengraph-image.tsx      generated OG share image (next/og) — homepage only
  globals.css              design tokens (CSS custom properties), reset, a few
                            global utility classes (.eyebrow, .dashedRule, .pillTag)
components/
  One component + co-located *.module.css per section/piece (Hero, WhoIAm,
  TheWork, TheVideo, Quote, LetsTalk, BehindTheAds, Nav, ...), plus shared
  behaviour: Reveal (scroll-reveal), CountUp, ScrollChoreography, CustomCursor.
lib/
  content.ts    ALL site copy lives here — stats, work items, hero lines, bio
                paragraphs, the quote, nav labels via component defaults, etc.
  og-font.ts    reads the bundled Anton font for the OG image (see gotcha #2)
public/
  images/, videos/   the actual optimized media the site serves
assets/
  fonts/Anton-Regular.ttf   bundled font for app/opengraph-image.tsx (NOT public/
                            — it's a build-time asset, not meant to be served directly)
creatives/
  gitignored raw source footage Adam drops in for video features — never deployed,
  optimize a copy into public/videos before using it (see gotcha #2's sibling note below)
design_handoff_adam_nagy_portfolio/
  the original static HTML design prototype this whole site was built from.
  Kept for historical reference; not part of the app, not imported anywhere.
```

## Known gotchas — read before touching these areas

1. **`backdrop-filter` property order.** Turbopack/Lightning CSS has an open upstream bug ([vercel/next.js#78302](https://github.com/vercel/next.js/issues/78302)) that silently *drops* `backdrop-filter` if it's declared after `-webkit-backdrop-filter` in the same rule. Every glass-effect rule in this repo has `-webkit-backdrop-filter` declared **first**. If you add a new frosted-glass surface and the blur just doesn't show up with zero errors anywhere — this is why. Keep the webkit line first.

2. **Never fetch external resources during build/prerender.** `app/opengraph-image.tsx` originally fetched its font from Google Fonts at request/build time. One timeout on Vercel's build infra took the *entire production build* down — a failed prerender is fatal to `next build`, and the site silently kept serving a stale deployment for several pushes in a row with no visible error on our end (we only found out because Adam asked why a change "wasn't coming up," and the Vercel build log he pasted showed `ETIMEDOUT`). Fixed by bundling the font locally (`assets/fonts/Anton-Regular.ttf`, read via `node:fs/promises`). **Do not reintroduce a network call anywhere in the build/render path** — if a future feature needs external data, fetch it at runtime in a client component, not in a route that gets statically prerendered.

3. **React's synthetic media events were unreliable in this session's test environment.** `<video>`'s `onLoadedMetadata` / `onTimeUpdate` props never fired in testing here, even though the underlying element's own `duration`/`currentTime` were correctly advancing (confirmed via direct DOM inspection). `components/TheVideo.tsx` reads video state via native `addEventListener` calls plus a 250ms polling fallback while playing, instead of trusting those React props. Follow that pattern for any future `<video>`/`<audio>` work rather than assuming `onTimeUpdate` etc. will fire.

4. **Multi-page nav/scroll state.** `components/ScrollChoreography.tsx` drives hero parallax, the fixed background gradient, nav visibility, and active-nav-link highlighting — all via direct DOM writes (not React state), since it updates on every scroll frame. It's keyed on `usePathname()` and fully re-runs on every client-side route change, because it lives in the root layout, which persists across navigations (only `page.tsx` content swaps). Two bugs already found and fixed here: (a) nav visibility was gated behind a hero existing, so it stayed permanently hidden on the hero-less second page — fixed, nav now shows immediately when there's no hero to scroll past; (b) the active-link write was change-gated (`if (active !== activeId)`), so a freshly-mounted page whose computed "active section" coincidentally matched the tracker's fresh `null` default silently skipped the write, leaving the *previous* page's active link stuck highlighted — fixed by starting the tracker at `undefined` instead of `null` so the first run always writes. If you add a third page, this should already just work, but re-test the full round trip (home → new page → back via logo) if you touch this file.

5. **Vercel CLI is logged out on this machine.** Claude cannot run `vercel` commands, see deployment status, or read build logs directly — `npx vercel whoami` returns "Logged out" and there's no way to complete the OAuth flow non-interactively. The only way to check deploy status from here is polling the live URL with `curl` in a loop, or asking Adam to paste the Vercel dashboard build log when something looks stale. **Don't assume a `git push` succeeded in making the site live** — always poll for the specific change afterward (see the workflow note below).

6. **The Claude Code browser-testing pane occasionally shows a stale screenshot** after a client-side navigation, after a viewport resize, or during active video playback — confirmed multiple times this session, via direct JS/DOM state checks, that the *app* was correct every time this happened (e.g. a progress bar screenshotted at ~65% width when `element.style.width` was actually `"0%"`). If a screenshot looks broken right after a nav/scroll/resize, re-check via `javascript_tool` (read `getBoundingClientRect()`, `.style`, etc. directly) before concluding it's a real bug. A `resize_window` nudge or a fresh `navigate` usually — but not always — clears it.

## Outstanding / not done

- **CV PDF.** The "Download CV" button on the homepage links to `/Adam-Nagy-CV.pdf`, which doesn't exist yet. Drop the real file into `public/` under that exact name and it goes live with zero code changes.
- **Custom domain.** Connect `adamnagy.com.au` in Vercel → Project → Domains, plus a DNS record at Adam's registrar, whenever he's ready. Not started.
- **OG image for `/behind-the-ads`.** Only the homepage (`app/opengraph-image.tsx`) has a custom generated share image; the second page falls back to Next's defaults. Never requested, just noting the gap — same `assets/fonts/Anton-Regular.ttf` pattern would apply if this gets built.
- **Alt text / transcript for the reel.** `TheVideo.tsx`'s `<video>` has a generic `aria-label` ("Adam Nagy — a personal introduction"); the clip has burned-in captions but no separate transcript for screen-reader users who can't see them. Not requested, noting for completeness.

## What's actually on the site right now

Homepage (`/`): Hero ("I turn attention into revenue. / And ideas into working products.") → Who I Am (bio + 4 stats: $7.5M paid media managed, 12+ years, 2 countries, 2 kids) → The Work (Haverford Brands, Flight Risk, Magniscan.io, Ad Junkies) → The Video (real portrait-video reel, working custom player) → Quote (Adam's own self-pitch, not a client testimonial) → Let's Talk (CV button — see outstanding above — and email).

Second page (`/behind-the-ads`): a lighter, personal page — chronological beats about Adam's move from Hungary, life before/after kids, closing with a polaroid-framed family photo that pops in on scroll and the line "I wouldn't trade it for anything."

## Conventions to follow

- **All copy lives in `lib/content.ts`.** Don't hardcode strings in components if content.ts already has (or should have) a slot for it — this is what let rapid copy-only iteration happen all session without touching component code.
- **Scroll-reveal**: wrap content in `<Reveal>` (`components/Reveal.tsx`). Handles `prefers-reduced-motion` and "already in view on page load" (anchor jumps, mid-page reload) automatically — never leaves content stuck invisible. Two variants: `fade` (default, used everywhere) and `pop` (bouncier scale+lift with overshoot easing, currently only the family photo uses it).
- **Shared micro-styles** (`eyebrow`, `dashedRule`, `pillTag`, `visuallyHidden`) are global classes in `app/globals.css`, referenced as plain string classNames — e.g. `className="eyebrow"`, not through a CSS-module `styles` import. Component-specific styles go in that component's own `.module.css`.
- **Every glass/card surface** follows the same recipe: translucent background + `backdrop-filter` (webkit line first, gotcha #1) + 1px border + inset highlight box-shadow. Copy an existing one (e.g. `.card` in `WhoIAm.module.css`) rather than inventing a new treatment from scratch.
- **Before shipping any change**: `npx eslint .` then `rm -rf .next && npx next build` locally — both must be clean (build times have been wildly inconsistent this session, from ~4s to ~15min, for reasons that look like host load rather than the code; be patient, don't assume a slow build is broken). Then commit, push to `main`, and **poll the live URL** for the specific change (a `curl` loop against a string unique to the change, or the asset URL directly) before telling anyone it's live — see gotcha #2 for why this matters.
- **Attribution**: commits end with `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`.

## Contact

Adam's email: adam.nagy.mm@gmail.com (also the mailto link in Let's Talk).
