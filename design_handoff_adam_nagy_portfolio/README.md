# Handoff: Adam Nagy — Portfolio Site

## Overview
Single-page personal portfolio for Adam Nagy, performance marketer & ecommerce manager (Sydney). Goal: land an in-house role. Dark, cinematic, editorial; B&W portrait hero with a frosted-glass panel; glassmorphism cards; amber accent.

## About the Design Files
`Adam Nagy.dc.html` is a **design reference built in HTML** — a prototype showing the intended look and behaviour, not production code. Recreate it in a real stack. No codebase exists yet: recommended **Next.js (App Router) + TypeScript + Tailwind or CSS Modules**, deployed on Vercel. Open the HTML file in a browser (served locally, e.g. `npx serve .`) to see it running. All styles are inline in the file; all behaviour is in the `class Component` script at the bottom.

## Fidelity
**High-fidelity.** Final colours, type, spacing, copy and motion. Recreate pixel-perfectly.

## Design Tokens
Colours
- Background `#0a0a0a` (page + hero)
- Text `#f2efe9`
- Text secondary `rgba(242,239,233,.8)` (body) / `rgba(242,239,233,.66)` (mono labels)
- Accent `#f4a261` (warm amber). Alt accent `#4361ee` (electric blue) — optional theme toggle
- Glass fill `rgba(255,255,255,.07–.08)`, glass border `rgba(255,255,255,.15)`, inner highlight `inset 0 1px 0 rgba(255,255,255,.12–.14)`
- Dividers: dashed `1px rgba(255,255,255,.2)`; solid `1px rgba(255,255,255,.12–.18)`

Typography (Google Fonts)
- **Anton** 400 — display / headings, uppercase
- **Geist** 300/400/500/600 — body
- **Geist Mono** 400/500 — labels, nav, meta; 11–13px, letter-spacing .12–.16em, uppercase
- Scale: hero `min(8vw,13vh)` lh .9 · section H2 `clamp(48px,8vw,128px)` lh .92 · card H3 `clamp(34px,3.6vw,50px)` · stat `clamp(60px,7vw,108px)` · card metric 64px · body `clamp(17px,1.5vw,20px)` lh 1.6 weight 300 · quote `clamp(26px,3.4vw,48px)` weight 300

Radii: pills 999px · cards 24px · large panels 28px
Section padding: `clamp(80–100px, 12–16vh, 140–180px)` vertical, `clamp(20px,5vw,72px)` horizontal. Content max-width 1160px (video 1240px, quote 1080px).
Blur: glass `blur(12px) saturate(130%)`; hero glass panel `blur(18px) saturate(120%) brightness(1.1)`.
Easing: `cubic-bezier(.2,.8,.2,1)` for almost everything.

## Global Layers
- Fixed background layer: `#0a0a0a` + scroll-linked radial gradient (accent at 5%→15% alpha) whose centre drifts from 15%/20% to 85%/80% as page scroll progresses 0→1.
- Film grain overlay (fixed, z 90, SVG fractalNoise baseFrequency .9, opacity .07, `mix-blend-mode: overlay`). Toggleable.
- Custom cursor on fine pointers only (native cursor hidden): 10px `#f2efe9` dot with `mix-blend-mode: difference`, scales 3.2× over links/buttons (.35s). Alt: 28px amber crosshair.
- Section bg glows: blurred radial blobs (accent ~22–34% / white ~10%) behind sections — these are what the glass cards refract.

## Screens / Sections

### Nav (fixed floating pill)
- Top 16px, centred. Hidden until hero bottom is < 60% of viewport; then fades/slides in (opacity, translateY -28px→0, scale .94→1, blur 8px→0; .6–.8s).
- Glass pill, padding 6px, gap 4px. Left: 36px amber circle "AN" (Anton 15px, text `#0a0a0a`). Links (Geist Mono 11px, .12em, padding 11×14): WHO I AM · THE WORK · THE VIDEO · LET'S TALK → anchors `#who #work #video #talk`.
- Active link (section top < 45% viewport): bg `rgba(255,255,255,.14)`, text accent.

