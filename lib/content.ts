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
    body: "Own paid media on Google Ads and Meta Ads, direct the content strategy that feeds it, and run CRM and customer lifecycle strategy across 20 Klaviyo accounts.",
    metrics: [
      { value: "~10×", label: "IN-SEASON ROAS" },
      { value: "5", label: "BRANDS" },
    ],
    tags: [],
    caseStudy: "/case-studies#haverford",
  },
  {
    index: "02",
    kicker: "BRAND LAUNCH",
    meta: "FROM ZERO",
    title: "FLIGHT RISK",
    body: "Built the ad accounts from scratch and ran the launch, scaling from $70 a day to close to $20K a week in Meta and Google spend.",
    metrics: [{ value: "6–7×", label: "BLENDED ROAS" }],
    tags: [],
    caseStudy: "/case-studies#flight-risk",
  },
  {
    index: "03",
    kicker: "HEAD OF DIGITAL",
    meta: "2015 – 2023",
    title: "THE BILLION ROSES",
    body: "Eight years leading digital growth for a premium flower brand, including collaborations with Showpo, Tammy Hembrow, Meshki and White Runway.",
    metrics: [{ value: "100K+", label: "SOCIAL FOLLOWERS" }],
    tags: [],
    caseStudy: "/case-studies#the-billion-roses",
  },
  {
    index: "04",
    kicker: "OWNED MEDIA",
    meta: "ADVERTISING PSYCHOLOGY",
    title: "AD JUNKIES",
    body: "Created a newsletter breaking down why ads make people stop, click and care.",
    metrics: [{ value: "1,500+", label: "SUBSCRIBERS" }],
    tags: [],
    caseStudy: null,
  },
] as const;

export type CaseStudy = {
  id: string;
  index: string;
  kicker: string;
  meta: string;
  title: string;
  lead: string;
  situation: string;
  did: readonly string[];
  result: string;
  metrics: readonly { value: string; label: string }[];
  tags: readonly string[];
  gallery?: {
    label: string;
    items: readonly { src: string; width: number; height: number; alt: string; caption: string }[];
  };
};

