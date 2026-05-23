/**
 * Cloudflare Pages Function — HLS gate.
 * Validates a pocTickets pass token (non-redeeming) before serving stream URL.
 *
 * Usage from player:
 *   GET /api/livestream-check?token=<qr_token>&cam_id=<id>
 * Returns: { valid: true, stream_url: "https://cams.portofcams.com/<cam>/playlist.m3u8" }
 *       or { valid: false, reason: ... }
 */

interface Env {
  POCTICKETS_BASE_URL: string;
  POCTICKETS_API_KEY: string;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://pro.portofcams.com",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204, headers: CORS_HEADERS });

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const camId = url.searchParams.get("cam_id");
  if (!token || !camId) {
    return Response.json({ valid: false, reason: "missing token or cam_id" }, { status: 400, headers: CORS_HEADERS });
  }

  const base = env.POCTICKETS_BASE_URL || "https://tickets.portofcams.com";
  const key = env.POCTICKETS_API_KEY;
  if (!key) return Response.json({ valid: false, reason: "not_configured" }, { status: 503, headers: CORS_HEADERS });

  const r = await fetch(`${base}/api/pass/${encodeURIComponent(token)}/check`, {
    headers: { "X-API-Key": key },
  });
  if (!r.ok) return Response.json({ valid: false, reason: "upstream_error" }, { status: 502, headers: CORS_HEADERS });
  const check = (await r.json()) as
    | { valid: true; event: { name: string }; kind: string; valid_until: string | null }
    | { valid: false; reason: string };

  if (!check.valid) return Response.json(check, { status: 403, headers: CORS_HEADERS });

  // Pass is valid — return the signed/internal stream URL.
  // Cameras.portofcams.com serves HLS; in real impl, sign URL with short-lived token.
  return Response.json({
    valid: true,
    cam_id: camId,
    stream_url: `https://cams.portofcams.com/${camId}/playlist.m3u8`,
    event_name: check.event.name,
    valid_until: check.valid_until,
  }, { headers: CORS_HEADERS });
};