### 1. Hero (`#top`) — 100vh, min 620px
- Portrait `assets/adam-portrait.png` full height, centred horizontally, horizontal mask fading edges (transparent 0% → black 22%–78% → transparent 100%).
- Vignette: radial `70% 60% at 62% 38%`, transparent 40% → `rgba(10,10,10,.55)`. Bottom 34% fade to `#0a0a0a`.
- **Glass panel ("the glass bit")**: left 50% of hero, full height. Flat, even: `background: rgba(255,255,255,.05)`, `backdrop-filter: blur(18px) saturate(120%) brightness(1.1)`, right border `1.5px solid rgba(255,255,255,.55)`, box-shadow `inset -1px 0 0 rgba(255,255,255,.25), 24px 0 60px rgba(0,0,0,.3)`. No gradient.
- Text (desktop ≥820px), vertically at 36%:
  - "WHO MAKES" right-aligned to `calc(50% + 3vw)` from right (sits on the glass).
  - "ADS WORK?" starts at `left: calc(50% + 21vh)` (past the face).
  - Below "WHO MAKES": "ADAM NAGY" (Anton `min(3.4vw,5.6vh)`, .14em, accent) + "PERFORMANCE MARKETING & ECOMMERCE" (Mono 12px, 70% white), both right-aligned.
- Mobile (<820px): stacked bottom-left (bottom 120px): WHO MAKES / ADS WORK? at `min(19vw,120px)`, ADAM NAGY `min(9vw,44px)`, subtitle 11px.
- Bottom bar (28px from bottom): "SYDNEY, AU" · glass pill "SCROLL" with 34×2px track and looping amber dot (1.8s) · "EST. 2015".
- Intro (on load): image fades in + scales 1.12→1 (2.4s); glass panel slides in from -100% (1.6s, delay 150ms, `cubic-bezier(.7,0,.2,1)`); lines fade up 40px + unblur 12px (1.4s) staggered 300/520ms; ADAM NAGY clip-path reveal from bottom (1.2s, delay 1100ms); subtitle 1500ms; bottom bar 1800ms.
- Scroll parallax (t = scrolled fraction of hero): image translateY `t*18%`, scale `1+t*.08`; text translateY `-t*120px`, opacity `1 - t*1.6`.

### 2. Who I am (`#who`)
- Eyebrow: "01 —— WHO I AM" (Mono 12px, accent, 48px rule).
- Large glass card (radius 28, padding `clamp(24px,4vw,56px)`): meta row "LOCATION: SYDNEY, AUSTRALIA" / "STATUS: OPEN TO IN-HOUSE"; dashed rule; H2 "10 years. 5 brands. **$11.5M** (accent) in ad spend. Still obsessed with the work." (`clamp(40px,6vw,88px)`, max 15ch); bio paragraph (max 62ch); dashed rule; footer "META · GOOGLE · KLAVIYO · SHOPIFY" / "AU / US / UK / NZ".
- Bio copy: "I'm a performance marketer and ecommerce manager who builds things. Not just campaigns — systems, tools, workflows, the stuff that makes teams actually move faster. I've launched brands from zero, scaled multi-brand portfolios to 10x ROAS, and built internal tools now in production use at the companies I work for. I think in funnels, I move fast, and I have a healthy obsession with why some ads work and most don't."
- Stats row: auto-fit grid `minmax(220px,1fr)`, each with 1px top border: **10x+** ROAS · **$11.5M** AD SPEND MANAGED (accent) · **5** BRANDS · **10+** YEARS IN THE WORK. Count-up from 0 when 60% visible (1.8s, easeOutQuart); if already scrolled past, show final value.

