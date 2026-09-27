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
    body: "Performance marketer managing paid media and helping shape content strategy across five consumer brands in four markets.",
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
