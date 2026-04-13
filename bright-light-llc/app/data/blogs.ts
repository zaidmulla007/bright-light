export const blogs = [
  {
    slug: "how-to-choose-led-lighting",
    image: "/bright-light-1.jpg",
    readTime: 5,
    titleKey: "blog1Title" as const,
    excerptKey: "blog1Excerpt" as const,
    contentKey: "blog1Content" as const,
    dateKey: "blog1Date" as const,
  },
  {
    slug: "understanding-switchgear-guide",
    image: "/bright-light-2.jpg",
    readTime: 6,
    titleKey: "blog2Title" as const,
    excerptKey: "blog2Excerpt" as const,
    contentKey: "blog2Content" as const,
    dateKey: "blog2Date" as const,
  },
  {
    slug: "electrical-safety-tips",
    image: "/bright-light-3.jpg",
    readTime: 4,
    titleKey: "blog3Title" as const,
    excerptKey: "blog3Excerpt" as const,
    contentKey: "blog3Content" as const,
    dateKey: "blog3Date" as const,
  },
  {
    slug: "why-rr-kabel-preferred-uae",
    image: "/bright-light-llc4.jpg",
    readTime: 5,
    titleKey: "blog4Title" as const,
    excerptKey: "blog4Excerpt" as const,
    contentKey: "blog4Content" as const,
    dateKey: "blog4Date" as const,
  },
];

export function getBlogBySlug(slug: string) {
  return blogs.find((b) => b.slug === slug) || null;
}
