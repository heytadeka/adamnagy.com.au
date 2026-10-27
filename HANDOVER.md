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
  beyond-the-ads/page.tsx  third page (AI-built products and internal tools)
  layout.tsx               root layout: fonts, metadata, mounts Nav/BackgroundLayer/
                            GrainOverlay/CustomCursor/ScrollChoreography globally
  icon.tsx                 generated favicon (next/og)
  opengraph-image.tsx      generated OG share image (next/og) — homepage only
  globals.css              design tokens (CSS custom properties), reset, a few
                            global utility classes (.eyebrow, .dashedRule, .pillTag)
components/
  One component + co-located *.module.css per section/piece (Hero, WhoIAm,
  TheWork, TheVideo, Quote, LetsTalk, BehindTheAds, BeyondTheAds, Nav, ...), plus shared
  behaviour: Reveal (scroll-reveal), CountUp, ScrollChoreography, CustomCursor.
lib/
  content.ts    ALL site copy lives here — stats, work items, hero lines, bio
                paragraphs, the quote, nav labels via component defaults, etc.
  og-font.ts    reads the bundled Anton font for the OG image (see gotcha #2)
public/
  images/, videos/   the actual optimized media the site serves (occasionly-home.webp
                     and magniscan-home.webp are point-in-time screenshots of the live
                     products, see the conventions below)
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

7. **Replacing an image under the same filename keeps showing the old one.** Next's image optimizer caches by URL, so after overwriting e.g. `public/images/magniscan-home.webp` the dev server kept serving the previous version (it looked like a bad crop that was already fixed). Delete `.next/dev/cache/images` and reload, or use a new filename. Related: macOS `sips` can't do a top-anchored crop (it ignores `--cropOffset` and always centres), so the project screenshots were cropped and resized in one step with `cwebp -crop 0 0 <w> <h> -resize 1280 0` (origin is top-left).

8. **A page-level `openGraph` replaces the layout's, including its share image.** `app/opengraph-image.tsx` only reaches pages that don't define their own `openGraph`. `/beyond-the-ads` names `images: ["/opengraph-image"]` explicitly (plus a `twitter` block); `/behind-the-ads` does not, so links to it currently share without an image. When adding a page, grep the built HTML (`.next/server/app/<page>.html`) for `og:image`.

9. **Disk space.** On 2026-10-27 the Mac's data volume was at 100% (about 370 MB free of 228 GB; the big consumers were Claude's own Application Support folder, `~/Library/Caches` and `~/.cache`) and one clean `next build` died with `ENOSPC ... .next/trace`. An immediate retry passed. This probably also explains the erratic build times noted under Conventions. If it recurs, tell Adam to free space rather than looping retries, and never delete his caches or files without asking.

## Outstanding / not done

- **Custom domain.** Connect `adamnagy.com.au` in Vercel → Project → Domains, plus a DNS record at Adam's registrar, whenever he's ready. Not started.
- **Share image for `/behind-the-ads`.** See gotcha #8; copy the metadata pattern from `app/beyond-the-ads/page.tsx`.
- **Surchly.ai** is not on the site. Adam named it as a candidate for `/beyond-the-ads` but hasn't sent details. Magniscan's card on that page also has no stack tags (none provided).
- **Open question on the numbers.** Adam hasn't said how the tool's "20 brands" relates to five brands in four markets (is 20 = 5 × 4?) and 16 Klaviyo accounts. Until he does, `/beyond-the-ads` says "built for 20 brands"; if 20 means brand-and-market combinations, reword the tool's lead and first bullet in `beyondTheAds` (`lib/content.ts`) so nobody reads it as 20 separate brands.
- **Reel accessibility.** `TheVideo.tsx`'s `<video>` has a generic `aria-label` and there's no transcript for screen-reader users. Not requested, noting for completeness.

## What's actually on the site right now

