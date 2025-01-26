// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Detiknons.top";
export const SITE_TITLE = "Detiknons.top";
export const SITE_DESCRIPTION = "An Astro Theme for Visual Storytelling";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Detiknons.top - Semua tagar";
export const Tags_DESCRIPTION =
  "Detiknons.top - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in Detiknons.top`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in Detiknons.top`,
    description: `Browse all articles under the ${category} category in Detiknons.top`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "One" },
  { href: "/category/Two/1/", title: "Two" },
  { href: "/category/Three/1/", title: "Three" },
  { href: "/category/Four/1/", title: "Four" },
  { href: "/category/Five/1/", title: "Five" },
  { href: "/category/Six/1/", title: "Six" },
  { href: "/category/Seven/1/", title: "Seven" },
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
    label: "Twitter",
  },
  {
    href: "https://github.com/inotelab",
    icon: "tabler:brand-whatsapp",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
