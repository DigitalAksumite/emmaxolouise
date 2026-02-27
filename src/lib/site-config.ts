export const siteConfig = {
  name: "Emma xolouise",
  shortName: "emmaxolouise",
  description:
    "A digital diary of my life. Productivity, lifestyle, fashion & motivating you to be your better self. Edinburgh University student sharing my love of the city.",
  url: "https://emmaxolouise.com",
  ogImage: "/images/emma.jpg",
  links: {
    youtube: "https://youtube.com/@emmaxolouise",
    instagram: "https://instagram.com/emmaxolouise",
    tiktok: "https://tiktok.com/@emmaxolouisee",
    pinterest: "https://pinterest.co.uk/missemmaxo7",
    spotify: "https://open.spotify.com/user/fabrad7",
  },
  creator: "Digital Aksumite",
};

export const defaultMetadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Emma xolouise",
    "YouTube",
    "lifestyle",
    "productivity",
    "fashion",
    "motivation",
    "Edinburgh",
    "vlogs",
    "content creator",
    "influencer",
  ],
  authors: [{ name: "Emma xolouise" }],
  creator: "Emma xolouise",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@emmaxolouise",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