export const caseStudies: {
  eyebrow: string;
  description: string;
  headline: readonly [string, string];
  intro: string;
  cases: readonly CaseStudy[];
  closer: string;
  closerAccent: string;
} = {
  eyebrow: "CASE STUDIES",
  description:
    "Performance marketing case studies from Adam Nagy: Haverford Brands, the Flight Risk launch and eight years at The Billion Roses.",
  headline: ["THE CARDS GIVE YOU THE NUMBERS.", "THIS IS THE STORY BEHIND THEM."],
  intro:
    "Three roles, three very different problems: a multi-brand portfolio, a launch from zero, and eight years growing one brand.",
  cases: [
    {
      id: "haverford",
      index: "01",
      kicker: "CURRENT ROLE",
      meta: "SEPT 2025 – PRESENT",
      title: "HAVERFORD BRANDS",
      lead: "Performance marketing and email across a portfolio of sports and lifestyle brands, selling everything from niche industrial netting to professional golf cages in Australia, the US, UK and NZ.",
      situation:
        "Five brands with very different economics: depending on the product, cost per acquisition ranges from about $10 to $250. Each needs its own paid media, creative pipeline and email programme, all running at the same time.",
      did: [
        "Own Meta and Google Ads for all five brands, from account structure to daily optimisation on CPA, CPM and CTR.",
        "Plan content from scratch, including scripting new ad concepts to find the next winning creative.",
        "Watch CTR and CPM for the first signs of creative fatigue, and refresh before performance slides.",
        "Run email strategy across 20 Klaviyo accounts.",
        "Built an AI-assisted planning and reporting tool for the email programme, used by a team of six and pulling live data from Klaviyo.",
      ],
      result:
        "In-season ROAS close to 10×. Creative refreshes timed off CTR and CPM cut CPA by at least 30%. The planning tool lets leadership follow every brand's emails from topic to send, and turned reporting into two or three clicks, saving 4–5 hours of back-and-forth a week.",
      metrics: [
        { value: "~10×", label: "IN-SEASON ROAS" },
        { value: "30%+", label: "LOWER CPA AFTER CREATIVE REFRESHES" },
        { value: "4–5H", label: "SAVED A WEEK BY THE EMAIL TOOL" },
        { value: "20", label: "KLAVIYO ACCOUNTS" },
      ],
      tags: ["META ADS", "GOOGLE ADS", "CREATIVE STRATEGY", "KLAVIYO", "AI TOOLING"],
    },
    {
      id: "flight-risk",
      index: "02",
      kicker: "BRAND LAUNCH",
      meta: "NOV 2024 – FEB 2025",
      title: "FLIGHT RISK",
      lead: "Campaign lead for the launch of an ecommerce e-bike brand, covering both ecommerce and performance marketing.",
      situation:
        "A brand-new brand with no ad accounts, no data and no history, and three months to prove paid media could scale profitably.",
      did: [
        "Built the Meta and Google Ads accounts from scratch.",
        "Set up the launch campaigns: prospecting and remarketing, audience segmentation, bidding strategy and creative testing.",
        "Structured the Shopify storefront, from navigation and product architecture to the customer journey.",
        "Scaled spend step by step while holding efficiency.",
      ],
      result:
        "Scaled from $70 a day to close to $20K a week in combined Meta and Google spend, at a blended ROAS of 6–7×. In the launch phase, Meta ran at 5.3× and Google at 10×.",
      metrics: [
        { value: "~$20K", label: "WEEKLY SPEND, UP FROM $70 A DAY" },
        { value: "6–7×", label: "BLENDED ROAS" },
        { value: "5.3×", label: "META ROAS AT LAUNCH" },
        { value: "10×", label: "GOOGLE ROAS AT LAUNCH" },
      ],
      tags: ["META ADS", "GOOGLE ADS", "SHOPIFY", "LAUNCH"],
    },
    {
      id: "the-billion-roses",
      index: "03",
      kicker: "HEAD OF DIGITAL",
      meta: "2015 – 2023",
      title: "THE BILLION ROSES",
      lead: "Eight years leading digital growth for one of Australia's premium luxury flower brands.",
      situation:
        "A premium brand that needed to keep growing online, with every digital channel, from paid media to social and email, sitting under one role.",
      did: [
        "Led influencer and brand collaborations with well-known Australian and international names, including Showpo, Tammy Hembrow, Meshki and White Runway.",
        "Ran paid media on Meta and Google, plus email marketing.",
        "Owned social media and the content strategy behind it.",
        "Looked after conversion and tracking across the store: landing pages, testing, pixels and analytics.",
      ],
      result:
        "Grew social to around 100–120K followers across platforms. A Valentine's Day collaboration with Showpo sold out the featured products within hours of going live, and brought a wave of new customers, followers and enquiries.",
      metrics: [
        { value: "100K+", label: "SOCIAL FOLLOWERS" },
        { value: "HOURS", label: "TO SELL OUT THE SHOWPO VALENTINE'S DROP" },
        { value: "8", label: "YEARS" },
      ],
      tags: ["INFLUENCER & BRAND COLLABS", "META ADS", "GOOGLE ADS", "EMAIL", "SOCIAL"],
      gallery: {
        label: "SOME OF THE COLLABS",
        items: [
          {
            src: "/images/case-studies/tbr-showpo-valentines.webp",
            width: 800,
            height: 1091,
            alt: "Showpo Instagram post: a model holding a clear box of red roses, captioned 'Have you entered our V-Day competition yet!?' and tagging @the.billion.roses. 7,773 likes.",
            caption: "SHOWPO · VALENTINE'S DAY · 7,773 LIKES",
          },
          {
            src: "/images/case-studies/tbr-meshki.webp",
            width: 800,
            height: 1139,
            alt: "Meshki Instagram post: a clear box of white Billion Roses beside a YSL bag and Tom Ford body oil. 3,160+ likes.",
            caption: "MESHKI · 3,160+ LIKES",
          },
          {
            src: "/images/case-studies/tbr-showpo-hq.webp",
            width: 800,
            height: 1146,
            alt: "Instagram post by @thelazyceo at Showpo HQ: 100 pink roses from The Billion Roses. 1,780 likes.",
            caption: "@THELAZYCEO AT SHOWPO HQ · 1,780 LIKES",
          },
          {
            src: "/images/case-studies/tbr-gold-box.webp",
            width: 800,
            height: 1056,
            alt: "Instagram post by @sydneyfashionblogger: a gold Billion Roses box of gold roses next to a Tom Ford fragrance.",
            caption: "@SYDNEYFASHIONBLOGGER",
          },
        ],
      },
    },
  ],
  closer: "Want the detail behind any of these?",
  closerAccent: "Let's talk.",
};

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
    "Products and internal tools Adam Nagy has built with AI, from a self-serve SaaS to an email planning tool for 20 Klaviyo accounts.",
  headline: ["I FIND THE BOTTLENECK.", "THEN I BUILD THE FIX."],
  intro:
    "Beyond running campaigns, I build. A few products and internal tools I've made with AI, from a self-serve SaaS to a planning tool for 20 email accounts.",
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
      lead: "An internal CRM planning and reporting tool for Haverford's email programme across 20 Klaviyo accounts. A team of six plan each brand's emails in it, from the topic and structure to the wireframe and copy, and leadership can follow every campaign from the first idea.",
      built: [
        "One planning tool covering all 20 Klaviyo accounts",
        "Used by a team of six, with live data pulled from Klaviyo",
        "Every email mapped out as structure, wireframe and copy",
        "Reporting in two or three clicks, saving 4–5 hours a week",
      ],
      tags: ["VERCEL", "SUPABASE", "GITHUB"],
      link: null,
      visual: {
        type: "planner",
        ariaLabel:
          "Illustration: twenty Klaviyo account tiles feeding into one email planner, with sections for structure, wireframe, and topics and copy.",
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