### 3. The work (`#work`)
- Eyebrow "02 —— THE WORK"; H2 "Some things I've built or grown" (max 12ch).
- 2-col auto-fit grid `minmax(440px,1fr)`, gap `clamp(16px,2vw,24px)`. Glass cards radius 24, padding `clamp(24px,3vw,36px)`: mono meta row, dashed rule, Anton title, body, metric (Anton 64px accent + mono label) + pill tags (1px `rgba(255,255,255,.18)` border, Mono 11px).
  1. 01 — PERFORMANCE / MULTI-BRAND · HAVERFORD BRANDS · "Performance marketing across 5 consumer brands." · 10x+ ROAS · tags AU US UK NZ
  2. 02 — LAUNCH / FROM ZERO · FLIGHT RISK · "Full ecommerce launch from zero." · 5.3x ROAS META · 10x ROAS GOOGLE
  3. 03 — INTERNAL TOOL / IN PRODUCTION · EMAIL PLANNING APP · "Internal tool in daily use by a team of 6. Built to replace ad hoc with scalable." · 6 DAILY USERS · tag KLAVIYO API
  4. 04 — BRAND / PREMIUM CONSUMER · THE BILLION ROSES · "Scaling a premium consumer brand. Influencer campaigns with Showpo and Tammy Hembrow." · 8 YEARS · tags SHOWPO, TAMMY HEMBROW
- Hover: translateY -8px, border → accent 65%, glow `0 30px 80px -24px accent 50%` (.5s).

### 4. The video (`#video`)
- Eyebrow "03 —— THE VIDEO". 16:9 panel radius 28: blurred/darkened portrait behind + accent radial, glass overlay.
- Top row: "AN — REEL 01" / "00:00 / 01:00". Centre: glass play button `clamp(84px,10vw,128px)` circle, amber triangle, two pulsing accent rings (scale 1→2, fade, 2.6s, offset 1.3s) + pulsing accent glow (2.6s). Caption "WATCH: 60 SECONDS — WHO I AM". Bottom: "VIDEO COMING SOON" + progress track.
- **TODO:** wire real video (placeholder only). Play button hover scale 1.06.

### 5. Quote
- Centred. Huge accent “ (Anton `clamp(200px,26vw,380px)`), quote in Geist 300: "Adam is a highly skilled, results-driven and proactive professional. His ability to combine technical eCommerce expertise with creative marketing strategies makes him a valuable asset to any team." — CLAIRE BATES, CEO, FONE KING & FLIGHT RISK.

### 6. Let's talk (`#talk`)
- Eyebrow "04 —— LET'S TALK". H2 "Prefer the formal version?" (`clamp(52px,9vw,148px)`); sub "Here's the full CV — the dry but accurate one."
- Glass pill "DOWNLOAD CV" + 30px amber circle "↓"; hover lift -3px, accent border + glow. **TODO:** link real CV PDF.
- "Or just email me — adam.nagy.mm@gmail.com" (mailto, accent underline).
- Closer (Anton `clamp(28px,3.4vw,48px)`): "Open to the right in-house role. Let's find out if that's you." (second sentence accent).
- Footer: "© 2026 ADAM NAGY" / "SYDNEY, AUSTRALIA", 1px top border.

## Interactions & Behaviour
- Scroll reveals: elements below the fold start opacity 0, translateY 48px, blur 6px; reveal on 12% intersection with per-element stagger (0/80/100/120/160…ms), 1–1.1s. Anything already above the viewport (anchor jumps, reload mid-page) must show immediately — never leave content hidden.
- Smooth scroll for anchor links.
- Respect `prefers-reduced-motion` in production (disable parallax, intro, pulses; show content immediately).

## Optional settings (were design toggles)
- Accent: amber `#f4a261` (default) / blue `#4361ee`
- Cursor: dot (default) / crosshair
- Grain: on (default)
Ship with defaults; toggles need not be exposed.

## Assets
- `assets/adam-portrait.png` — B&W portrait supplied by Adam (export a web-optimised WebP/AVIF).
- Fonts: Google Fonts (Anton, Geist, Geist Mono) — use `next/font`.
- Needed from Adam: CV PDF, video file/URL, OG/share image, favicon.

## Files
- `Adam Nagy.dc.html` — the full design (markup + inline styles + behaviour script)
- `support.js` — runtime needed only to open the HTML reference locally
- `assets/adam-portrait.png`
