export const hero = {
  primary: ["I TURN ATTENTION", "INTO REVENUE."],
  secondary: ["AND IDEAS INTO", "WORKING PRODUCTS."],
  descriptorName: "ADAM NAGY",
  descriptor: "Performance marketing, ecommerce, content strategy and AI development.",
};

export const whoIAm = {
  headline: ["THE CV SHOWS WHAT I'VE DONE.", "THIS IS HOW I THINK."],
  bio: [
    "I'm a performance marketer, content strategist and brand owner with more than 12 years of experience. Today, I own paid media, content direction and email strategy across five brands in four international markets.",
    "I love finding bottlenecks and using AI to remove them, building internal apps, CRM tools and task-specific workflows that reduce manual work and help teams move faster.",
  ],
  stack: "META · GOOGLE · KLAVIYO · SHOPIFY · CLAUDE CODE",
};

export const stats = [
  {
    value: 7.5,
    decimals: 1,
    prefix: "$",
    suffix: "M",
    label: "PAID MEDIA MANAGED",
    accent: true,
  },
  { value: 12, decimals: 0, prefix: "", suffix: "+", label: "YEARS IN GROWTH", accent: false },
  {
    value: 2,
    decimals: 0,
    prefix: "",
    suffix: "",
    label: "COUNTRIES CALLED HOME",
    accent: false,
  },
  {
    value: 2,
    decimals: 0,
    prefix: "",
    suffix: "",
    label: "SMALL HUMANS. MY BIGGEST MOTIVATION.",
    accent: false,
  },
] as const;

export const workItems = [
  {
    index: "01",
    kicker: "CURRENT ROLE",
    meta: "MULTI-BRAND",
    title: "HAVERFORD BRANDS",
    body: "Own paid media on Google Ads and Meta Ads, direct the content strategy that feeds it, and run CRM and customer lifecycle strategy across 16 Klaviyo accounts.",
    metrics: [
      { value: "5", label: "BRANDS" },
      { value: "4", label: "MARKETS" },
    ],
    tags: [],
  },
  {
    index: "02",
    kicker: "BRAND LAUNCH",
    meta: "FROM ZERO",
    title: "FLIGHT RISK",
    body: "Helped launch the ecommerce brand from zero, spanning paid media, creative direction and early growth.",
    metrics: [
      { value: "5.3×", label: "META ROAS" },
      { value: "10×", label: "GOOGLE ROAS" },
    ],
    tags: [],
  },
  {
    index: "03",
    kicker: "AI PRODUCT",
    meta: "CUSTOM BUILT",
    title: "MAGNISCAN.IO",
    body: "Designed and built a security scanner that helps vibe coders find exposed keys, databases and common vulnerabilities.",
    metrics: [{ value: "0→1", label: "PRODUCT BUILD" }],
    tags: [],
  },
  {
    index: "04",
    kicker: "OWNED MEDIA",
    meta: "ADVERTISING PSYCHOLOGY",
    title: "AD JUNKIES",
    body: "Created a newsletter breaking down why ads make people stop, click and care.",
    metrics: [{ value: "1,500+", label: "SUBSCRIBERS" }],
    tags: [],
  },
] as const;

export const behindTheAds = {
  eyebrow: "BEHIND THE ADS",
  intro: "A few things about the person behind the campaigns.",
  move: {
    tag: "2015 · THE MOVE",
    text: "I'm Adam. Originally from Hungary, I moved to Australia in 2015. I completed my first MBA there, specialising in economics and business management. After moving to Australia, I somehow collected another MBA and an MPA. Don't ask.",
  },
  reading: {
    tag: "BEFORE KIDS",
    text: "Free time used to mean a good coffee from an independent café and a book at home. I've always been drawn to self-development, negotiation and behavioural psychology. Mike Michalowicz, Chris Voss, Robert Cialdini, Ray Dalio and Steven Bartlett are usually somewhere on my bookshelf.",
  },
  artie: "Then Artie arrived in 2023.",
  playground: {
    tag: "THE PLAYGROUND ERA",
    text: "Books gradually gave way to playgrounds, park maps and snacks in every pocket. Luckily, Sydney is an amazing place to spend the day outside with little ones.",
  },
  otilia: "In 2025, our daughter Otília joined us.",
  closer: "These days, life is louder and free time is harder to find.",
  closerAccent: "I wouldn't trade it for anything.",
};

