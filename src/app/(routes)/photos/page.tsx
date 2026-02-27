import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PhotosPageClient } from "@/components/photos-page-client";

export const metadata: Metadata = {
  title: "Photos",
  description: "A curated gallery of Emma's best moments. Lifestyle, fashion, travel & daily inspiration in photos.",
  keywords: ["emmaxolouise photos", "gallery", "lifestyle photos", "fashion", "travel"],
  openGraph: {
    title: `Photos | ${siteConfig.name}`,
    description: "A curated gallery of Emma's best moments. Lifestyle, fashion, travel & daily inspiration.",
    url: `${siteConfig.url}/photos`,
    type: "website",
  },
};

// TODO: Add your photos here
// Place images in public/photos/ folder
const photos = [
  { src: "/photos/emma1.jpg", alt: "" },
  { src: "/photos/emma2.jfif", alt: "" },
  { src: "/photos/emma3.jfif", alt: "" },
  { src: "/photos/emma4.jfif", alt: "" },
  { src: "/photos/emma5.jpg", alt: "" },
  { src: "/photos/emma6.webp", alt: "" },
  { src: "/photos/emma7.jfif", alt: "" },
  { src: "/photos/emma8.jfif", alt: "" },
  { src: "/photos/emma9.jfif", alt: "" },
  { src: "/photos/emma10.jfif", alt: "" },
  { src: "/photos/emma11.jfif", alt: "" },
  { src: "/photos/emma12.jpg", alt: "" },
  { src: "/photos/emma13.jfif", alt: "" },
  { src: "/photos/emma14.jfif", alt: "" },
  { src: "/photos/emma15.jfif", alt: "" },
  { src: "/photos/emma16.jpg", alt: "" },
  { src: "/photos/emma17.jpg", alt: "" },
  { src: "/photos/emma18.jfif", alt: "" },
];

export default function PhotosPage() {
  return <PhotosPageClient photos={photos} />;
}
