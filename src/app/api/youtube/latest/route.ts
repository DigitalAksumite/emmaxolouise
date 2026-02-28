import { fetchLatestVideosPage } from "@/lib/youtube";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "12", 10);
    const pageToken = searchParams.get("pageToken") || undefined;

    const { videos, nextPageToken } = await fetchLatestVideosPage({
      limit,
      pageToken: pageToken || undefined,
    });

    return Response.json(
      { videos, nextPageToken },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { videos: [], nextPageToken: undefined, error: message },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  }
}
