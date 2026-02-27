import { VideosFeed } from "@/components/videos-feed";
import { Play, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Videos",
  description: "Watch all of Emma's latest YouTube videos. Productivity, lifestyle, fashion & motivation content.",
  keywords: ["emmaxolouise videos", "YouTube", "lifestyle vlogs", "productivity", "fashion"],
  openGraph: {
    title: `Videos | ${siteConfig.name}`,
    description: "Watch all of Emma's latest YouTube videos. Productivity, lifestyle, fashion & motivation content.",
    url: `${siteConfig.url}/videos`,
    type: "website",
  },
};

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      {/* Banner Hero Section */}
      <section className="relative overflow-hidden bg-[#fb7185]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-14">
          <div className="flex flex-col items-start text-left">
            {/* Title with Emoji */}
            <div className="flex items-center gap-3">
              <span className="text-4xl">🎬</span>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Videos
              </h1>
            </div>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90">
              Latest uploads and most popular content from emmaxolouise. Productivity, lifestyle, fashion & motivation 💌
            </p>

            {/* Buttons */}
            <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
              <a
                href="https://www.youtube.com/@emmaxolouise"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#fb7185] transition-all hover:bg-white/90"
              >
                <Play className="h-5 w-5" />
                Watch on YouTube
              </a>
              <a
                href="https://www.youtube.com/@emmaxolouise/videos"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-6 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#fb7185]"
              >
                <Sparkles className="h-5 w-5" />
                Browse All
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Feed Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <VideosFeed pageSize={12} />
        </div>
      </section>
    </main>
  );
}
