// Bulletproof dark + gold HTML chrome for the Managed Marketing Cam ("CamSpot") outreach.
// Raw, inline-styled tables — no remote CSS, no web fonts. Renders in Gmail, Apple Mail,
// Outlook web/desktop, iPhone Mail. Mirrors the pattern in
// zonahaps/src/lib/emails/outreach/_layout.ts, restyled to the Port of Cams brand
// (colors pulled from src/layouts/Layout.astro).

const SITE = 'https://pro.portofcams.com';

// Solid, email-safe approximations of the site's CSS vars (Outlook can't do rgba/vars).
export const BRAND = {
  black: '#080808',
  deep: '#0d0d0d',
  surface: '#141414',
  gold: '#c9a84c',
  goldLight: '#e8c97a',
  white: '#f5f0e8',
  body: '#cfc9bd',   // readable cream for paragraph text on dark
  muted: '#8f897d',  // captions / footer
  border: '#2a2820', // hairlines
  onGold: '#0d0b06', // dark text on the gold button
};

// A real hosted still of the live Lewers St, Waikīkī cam (public/clips/lewers-waikiki.jpg).
export const DEFAULT_HERO = `${SITE}/clips/lewers-waikiki.jpg`;

// Contact + compliance. CAN-SPAM requires a real physical postal address on cold email —
// set a genuine one before sending, and keep the reply-to-opt-out line honored.
export const CONTACT = {
  name: 'John',
  org: 'Port of Cams',
  email: 'portofcams@gmail.com',
  phone: '(907) 769-1165',
  // TODO: replace with a real postal address before any cold send (CAN-SPAM).
  mailingAddress: 'Port of Cams · Honolulu, HI 96815',
};

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * @param {object} o
 * @param {string}  o.previewText              hidden inbox preview line
 * @param {string} [o.heroImage=DEFAULT_HERO]  full-width hero image URL
 * @param {string} [o.heroCaption]             thin caption under the hero
 * @param {string}  o.eyebrow                  gold uppercase kicker
 * @param {string}  o.headlineHtml             serif headline (may contain inline HTML)
 * @param {string}  o.ledeHtml                 intro paragraph (inline HTML ok)
 * @param {{h:string,b:string}[]} o.points     three selling points
 * @param {string}  o.termsLine                pricing anchor line
 * @param {string}  o.ctaLabel
 * @param {string}  o.ctaUrl
 * @param {string} [o.secondaryUrl]            "everything included" link
 * @param {string} [o.signoff]                 small note above the signature
 * @param {string} [o.recipientEmail]          shown in the footer reason line
 */
