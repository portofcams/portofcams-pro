#!/bin/bash
# Refresh the hero still from the LIVE East Lewers St, Waikīkī cam.
# Grabs a current frame, crops the burned-in timestamp, sizes it to the hero's
# 1280x720, and writes public/clips/lewers-waikiki.jpg — the Managed-email hero
# AND the site still. Because the email hot-links that URL, deploying a new frame
# updates the hero in already-sent emails too.
#
# The cam host sits behind Cloudflare, so we send a browser User-Agent (plain
# curl/ffmpeg get a 404). A brightness guard refuses night / very-dark frames so
# you can't accidentally ship a black hero — run it in Hawaiʻi daylight.
#
# Usage:
#   ./grab-hero.sh            # grab + crop + save   (refuses dark frames)
#   ./grab-hero.sh --force    # save even if it's dark
#   ./grab-hero.sh --deploy   # also run ./deploy.sh after saving
set -e
cd "$(dirname "$0")"

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Safari/537.36"
SRC="https://cams.portofcams.com/east-lewers-st/index.m3u8"
OUT="public/clips/lewers-waikiki.jpg"
TMP="$(mktemp -t herograb).jpg"
ARGS=" $* "

echo "Grabbing a frame from the live cam…"
ffmpeg -y -loglevel error -user_agent "$UA" -i "$SRC" -frames:v 1 -q:v 2 "$TMP"

# Daylight guard: sky brightness (top-left region — excludes the always-lit tower,
# so city lights can't fool it). Night sky reads ~15/255; any daylight, even heavy
# overcast, reads >180. Threshold 90 separates them cleanly.
SKY=$(ffmpeg -v error -i "$TMP" -vf "crop=iw*0.45:ih*0.25:0:0,format=gray,scale=1:1" -f rawvideo - 2>/dev/null | od -An -tu1 | tr -d ' ' | head -1)
echo "Sky brightness: ${SKY:-?}/255"
if [ -n "$SKY" ] && [ "$SKY" -lt 90 ] && [ "${ARGS/ --force /}" = "$ARGS" ]; then
  echo "Sky is dark (${SKY}/255) — it's nighttime in Hawaiʻi (or a heavy storm); NOT swapping the hero."
  echo "Try again in daylight, or pass --force."
  rm -f "$TMP"; exit 1
fi

# Crop 4:3 -> 16:9, dropping the top timestamp band, then size to 1280x720.
ffmpeg -y -loglevel error -i "$TMP" -vf "crop=iw:iw*9/16:0:100,scale=1280:720" -q:v 2 "$OUT"
rm -f "$TMP"
echo "Wrote $OUT ($(stat -f%z "$OUT") bytes, 1280x720)."

if [ "${ARGS/ --deploy /}" != "$ARGS" ]; then
  echo "Deploying…"; ./deploy.sh
else
  echo "Preview it, then \`./deploy.sh\` (or re-run with --deploy) to push it live."
fi
