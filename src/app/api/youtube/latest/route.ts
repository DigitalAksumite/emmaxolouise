import { fetchLatestVideosPage } from "@/lib/youtube";

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "12", 10);
    const pageToken = searchParams.get("pageToken") || undefined;

    const { videos, nextPageToken } = await fetchLatestVideosPage({
      limit,
      pageToken: pageToken || undefined,
    });

    return Response.json({ videos, nextPageToken });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { videos: [], nextPageToken: undefined, error: message },
      { status: 500 }
    );
  }
}
