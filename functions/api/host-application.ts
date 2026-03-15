/**
 * Cloudflare Pages Function — proxies host application form submissions
 * to the AI services API at ai.portofcams.com.
 */

const API_URL = "https://ai.portofcams.com/api/host-applications";
const API_KEY = "fn_pbhINS8ivTLYF84ofv_nGPjj3ZdBPVa5SsCz0k9BZ3idn";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://portofcams.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const onRequestPost: PagesFunction = async ({ request }) => {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.location) {
      return Response.json(
        { success: false, error: "Name, email, and location are required" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

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