export function buildManagedEmailHtml(o) {
  const B = BRAND;
  const hero = o.heroImage || DEFAULT_HERO;
  const heroCaption = o.heroCaption || 'Live right now — East Lewers St, Waikīkī. Your view streams exactly like this, co-branded on your own site.';

  const pointsHtml = (o.points || []).map((p, i) => `
                <tr>
                  <td valign="top" width="38" style="padding:14px 0 0 0;font-family:Georgia,'Times New Roman',serif;font-size:15px;color:${B.gold};letter-spacing:1px;">${String(i + 1).padStart(2, '0')}</td>
                  <td valign="top" style="padding:14px 0 0 0;">
                    <p style="margin:0 0 4px 0;font-family:Georgia,'Times New Roman',serif;font-size:18px;font-weight:bold;color:${B.white};line-height:1.3;">${p.h}</p>
                    <p style="margin:0;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:14px;color:${B.body};line-height:1.6;">${p.b}</p>
                  </td>
                </tr>`).join('');

  const secondary = o.secondaryUrl
    ? `<p style="margin:14px 0 0 0;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:13px;color:${B.muted};">
                or <a href="${o.secondaryUrl}" style="color:${B.goldLight};text-decoration:underline;">see everything that's included &rarr;</a>
              </p>`
    : '';

  const signoffHtml = o.signoff
    ? `<p style="margin:22px 0 0 0;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:13px;color:${B.muted};line-height:1.6;">${o.signoff}</p>`
    : '';

  const reasonLine = o.recipientEmail
    ? `<p style="margin:0 0 6px 0;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:11px;color:${B.muted};line-height:1.5;">
                Sent to ${esc(o.recipientEmail)} because your venue has a view worth watching. Not interested? Reply &ldquo;remove&rdquo; and I won&apos;t email again.
              </p>`
    : `<p style="margin:0 0 6px 0;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:11px;color:${B.muted};line-height:1.5;">Not interested? Reply &ldquo;remove&rdquo; and I won&apos;t email again.</p>`;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark light" />
  <meta name="supported-color-schemes" content="dark light" />
  <title>Port of Cams Pro</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.black};">
  <span style="display:none!important;visibility:hidden;opacity:0;height:0;width:0;font-size:1px;line-height:1px;color:${BRAND.black};overflow:hidden;">${esc(o.previewText)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${BRAND.black}" style="background-color:${BRAND.black};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:${BRAND.deep};border:1px solid ${BRAND.border};border-radius:14px;overflow:hidden;">

          <!-- Brand bar -->
          <tr>
            <td bgcolor="${BRAND.black}" style="background-color:${BRAND.black};padding:16px 28px;border-bottom:1px solid ${BRAND.border};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-family:Georgia,'Times New Roman',serif;font-size:17px;font-weight:bold;letter-spacing:2px;color:${BRAND.white};text-transform:uppercase;">
                    PORT<span style="color:${BRAND.gold};">&middot;</span>OF<span style="color:${BRAND.gold};">&middot;</span>CAMS
                  </td>
                  <td align="right" style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:2px;color:${BRAND.gold};text-transform:uppercase;">
                    Pro &middot; Managed
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td style="padding:0;line-height:0;font-size:0;">
              <a href="${o.ctaUrl}" style="text-decoration:none;"><img src="${hero}" alt="Live camera view of Waikīkī" width="600" style="display:block;width:100%;max-width:600px;height:auto;border:0;outline:none;" /></a>
            </td>
          </tr>
          <tr>
            <td bgcolor="${BRAND.surface}" style="background-color:${BRAND.surface};padding:9px 28px;border-bottom:1px solid ${BRAND.border};">
              <p style="margin:0;font-family:'Courier New',monospace;font-size:10px;letter-spacing:1px;color:${BRAND.muted};line-height:1.5;text-transform:uppercase;">${heroCaption}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px 30px 8px 30px;">
              <p style="margin:0 0 12px 0;font-family:'Courier New',monospace;font-size:11px;letter-spacing:2px;color:${BRAND.gold};text-transform:uppercase;">${esc(o.eyebrow)}</p>
              <h1 style="margin:0 0 16px 0;font-family:Georgia,'Times New Roman',serif;font-size:27px;font-weight:bold;color:${BRAND.white};line-height:1.15;">${o.headlineHtml}</h1>
              <p style="margin:0 0 8px 0;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:15px;color:${BRAND.body};line-height:1.65;">${o.ledeHtml}</p>

              <!-- Points -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 4px 0;">
                ${pointsHtml}
              </table>
            </td>
          </tr>

          <!-- Terms strip -->
          <tr>
            <td style="padding:18px 30px 4px 30px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BRAND.border};border-radius:10px;background-color:${BRAND.surface};">
                <tr>
                  <td align="center" style="padding:14px 18px;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:13px;color:${BRAND.body};line-height:1.5;">${o.termsLine}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:20px 30px 6px 30px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="${BRAND.gold}" style="background-color:${BRAND.gold};border-radius:8px;">
                    <a href="${o.ctaUrl}" style="display:inline-block;padding:14px 30px;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:15px;font-weight:bold;color:${BRAND.onGold};text-decoration:none;border-radius:8px;">${esc(o.ctaLabel)} &rarr;</a>
                  </td>
                </tr>
              </table>
              ${secondary}
              ${signoffHtml}
            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="padding:22px 30px 24px 30px;">
              <div style="border-top:1px solid ${BRAND.border};padding-top:18px;">
                <p style="margin:0;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:14px;font-weight:bold;color:${BRAND.white};">${esc(CONTACT.name)}</p>
                <p style="margin:2px 0 0 0;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:12px;color:${BRAND.muted};">${esc(CONTACT.org)} &nbsp;&middot;&nbsp; the person who installs the cameras</p>
                <p style="margin:6px 0 0 0;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:12px;color:${BRAND.muted};">
                  <a href="${SITE}/managed" style="color:${BRAND.goldLight};text-decoration:none;">pro.portofcams.com</a>
                  &nbsp;&middot;&nbsp;
                  <a href="mailto:${CONTACT.email}" style="color:${BRAND.goldLight};text-decoration:none;">${esc(CONTACT.email)}</a>
                  &nbsp;&middot;&nbsp; ${esc(CONTACT.phone)}
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td bgcolor="${BRAND.black}" style="background-color:${BRAND.black};padding:16px 30px;border-top:1px solid ${BRAND.border};text-align:center;">
              ${reasonLine}
              <p style="margin:0;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;font-size:11px;color:${BRAND.muted};line-height:1.5;">${esc(CONTACT.mailingAddress)}</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
