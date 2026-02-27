import { siteConfig } from "@/lib/site-config";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emma xolouise",
    alternateName: "emmaxolouise",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    sameAs: [
      siteConfig.links.youtube,
      siteConfig.links.instagram,
      siteConfig.links.tiktok,
      siteConfig.links.pinterest,
      siteConfig.links.spotify,
    ],
    jobTitle: "Content Creator",
    worksFor: {
      "@type": "Organization",
      name: "YouTube",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/videos?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateVideoSeriesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoSeries",
    name: "Emma xolouise",
    description: siteConfig.description,
    url: `${siteConfig.url}/videos`,
    creator: {
      "@type": "Person",
      name: "Emma xolouise",
    },
  };
}
