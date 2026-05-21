/**
 * Cloudflare Pages Function — proxies host application form submissions
 * to the public ai.portofcams.com host-applications endpoint.
 *
 * The upstream endpoint is intentionally public (it's a contact form) and
 * server-side rate-limited per IP. No API key required.
 */

const API_URL = "https://ai.portofcams.com/api/host-applications";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://pro.portofcams.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const onRequestPost: PagesFunction = async ({ request }) => {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object" || !body.name || !body.email || !body.location) {
      return Response.json(
        { success: false, error: "Name, email, and location are required" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const forwardedFor =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for") ||
      "";

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(forwardedFor ? { "X-Forwarded-For": forwardedFor } : {}),
      },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({ success: false, error: "Bad upstream response" }));

    return Response.json(data, {
      status: response.status,
      headers: CORS_HEADERS,
    });
  } catch (err) {
    return Response.json(
      { success: false, error: "Failed to process application" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
};
