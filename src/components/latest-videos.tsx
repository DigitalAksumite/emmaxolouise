"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";

type LatestVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnailUrl: string;
};

type ApiResponse = {
  videos: LatestVideo[];
  error?: string;
};

export function LatestVideos() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setLoading(true);
        const res = await fetch("/api/youtube/latest");
        const json = (await res.json()) as ApiResponse;
        if (cancelled) return;
        setData(json);
      } catch {
        if (cancelled) return;
        setData({ videos: [], error: "Failed to load videos." });
      } finally {
        if (cancelled) return;
        setLoading(false);
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-[#e7e5e4] bg-white p-4"
          >
            <div className="aspect-video w-full rounded-xl bg-[#f5f5f4]" />
            <div className="mt-4 h-4 w-3/4 rounded bg-[#f5f5f4]" />
            <div className="mt-2 h-3 w-1/2 rounded bg-[#f5f5f4]" />
          </div>
        ))}
      </div>
    );
  }

  if (data?.error) {
    return (
      <div className="mt-8 text-center">
        <p className="mb-4 text-[#78716c]">Videos are loading from YouTube...</p>
        <a
          href="https://www.youtube.com/@emmaxolouise"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#fb7185] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#fb7185]/20 transition-all hover:bg-[#f43f5e]"
        >
          <Play className="h-4 w-4" />
          Watch on YouTube
        </a>
      </div>
    );
  }

  if (!data || data.videos.length === 0) {
    return (
      <div className="mt-8 text-sm text-[#78716c]">No videos found.</div>
    );
  }

  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.videos.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noreferrer"
          className="group block overflow-hidden rounded-2xl border border-[#e7e5e4] bg-white transition-all duration-300 hover:border-[#fb7185] hover:shadow-lg"
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
              <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-[#fb7185] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Play className="ml-1 h-6 w-6 fill-white text-white" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="line-clamp-2 text-sm font-semibold leading-snug text-[#292524] transition-colors group-hover:text-[#fb7185]">
              {video.title}
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-[#78716c]">
              <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
              <span className="h-1 w-1 rounded-full bg-[#d6d3d1]" />
              <span className="text-[#fb7185]">YouTube</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
