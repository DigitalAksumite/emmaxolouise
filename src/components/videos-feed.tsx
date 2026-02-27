"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Play, Flame, Clock } from "lucide-react";

type LatestVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnailUrl: string;
};

type ApiResponse = {
  videos: LatestVideo[];
  nextPageToken?: string;
  error?: string;
};

type SortType = "latest" | "popular";

type Props = {
  pageSize?: number;
};

export function VideosFeed({ pageSize = 12 }: Props) {
  const [sortBy, setSortBy] = useState<SortType>("latest");
  const [videos, setVideos] = useState<LatestVideo[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const canLoadMore = useMemo(
    () => !error && (Boolean(nextPageToken) || videos.length === 0),
    [nextPageToken, videos.length, error]
  );

  const load = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const endpoint = sortBy === "latest" ? "/api/youtube/latest" : "/api/youtube/popular";
      const url = new URL(endpoint, window.location.origin);
      url.searchParams.set("limit", String(pageSize));
      if (nextPageToken) url.searchParams.set("pageToken", nextPageToken);

      const res = await fetch(url.toString());
      const json = (await res.json()) as ApiResponse;

      if (!res.ok || json.error) {
        throw new Error(json.error || `Request failed (${res.status})`);
      }

      setVideos((prev) => {
        const existing = new Set(prev.map((v) => v.id));
        const incoming = (json.videos ?? []).filter((v) => !existing.has(v.id));
        return [...prev, ...incoming];
      });

      setNextPageToken(json.nextPageToken);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to load videos.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [loading, nextPageToken, pageSize, sortBy]);

  // Reset and reload when sort changes
  useEffect(() => {
    setVideos([]);
    setNextPageToken(undefined);
    setError(null);
  }, [sortBy]);

  useEffect(() => {
    if (videos.length === 0 && !error && !loading) {
      void load();
    }
  }, [videos.length, error, loading, load]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        if (!canLoadMore) return;
        void load();
      },
      { rootMargin: "600px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [canLoadMore, load]);

  return (
    <div className="mt-8">
      {/* Filter Tabs */}
      <div className="mb-8 flex items-center gap-3 border-b border-[#e7e5e4] pb-4">
        <button
          onClick={() => setSortBy("latest")}
          className={`group flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
            sortBy === "latest"
              ? "bg-[#fb7185] text-white shadow-md shadow-[#fb7185]/20"
              : "border border-[#e7e5e4] bg-white text-[#44403c] hover:border-[#fb7185] hover:text-[#fb7185]"
          }`}
        >
          <Clock className="h-4 w-4" />
          Latest
        </button>
        <button
          onClick={() => setSortBy("popular")}
          className={`group flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
            sortBy === "popular"
              ? "bg-[#fb7185] text-white shadow-md shadow-[#fb7185]/20"
              : "border border-[#e7e5e4] bg-white text-[#44403c] hover:border-[#fb7185] hover:text-[#fb7185]"
          }`}
        >
          <Flame className="h-4 w-4" />
          Popular
        </button>
      </div>

      {videos.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-[#e7e5e4] bg-white p-4 transition-all hover:border-[#fb7185] hover:shadow-lg"
            >
              {/* Thumbnail with Play Overlay */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fb7185] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6 fill-white" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-4">
                <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-[#292524] transition-colors group-hover:text-[#fb7185]">
                  {video.title}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-xs text-[#78716c]">
                  <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span className="text-[#fb7185]">YouTube</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {error && (
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
      )}

      {!error && <div ref={sentinelRef} className="h-8" />}

      {loading && (
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#78716c]">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#e7e5e4] border-t-[#fb7185]" />
          Loading...
        </div>
      )}

      {!loading && !error && videos.length > 0 && !nextPageToken && (
        <div className="mt-6 text-center text-sm text-[#78716c]">
          You&apos;re all caught up. 💌
        </div>
      )}
    </div>
  );
}