export type BuildProject = {
  index: string;
  kicker: string;
  meta: string;
  title: string;
  lead: string;
  built: readonly string[];
  tags: readonly string[];
  link: { href: string; label: string } | null;
  visual:
    | { type: "screenshot"; src: string; width: number; height: number; alt: string; url: string }
    | { type: "planner"; ariaLabel: string; caption: string };
};

export const beyondTheAds: {
  eyebrow: string;
  description: string;
  headline: readonly [string, string];
  intro: string;
  projects: readonly BuildProject[];
  closer: string;
  closerAccent: string;
} = {
  eyebrow: "BEYOND THE ADS",
  description:
    "Products and internal tools Adam Nagy has built with AI, from a self-serve SaaS to a CRM planning tool for 20 brands.",
  headline: ["I FIND THE BOTTLENECK.", "THEN I BUILD THE FIX."],
  intro:
    "Beyond running campaigns, I build. A few products and internal tools I've made with AI, from a self-serve SaaS to a planning tool for 20 brands.",
  projects: [
    {
      index: "01",
      kicker: "SELF-SERVE SAAS",
      meta: "LIVE · OCCASIONLY.APP",
      title: "OCCASIONLY",
      lead: "Built and launched a self-serve, multi-tenant SaaS for occasion-driven retailers such as bakers, florists and gift shops. It saves the birthdays and anniversaries customers shop for, then sends a branded reminder before each date so they reorder in time.",
      built: [
        "An embeddable, white-label widget",
        "A daily reminder engine",
        "A merchant dashboard with revenue tracking",
        "Custom sender domains",
        "An Omnisend integration, in private beta",
      ],
      tags: ["NEXT.JS", "TYPESCRIPT", "SUPABASE", "POSTGRES RLS", "RESEND", "STRIPE", "VERCEL"],
      link: { href: "https://occasionly.app", label: "VISIT OCCASIONLY.APP" },
      visual: {
        type: "screenshot",
        src: "/images/occasionly-home.webp",
        width: 1280,
        height: 756,
        alt: "Screenshot of the Occasionly homepage: the headline 'Your customers forget. Occasionly reminds them.' beside a sample birthday reminder email.",
        url: "occasionly.app",
      },
    },
    {
      index: "02",
      kicker: "INTERNAL TOOL",
      meta: "HAVERFORD BRANDS",
      title: "CRM PLANNING TOOL",
      lead: "An internal CRM strategy planning tool, built for 20 brands. Team members contribute to each brand's plan and build out its emails: the proposed structure, the wireframe, and the topics and copy.",
      built: [
        "One planning tool covering all 20 brands",
        "Team members contribute to each brand's plan",
        "Every email mapped out as structure, wireframe and copy",
      ],
      tags: ["VERCEL", "SUPABASE", "GITHUB"],
      link: null,
      visual: {
        type: "planner",
        ariaLabel:
          "Illustration: twenty brand tiles feeding into one email planner, with sections for structure, wireframe, and topics and copy.",
        caption: "ILLUSTRATION · THE REAL TOOL IS INTERNAL",
      },
    },
    {
      index: "03",
      kicker: "AI PRODUCT",
      meta: "LIVE · MAGNISCAN.IO",
      title: "MAGNISCAN",
      lead: "Designed and built a security scanner that helps vibe coders find exposed keys, databases and common vulnerabilities.",
      built: [
        "Scans apps built on Lovable, Bolt, Replit, Cursor, Claude Code and Codex",
        "Findings explained in plain English, no code needed",
        "Free to scan, with no sign-up required",
      ],
      tags: [],
      link: { href: "https://magniscan.io", label: "VISIT MAGNISCAN.IO" },
      visual: {
        type: "screenshot",
        src: "/images/magniscan-home.webp",
        width: 1280,
        height: 704,
        alt: "Screenshot of the Magniscan homepage: the headline 'Your app is live. Is your site safe?' above a field to scan your site's URL.",
        url: "magniscan.io",
      },
    },
  ],
  closer: "Have a bottleneck worth removing?",
  closerAccent: "Let's talk.",
};

export const quote = {
  text: "I'd hire me because I'm creative. I think outside the box, and I know how to break the pattern. After all, that's how you ended up reading this.",
  author: "ADAM NAGY",
  role: "ON WHY HE WOULD HIRE ADAM NAGY",
};

export const siteConfig = {
  name: "Adam Nagy",
  title: "Adam Nagy — I turn attention into revenue.",
  description:
    "Performance marketing, ecommerce, content strategy and AI development. Open to the right in-house role.",
  email: "adam.nagy.mm@gmail.com",
  location: "Sydney, Australia",
  cvHref: "/Adam-Nagy-CV.pdf",
};
