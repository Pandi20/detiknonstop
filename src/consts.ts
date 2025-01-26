// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Detiknons.top";
export const SITE_TITLE = "Detiknons.top";
export const SITE_DESCRIPTION = "Ringkasan berita berbasis AI dari sumber terpercaya, cepat dan praktis.";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Detiknons.top - Semua tagar";
export const Tags_DESCRIPTION =
  "Detiknons.top - Semua tagar yang berkaitan";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `Semua berita dengan tagar '${tag}' di Detiknons.top`,
    description: `Jelajahi berita dengan tagar ${tag} untuk persfektif berbeda dan analisis mendalam.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `Semua berita kategori '${category}' di Detiknons.top`,
    description: `Cari berita kategori ${category} di Detiknons.top`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/Hiburan/1/", title: "Hiburan" },
  { href: "/category/Olahraga/1/", title: "Olahraga" },
  { href: "/category/Teknologi/1/", title: "Teknologi" },
  { href: "/category/Kesehatan/1/", title: "Kesehatan" },
  { href: "/category/Ekonomi/1/", title: "Ekonomi" },
  { href: "/category/Kriminal/1/", title: "Kriminal" },
  { href: "/category/Sosial/1/", title: "Sosial" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/inotelab",
    icon: "tabler:brand-youtube",
    label: "Youtube",
  },
  {
    href: "https://github.com/inotelab",
    icon: "tabler:brand-whatsapp",
    label: "Whatsapp",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Pencarian`;
export const SEARCH_PAGE_DESCRIPTION = `Cari semua berita di ${SITE_TITLE}`;
export const SEARCH_CONSOLE_GOOGLE='test'