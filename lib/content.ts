/**
 * Aperture content model. This typed object is the single source of truth for
 * everything the site renders — edit it to change the site's content. Example
 * photography is from Unsplash (free under the Unsplash License) — swap the IDs.
 */

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type PageKey = "home" | "work" | "story" | "studio" | "contact";

export type Featured = {
  kicker: string;
  title: string;
  note: string;
  slot: string;
  image: string;
  ratio: string;
  cols: string;
  offset: string;
  para: number;
};

export type Discipline = { num: string; name: string; body: string };
export type Project = {
  num: string;
  title: string;
  kind: string;
  year: string;
  image: string;
};
export type GalleryShot = {
  label: string;
  ratio: string;
  span: string;
  image: string;
};
export type KV = { k: string; v: string };
export type Field = { label: string; ph: string };

export type SiteContent = {
  studioName: string;
  est: string;
  nav: { key: PageKey; label: string }[];
  home: {
    heroCaption: string;
    heroImage: string;
    kicker: string;
    intro: string;
    cta: string;
    studioLabel: string[];
    statement: string;
    body: string;
    workHeading: string;
    workYears: string;
    featured: Featured[];
    testimonialLabel: string;
    quote: string;
    quoteBy: string;
    disciplines: Discipline[];
    ctaHeading: string[];
    ctaButton: string;
  };
  work: { heading: string; intro: string; projects: Project[] };
  story: {
    kicker: string;
    title: string;
    intro: string;
    meta: KV[];
    gallery: GalleryShot[];
    nextLabel: string;
    nextTitle: string;
    nextMeta: string;
  };
  studio: {
    heading: string;
    intro: string;
    body: string;
    process: Discipline[];
    portraitCaption: string;
    portraitImage: string;
    credits: KV[];
  };
  contact: {
    heading: string[];
    intro: string;
    email: string;
    info: KV[];
    fields: Field[];
  };
  footer: { address: string; meta: string };
};

