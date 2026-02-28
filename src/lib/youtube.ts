type YouTubeThumbnail = {
  url: string;
  width?: number;
  height?: number;
};

type YouTubeThumbnails = {
  default?: YouTubeThumbnail;
  medium?: YouTubeThumbnail;
  high?: YouTubeThumbnail;
  standard?: YouTubeThumbnail;
  maxres?: YouTubeThumbnail;
};

export type LatestVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnailUrl: string;
};

export type LatestVideosResult = {
  videos: LatestVideo[];
  nextPageToken?: string;
};

function requireEnv(name: string): string | null {
  const value = process.env[name];
  if (!value) return null;
  return value;
}

export async function youtubeGet<T>(path: string, params: Record<string, string>) {
  const apiKey = requireEnv("YOUTUBE_API_KEY");
  if (!apiKey) {
    throw new Error(
      "Missing YOUTUBE_API_KEY. Create a Google API key for YouTube Data API v3 and set it in a local environment variable."
    );
  }

  const url = new URL(`https://www.googleapis.com/youtube/v3/${path}`);
  url.search = new URLSearchParams({ ...params, key: apiKey }).toString();

  const res = await fetch(url.toString(), {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`YouTube API error (${res.status}): ${text}`);
  }

  return (await res.json()) as T;
}

async function resolveChannelId(): Promise<string> {
  const configured = requireEnv("YOUTUBE_CHANNEL_ID");
  if (configured) return configured;

  type SearchResponse = {
    items: Array<{ id: { channelId?: string } }>;
  };

  const data = await youtubeGet<SearchResponse>("search", {
    part: "snippet",
    q: "emmaxolouise",
    type: "channel",
    maxResults: "1",
  });

  const channelId = data.items?.[0]?.id?.channelId;
  if (!channelId) {
    throw new Error(
      "Could not resolve channelId. Set YOUTUBE_CHANNEL_ID to the channel's ID to make this reliable."
    );
  }

  return channelId;
}

async function getUploadsPlaylistId(channelId: string): Promise<string> {
  type ChannelsResponse = {
    items: Array<{
      contentDetails?: { relatedPlaylists?: { uploads?: string } };
    }>;
  };

  const data = await youtubeGet<ChannelsResponse>("channels", {
    part: "contentDetails",
    id: channelId,
    maxResults: "1",
  });

  const uploads = data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploads) {
    throw new Error("Could not find uploads playlist for channel.");
  }

  return uploads;
}

export async function fetchLatestVideos(limit = 9): Promise<LatestVideo[]> {
  const channelId = await resolveChannelId();
  const uploadsPlaylistId = await getUploadsPlaylistId(channelId);

  type PlaylistItemsResponse = {
    nextPageToken?: string;
    items: Array<{
      snippet?: {
        resourceId?: { videoId?: string };
        title?: string;
        publishedAt?: string;
        thumbnails?: YouTubeThumbnails;
      };
    }>;
  };

  async function fetchPage(pageToken?: string): Promise<LatestVideosResult> {
    const data = await youtubeGet<PlaylistItemsResponse>("playlistItems", {
      part: "snippet",
      playlistId: uploadsPlaylistId,
      maxResults: String(Math.min(Math.max(limit, 1), 9)),
      ...(pageToken ? { pageToken } : {}),
    });

    const videos = (data.items ?? [])
      .map((item) => {
        const videoId = item.snippet?.resourceId?.videoId;
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

        return {
          id: videoId,
          title,
          publishedAt,
          thumbnailUrl,
        } satisfies LatestVideo;
      })
      .filter((v): v is LatestVideo => Boolean(v));

    return { videos, nextPageToken: data.nextPageToken };
  }

  return (await fetchPage()).videos;
}

export async function fetchLatestVideosPage(args: {
  limit?: number;
  pageToken?: string;
}): Promise<LatestVideosResult> {
  const limit = args.limit ?? 9;
  const pageToken = args.pageToken;

  const channelId = await resolveChannelId();
  const uploadsPlaylistId = await getUploadsPlaylistId(channelId);

  type PlaylistItemsResponse = {
    nextPageToken?: string;
    items: Array<{
      snippet?: {
        resourceId?: { videoId?: string };
        title?: string;
        publishedAt?: string;
        thumbnails?: YouTubeThumbnails;
      };
    }>;
  };

  const data = await youtubeGet<PlaylistItemsResponse>("playlistItems", {
    part: "snippet",
    playlistId: uploadsPlaylistId,
    maxResults: String(Math.min(Math.max(limit, 1), 12)),
    ...(pageToken ? { pageToken } : {}),
  });

  const videos = (data.items ?? [])
    .map((item) => {
      const videoId = item.snippet?.resourceId?.videoId;
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

      return {
        id: videoId,
        title,
        publishedAt,
        thumbnailUrl,
      } satisfies LatestVideo;
    })
    .filter((v): v is LatestVideo => Boolean(v));

  return { videos, nextPageToken: data.nextPageToken };
}
