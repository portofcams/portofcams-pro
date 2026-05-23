/**
 * Cloudflare Pages Function — buy a 24h livestream pass via pocTickets.
 * Auth: none on the proxy itself (rate-limited upstream + Stripe is the real gate
 *       once wired). For now this is a stub demo; replace with Stripe-confirmed flow
 *       before exposing publicly.
 */

interface Env {
  POCTICKETS_BASE_URL: string;
  POCTICKETS_API_KEY: string;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://pro.portofcams.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204, headers: CORS_HEADERS });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = (await request.json()) as { buyer_email?: string; cam_id?: string };
    if (!body.buyer_email || !body.cam_id) {
      return Response.json({ error: "buyer_email + cam_id required" }, { status: 400, headers: CORS_HEADERS });
    }

    const base = env.POCTICKETS_BASE_URL || "https://tickets.portofcams.com";
    const key = env.POCTICKETS_API_KEY;
    if (!key) return Response.json({ error: "service not configured" }, { status: 503, headers: CORS_HEADERS });

    // 1. upsert event (one event row per cam)
    const ev = await fetch(`${base}/api/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-Key": key },
      body: JSON.stringify({
        source_event_id: `cam-${body.cam_id}`,
        name: `Livestream: ${body.cam_id}`,
        kind: "livestream_pass",
        ticket_types: [{ name: "24h Pass", price_cents: 499 }],
      }),
    });
    if (!ev.ok) return Response.json({ error: `event upsert failed: ${await ev.text()}` }, { status: 502, headers: CORS_HEADERS });
    const event = (await ev.json()) as { event_id: number; ticket_types: { id: number; name: string }[] };
    const tt = event.ticket_types.find((t) => t.name === "24h Pass")!;

    // 2. create order (status=paid because demo; production hooks this into Stripe webhook)
    const now = new Date();
    const order = await fetch(`${base}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-Key": key },
      body: JSON.stringify({
        event_id: event.event_id,
        buyer_email: body.buyer_email,
        items: [{ ticket_type_id: tt.id, qty: 1 }],
        status: "paid",
        meta: { cam_id: body.cam_id, source: "pro-livestream-pass" },
      }),
    });
    if (!order.ok) return Response.json({ error: `order failed: ${await order.text()}` }, { status: 502, headers: CORS_HEADERS });
    const o = (await order.json()) as { order_id: string; passes: { qr_token: string }[] };

    // Demo: set 24h validity by returning expiry to client. Real impl would set valid_until at the ticket_type level.
    const validUntil = new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString();
    return Response.json({
      ok: true,
      order_id: o.order_id,
      pass_token: o.passes[0].qr_token,
      cam_id: body.cam_id,
      valid_until: validUntil,
    }, { headers: CORS_HEADERS });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500, headers: CORS_HEADERS });
  }
};