Homepage (`/`): Hero ("I turn attention into revenue. / And ideas into working products.") → The Video (portrait reel with a custom player; moved up to sit right after the hero) → Who I Am (bio + 4 stats: $7.5M paid media managed, 12+ years, 2 countries, 2 kids) → The Work (Haverford Brands, Flight Risk, Magniscan.io, Ad Junkies, then a "See what else I've built" link to `/beyond-the-ads`) → Quote (Adam's own self-pitch, not a client testimonial) → Let's Talk (CV download and email; the CV PDF is in `public/`).

Second page (`/behind-the-ads`): a lighter, personal page — chronological beats about Adam's move from Hungary, life before/after kids, closing with a polaroid-framed family photo that pops in on scroll and the line "I wouldn't trade it for anything."

Third page (`/beyond-the-ads`, "Beyond the Ads"): the proof behind the hero's "ideas into working products" line. Headline "I find the bottleneck. Then I build the fix." Three project cards: **Occasionly** (live self-serve multi-tenant SaaS for occasion-driven retailers; framed screenshot, stack tags, link), **CRM Planning Tool** (Adam's internal tool at Haverford for planning emails across 20 brands: structure, wireframe, copy; it's internal so there's no link or screenshot, and it uses a CSS illustration instead, captioned as one) and **Magniscan** (live security scanner for AI-built apps; framed screenshot, link). It closes with "Have a bottleneck worth removing? Let's talk." and an email button. Copy is in `beyondTheAds` in `lib/content.ts`; the facts came from Adam, except Magniscan's three feature bullets, which are paraphrased from magniscan.io itself.

## Conventions to follow

- **All copy lives in `lib/content.ts`.** Don't hardcode strings in components if content.ts already has (or should have) a slot for it — this is what let rapid copy-only iteration happen all session without touching component code.
- **Scroll-reveal**: wrap content in `<Reveal>` (`components/Reveal.tsx`). Handles `prefers-reduced-motion` and "already in view on page load" (anchor jumps, mid-page reload) automatically — never leaves content stuck invisible. Two variants: `fade` (default, used everywhere) and `pop` (bouncier scale+lift with overshoot easing, currently only the family photo uses it).
- **Shared micro-styles** (`eyebrow`, `dashedRule`, `pillTag`, `visuallyHidden`) are global classes in `app/globals.css`, referenced as plain string classNames — e.g. `className="eyebrow"`, not through a CSS-module `styles` import. Component-specific styles go in that component's own `.module.css`.
- **Every glass/card surface** follows the same recipe: translucent background + `backdrop-filter` (webkit line first, gotcha #1) + 1px border + inset highlight box-shadow. Copy an existing one (e.g. `.card` in `WhoIAm.module.css`) rather than inventing a new treatment from scratch.
- **Before shipping any change**: `npx eslint .` then `rm -rf .next && npx next build` locally — both must be clean (build times have been wildly inconsistent this session, from ~4s to ~15min, for reasons that look like host load rather than the code; be patient, don't assume a slow build is broken). Then commit, push to `main`, and **poll the live URL** for the specific change (a `curl` loop against a string unique to the change, or the asset URL directly) before telling anyone it's live — see gotcha #2 for why this matters.
- **Numbers to keep consistent.** Bio: five brands in four markets. Haverford card: 5 brands and 4 markets as the big numbers, plus "16 Klaviyo accounts" in the description (Adam's own wording: own paid media on Google and Meta, direct the content strategy, run CRM and lifecycle). Beyond page: CRM planning tool built for 20 brands. See the open question under Outstanding before putting these side by side.
- **Project screenshots are point-in-time.** `occasionly-home.webp` and `magniscan-home.webp` are 1440-wide captures of each live homepage, taken with headless Chrome (`--headless=new --window-size=1440,900 --virtual-time-budget=9000` and a throwaway `--user-data-dir`), cropped above any cookie banner. Re-capture if either hero changes. Don't screenshot or link anything internal.
- **Attribution**: commits end with a `Co-Authored-By: Claude ...` trailer; use whatever the session's attribution reminder specifies.

## Contact

Adam's email: adam.nagy.mm@gmail.com (also the mailto link in Let's Talk).