export const content: SiteContent = {
  studioName: "Aperture",
  est: "EST. 2011",
  nav: [
    { key: "home", label: "Home" },
    { key: "work", label: "Work" },
    { key: "story", label: "Project" },
    { key: "studio", label: "Studio" },
    { key: "contact", label: "Contact" },
  ],
  home: {
    heroCaption: "Fig. 01 — hero frame / 3200×2000 / shot on dark ground",
    heroImage: u("1521531147675-c7031e5e1d25", 2000),
    kicker: "Multi-discipline photography studio · Lisbon",
    intro:
      "We photograph slowly. Weddings, portraits, editorial and the quiet architecture in between — always with real light, and always with the person in front of it.",
    cta: "See the work",
    studioLabel: [
      "The studio",
      "Ana Reis & Tomás Lund",
      "Two photographers,\none darkroom",
    ],
    statement:
      "A photograph should still feel like the room it was made in — the warmth of it, the noise of it, the way somebody looked at somebody else when nobody was watching.",
    body: "We keep the studio small on purpose. One project at a time, a long conversation before the camera comes out, and prints you can hold at the end of it. Eleven years, four disciplines, and a stubborn preference for available light.",
    workHeading: "Selected work",
    workYears: "2022 — 2026",
    featured: [
      {
        kicker: "Wedding · Sintra",
        title: "Marta & Ivo",
        note: "Two days, one long rainstorm, and the best light arriving at 19:40.",
        slot: "Frame 01 — 2400×1600",
        image: u("1519741497674-611481863552", 1400),
        ratio: "3 / 2",
        cols: "minmax(0,1.6fr) minmax(0,1fr)",
        offset: "0",
        para: 0.06,
      },
      {
        kicker: "Architecture · Comporta",
        title: "Casa Bento",
        note: "A house built around a single window. We waited for the hour it was made for.",
        slot: "Frame 02 — 2000×2500",
        image: u("1698864551605-fab9fed03af5", 1100),
        ratio: "4 / 5",
        cols: "minmax(0,1fr) minmax(0,1fr)",
        offset: "14%",
        para: 0.09,
      },
      {
        kicker: "Editorial · Alentejo",
        title: "Salt & Wool",
        note: "Eight pages for a small mill that has been dyeing by hand since 1908.",
        slot: "Frame 03 — 3000×1500",
        image: u("1615285103008-306b965bcc95", 1600),
        ratio: "2 / 1",
        cols: "minmax(0,2fr) minmax(0,1fr)",
        offset: "0",
        para: 0.05,
      },
    ],
    testimonialLabel: "What clients tell us",
    quote: "“They stayed until the light went. Then they stayed a bit longer.”",
    quoteBy: "Marta & Ivo — wedding, Sintra",
    disciplines: [
      {
        num: "01",
        name: "Weddings",
        body: "Full days, documentary-led. Two photographers, one story, hand-bound album.",
      },
      {
        num: "02",
        name: "Portraits",
        body: "Studio or your kitchen. An hour of talking, twenty minutes of photographs.",
      },
      {
        num: "03",
        name: "Editorial",
        body: "Commissions for magazines and makers who want the process in frame.",
      },
      {
        num: "04",
        name: "Architecture",
        body: "Spaces photographed as they are lived in, at the hour they look best.",
      },
    ],
    ctaHeading: ["Two dates left", "this autumn."],
    ctaButton: "Start a conversation",
  },
  work: {
    heading: "Work",
    intro:
      "Twelve projects we still think about. Hover a line to see the frame; open one to read how it was made.",
    projects: [
      { num: "01", title: "Marta & Ivo", kind: "Wedding", year: "2026", image: u("1519741497674-611481863552", 800) },
      { num: "02", title: "Casa Bento", kind: "Architecture", year: "2025", image: u("1698864551605-fab9fed03af5", 800) },
      { num: "03", title: "Salt & Wool", kind: "Editorial", year: "2025", image: u("1615285103008-306b965bcc95", 800) },
      { num: "04", title: "The Reis Sisters", kind: "Portrait", year: "2025", image: u("1636208640803-6a443f9676d4", 800) },
      { num: "05", title: "Cais do Sodré", kind: "Documentary", year: "2024", image: u("1733149355629-40bc1f1255a2", 800) },
      { num: "06", title: "Ateliê Nove", kind: "Commercial", year: "2024", image: u("1653152232509-512d636a27fa", 800) },
      { num: "07", title: "June, in a Field", kind: "Wedding", year: "2024", image: u("1519741196428-6a2175fa2557", 800) },
      { num: "08", title: "Quiet Rooms", kind: "Architecture", year: "2023", image: u("1628676252184-b336470aeaff", 800) },
      { num: "09", title: "Hands at Work", kind: "Portrait", year: "2023", image: u("1716593518098-10cb3b1445ab", 800) },
      { num: "10", title: "Almond Season", kind: "Editorial", year: "2022", image: u("1613271529165-44b375fb4a98", 800) },
    ],
  },
  story: {
    kicker: "Wedding · Two days · Sintra, PT",
    title: "Marta & Ivo",
    intro:
      "It rained until four. We photographed the waiting instead — steam on the kitchen window, a borrowed jacket, someone's mother pinning a hem twice. By the time the sky opened, everyone had forgotten we were there.",
    meta: [
      { k: "Client", v: "Marta & Ivo Serra" },
      { k: "Where", v: "Quinta da Regaleira, Sintra" },
      { k: "Coverage", v: "Two days · 2 photographers" },
      { k: "Delivered", v: "640 frames · 40-page album" },
    ],
    gallery: [
      { label: "Kitchen window / 2400×1600", ratio: "3 / 2", span: "span 4", image: u("1513357526676-ebd578990a2e", 1400) },
      { label: "Hem, pinned twice / 1600×2000", ratio: "4 / 5", span: "span 2", image: u("1695266392136-1805eef542ac", 900) },
      { label: "Borrowed jacket / 1600×2000", ratio: "4 / 5", span: "span 2", image: u("1555816687-434033d6739a", 900) },
      { label: "First look, 16:40 / 2400×1600", ratio: "3 / 2", span: "span 4", image: u("1680624528924-7ee5542e4f4d", 1400) },
      { label: "Rain on the terrace / 2400×1800", ratio: "4 / 3", span: "span 3", image: u("1668101608083-2e01659c7a95", 1100) },
      { label: "Table, after / 2400×1800", ratio: "4 / 3", span: "span 3", image: u("1572919548316-d18f09fc8817", 1100) },
      { label: "Last dance / 3000×1500", ratio: "2 / 1", span: "span 6", image: u("1516117525866-d85459db7457", 1600) },
      { label: "Pepper, uninvited / 1600×2000", ratio: "4 / 5", span: "span 2", image: u("1572725416536-b8232fe46a24", 900) },
    ],
    nextLabel: "Next project",
    nextTitle: "Casa Bento →",
    nextMeta: "Editorial · 2025",
  },
  studio: {
    heading: "The studio",
    intro:
      "Aperture is Ana and Tomás, a darkroom in Alfama, and a dog called Pepper who appears in more frames than she should.",
    body: "We met assisting on the same fashion shoot in 2011 and spent the whole day arguing about whether to move a lamp. We still argue about the lamp. What we agree on: no shot lists longer than a page, no posing anyone into a person they aren't, and every commission ends with something printed on paper.",
    process: [
      { num: "01", name: "A long email", body: "You tell us the place and the people. We ask about the light." },
      { num: "02", name: "Coffee first", body: "We meet before we shoot. No shot list longer than one page." },
      { num: "03", name: "The day itself", body: "We stay out of the way until we shouldn’t. Available light only." },
      { num: "04", name: "Paper", body: "Hand-edited within three weeks, then something printed to keep." },
    ],
    portraitCaption: "Portrait — Ana & Tomás / 1600×2000",
    portraitImage: u("1634733049839-0292be607569", 1100),
    credits: [
      { k: "Founded", v: "Lisbon, 2011" },
      { k: "Photographers", v: "Ana Reis · Tomás Lund" },
      { k: "Darkroom", v: "Alfama, by appointment" },
      { k: "Travel", v: "Europe & anywhere with a train" },
    ],
  },
  contact: {
    heading: ["Tell us about", "the light."],
    intro:
      "Where it is, when it happens, and who will be standing in it. We answer every note within two days — usually with more questions.",
    email: "studio@aperture.example",
    info: [
      { k: "Studio", v: "Example Street 8\n1200-690 Lisboa" },
      { k: "Hours", v: "Tue–Fri, 10:00–18:00\nWeekends on location" },
      { k: "Enquiries", v: "studio@aperture.example\n+351 21 000 0000" },
    ],
    fields: [
      { label: "Your name", ph: "Marta Serra" },
      { label: "Email", ph: "you@somewhere.example" },
      { label: "Dates", ph: "Late September 2026" },
      { label: "Kind of commission", ph: "Wedding · two days" },
    ],
  },
  footer: {
    address: "Aperture — Example Street 8, Lisboa",
    meta: "© 2026 · Instagram · Prints",
  },
};
