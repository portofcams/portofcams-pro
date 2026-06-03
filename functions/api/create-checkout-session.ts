/**
 * Cloudflare Pages Function — creates a Stripe Checkout Session for the
 * Port of Cams Premium subscription and returns the hosted checkout URL.
 *
 * Requires these environment variables on the Cloudflare Pages project
 * (Settings -> Environment variables) for the function to actually charge:
 *   STRIPE_SECRET_KEY        — sk_live_... (server-side only, never exposed)
 *   STRIPE_MONTHLY_PRICE_ID  — price_... for the $9.99/mo plan
 *   STRIPE_YEARLY_PRICE_ID   — price_... for the $89.99/yr plan
 *
 * If those are not set, the function returns a graceful 503 so the UI can
 * show "temporarily unavailable" instead of erroring — nothing charges until
 * the keys + Stripe Products/Prices exist.
 *
 * No SDK: we POST form-encoded directly to the Stripe API, which works on the
 * Cloudflare Workers runtime where the stripe-node SDK is awkward.
 */

interface Env {
  STRIPE_SECRET_KEY?: string;
  STRIPE_MONTHLY_PRICE_ID?: string;
  STRIPE_YEARLY_PRICE_ID?: string;
  STRIPE_BUSINESS_PRICE_ID?: string; // co-branded business tier ($50/mo)
}

const ORIGIN = "https://pro.portofcams.com";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (data: unknown, status = 200) =>
  Response.json(data, { status, headers: CORS_HEADERS });

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204, headers: CORS_HEADERS });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: { plan?: unknown };
  try {
    body = (await request.json()) as { plan?: unknown };
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const plan =
    body?.plan === "yearly" ? "yearly" : body?.plan === "business" ? "business" : "monthly";

  const secret = env.STRIPE_SECRET_KEY;
  const priceId =
    plan === "yearly"
      ? env.STRIPE_YEARLY_PRICE_ID
      : plan === "business"
        ? env.STRIPE_BUSINESS_PRICE_ID
        : env.STRIPE_MONTHLY_PRICE_ID;

  // Not configured yet — degrade gracefully (no crash, no charge).
  if (!secret || !priceId) {
    return json(
      { error: "Checkout is being set up and is temporarily unavailable. Please check back soon." },
      503,
    );
  }

  const form = new URLSearchParams();
  form.append("mode", "subscription");
  form.append("line_items[0][price]", priceId);
  form.append("line_items[0][quantity]", "1");
  form.append("allow_promotion_codes", "true");
  form.append("billing_address_collection", "auto");
  const successPath = plan === "business" ? "/business?checkout=success" : "/premium?checkout=success";
  const cancelPath = plan === "business" ? "/business?checkout=cancelled" : "/checkout?checkout=cancelled";
  form.append("success_url", `${ORIGIN}${successPath}&session_id={CHECKOUT_SESSION_ID}`);
  form.append("cancel_url", `${ORIGIN}${cancelPath}`);
  if (plan === "business") {
    form.append("subscription_data[metadata][tier]", "cobranded_business");
  }

  let stripeRes: Response;
  try {
    stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form.toString(),
    });
  } catch {
    return json({ error: "Could not reach the payment processor. Please try again." }, 502);
  }

  const session = (await stripeRes.json().catch(() => ({}))) as {
    url?: string;
    error?: { message?: string };
  };

  if (!stripeRes.ok || !session.url) {
    // Surface a safe message; log the real Stripe error server-side only.
    console.error("[create-checkout-session] Stripe error:", session?.error?.message || stripeRes.status);
    return json({ error: "We couldn't start checkout. Please try again." }, 502);
  }

  return json({ url: session.url });
};
