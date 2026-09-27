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
    kicker: "PERFORMANCE",
    meta: "MULTI-BRAND",
    title: "HAVERFORD BRANDS",
    body: "Performance marketing across 5 consumer brands.",
    metrics: [{ value: "10x+", label: "ROAS" }],
    tags: ["AU", "US", "UK", "NZ"],
  },
  {
    index: "02",
    kicker: "LAUNCH",
    meta: "FROM ZERO",
    title: "FLIGHT RISK",
    body: "Full ecommerce launch from zero.",
    metrics: [
      { value: "5.3x", label: "ROAS META" },
      { value: "10x", label: "ROAS GOOGLE" },
    ],
    tags: [],
  },
  {
    index: "03",
    kicker: "INTERNAL TOOL",
    meta: "IN PRODUCTION",
    title: "EMAIL PLANNING APP",
    body: "Internal tool in daily use by a team of 6. Built to replace ad hoc with scalable.",
    metrics: [{ value: "6", label: "DAILY USERS" }],
    tags: ["KLAVIYO API"],
  },
  {
    index: "04",
    kicker: "BRAND",
    meta: "PREMIUM CONSUMER",
    title: "THE BILLION ROSES",
    body: "Scaling a premium consumer brand. Influencer campaigns with Showpo and Tammy Hembrow.",
    metrics: [{ value: "8", label: "YEARS" }],
    tags: ["SHOWPO", "TAMMY HEMBROW"],
  },
] as const;

export const quote = {
  text: "Adam is a highly skilled, results-driven and proactive professional. His ability to combine technical eCommerce expertise with creative marketing strategies makes him a valuable asset to any team.",
  author: "CLAIRE BATES",
  role: "CEO, FONE KING & FLIGHT RISK",
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
