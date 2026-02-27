import { youtubeGet } from "@/lib/youtube";
import type { LatestVideo } from "@/lib/youtube";

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export async function GET(request?: Request) {
  try {
    const limit = 12;
    const pageToken = undefined;

    // Search for videos by channel, sorted by view count
    type SearchResponse = {
      items: Array<{
        id?: { videoId?: string };
        snippet?: {
          title?: string;
          publishedAt?: string;
          thumbnails?: {
            default?: { url?: string };
            medium?: { url?: string };
            high?: { url?: string };
            standard?: { url?: string };
            maxres?: { url?: string };
          };
        };
      }>;
      nextPageToken?: string;
    };

    const data = await youtubeGet<SearchResponse>("search", {
      part: "snippet",
      q: "emmaxolouise",
      type: "video",
      order: "viewCount",
      maxResults: String(Math.min(Math.max(limit, 1), 50)),
    });

    const videos: LatestVideo[] = (data.items ?? [])
      .map((item) => {
        const videoId = item.id?.videoId;
        const title = item.snippet?.title;
        const publishedAt = item.snippet?.publishedAt;
        const thumbs = item.snippet?.thumbnails;
        const thumbnailUrl =
          thumbs?.maxres?.url ||
          thumbs?.standard?.url ||
          thumbs?.high?.url ||
          thumbs?.medium?.url ||
          thumbs?.default?.url ||
          "";

        if (!videoId || !title || !publishedAt || !thumbnailUrl) return null;

        return { id: videoId, title, publishedAt, thumbnailUrl };
      })
      .filter((v): v is LatestVideo => Boolean(v));

    return Response.json({
      videos,
      nextPageToken: data.nextPageToken,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { videos: [], nextPageToken: undefined, error: message },
      { status: 500 }
    );
  }
}
