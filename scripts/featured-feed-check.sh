#!/bin/bash
# Featured Feed Health Check for portofcams-pro
# Checks the 5 YouTube featured feeds, swaps dead ones from backup pool
# Rebuilds and deploys to Cloudflare Pages
REPO_DIR="$HOME/portofcams-pro"
INDEX="$REPO_DIR/src/pages/index.astro"
LOG="/tmp/pro-feed-check.log"

cd "$REPO_DIR"
git checkout -- . 2>/dev/null
git pull --ff-only origin main 2>/dev/null

echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) — Pro featured feed check starting" > "$LOG"

# Backup pool — verified reliable 24/7 YouTube live streams
# Format: "VIDEO_ID|Name|Location|Region"
BACKUPS=(
  "BSWhGNXxT9A|SF Skyline Mersea|San Francisco, CA|California"
  "4cgSE12k9Sc|UW Continuum Cam|Seattle, WA|Pacific NW"
  "EO_1LWqsCNE|Venice Beach South|Los Angeles, CA|California"
  "f7NDLBzILto|Old Faithful Yellowstone|Yellowstone, WY|US Mainland"
  "sIs75TTduUM|UW Cherry Blossoms|Seattle, WA|Pacific NW"
  "fVa6-zCBR7A|Monterey Bay Open Sea|Monterey, CA|California"
  "NUnJc82ptd4|Monterey Jelly Cam|Monterey, CA|California"
  "EzduMz22mzU|Crystal Mountain|Crystal Mountain, WA|Pacific NW"
  "tk0tfYDxrUA|Kilauea Volcano|Big Island, HI|Hawaii"
  "gXKuUyKt8mc|Kilauea South|Big Island, HI|Hawaii"
  "3ATYHKN2hIg|Lawai Beach Kauai|Kauai, HI|Hawaii"
  "X0idnu7HUmI|Waikiki Beach|Waikiki, HI|Hawaii"
  "IvZ22jZgvOI|Yellowstone Gardiner|Gardiner, MT|US Mainland"
  "qAcY8OPEMhA|Santa Monica Beach|Santa Monica, CA|California"
  "JjI5KtjJGfo|Seaside Oregon|Seaside, OR|Pacific NW"
  "vcbzFu6KDeU|Mammoth Mountain|Mammoth Lakes, CA|California"
  "kIZp6fUSpS0|Elk Refuge Jackson|Jackson, WY|US Mainland"
  "Ol5CdQurrFU|River Watch Bear Cam|Katmai, AK|Alaska"
)

# Check if a YouTube video is live
check_live() {
  local vid="$1"
  local oembed=$(curl -s -o /dev/null -w "%{http_code}" \
    "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=$vid" \
    --max-time 10 2>/dev/null || echo "000")
  if [ "$oembed" = "404" ]; then
    echo "dead"
    return
  fi
  local page=$(curl -s "https://www.youtube.com/watch?v=$vid" --max-time 10 2>/dev/null)
  local is_live=$(echo "$page" | grep -c '"isLive":true' 2>/dev/null || true)
  is_live=$(echo "${is_live:-0}" | head -1 | tr -d '[:space:]')
  if [ "$is_live" -gt 0 ] 2>/dev/null; then
    echo "live"
  else
    echo "dead"
  fi
}

# Extract current YouTube video IDs from index.astro (only from featuredFeeds block)
CURRENT_VIDS=$(grep -o "youtube\.com/embed/[A-Za-z0-9_-]*" "$INDEX" | cut -d/ -f3 | sort -u)
CHANGED=0

for vid in $CURRENT_VIDS; do
  result=$(check_live "$vid")
  if [ "$result" = "dead" ]; then
    echo "  DEAD: $vid — looking for replacement" >> "$LOG"

    # Find a live backup that isn't already in the featured list
    REPLACED=0
    for backup in "${BACKUPS[@]}"; do
      bvid=$(echo "$backup" | cut -d'|' -f1)
      bname=$(echo "$backup" | cut -d'|' -f2)
      blocation=$(echo "$backup" | cut -d'|' -f3)
      bregion=$(echo "$backup" | cut -d'|' -f4)

      # Skip if already featured
      if grep -q "$bvid" "$INDEX"; then
        continue
      fi

      # Check if backup is live
      backup_result=$(check_live "$bvid")
      if [ "$backup_result" = "live" ]; then
        echo "    SWAP: $vid → $bvid ($bname)" >> "$LOG"

        # Replace video ID in index.astro
        sed -i "s|youtube.com/embed/$vid|youtube.com/embed/$bvid|g" "$INDEX"
        # Update name, location, region on the line containing the new video ID
        python3 << PYEOF
import re
with open('$INDEX', 'r') as f:
    lines = f.readlines()
for i, line in enumerate(lines):
    if '$bvid' in line:
        line = re.sub(r"name: '[^']*'", "name: '$bname'", line)
        line = re.sub(r"location: '[^']*'", "location: '$blocation'", line)
        line = re.sub(r"region: '[^']*'", "region: '$bregion'", line)
        lines[i] = line
with open('$INDEX', 'w') as f:
    f.writelines(lines)
PYEOF

        CHANGED=$((CHANGED + 1))
        REPLACED=1
        break
      fi
      sleep 1
    done

    if [ "$REPLACED" -eq 0 ]; then
      echo "    NO REPLACEMENT FOUND for $vid" >> "$LOG"
    fi
  else
    echo "  OK: $vid" >> "$LOG"
  fi
  sleep 1
done

echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) — Check complete. $CHANGED swaps." >> "$LOG"

if [ "$CHANGED" -gt 0 ]; then
  cd "$REPO_DIR"
  git add src/pages/index.astro
  git commit -m "Auto: swap $CHANGED dead featured feed(s)

$(grep -E 'SWAP:|DEAD:' "$LOG")
"
  git push origin main

  # Build and deploy
  npm run build 2>/dev/null
  npx wrangler pages deploy dist --project-name portofcams-pro --branch pro --commit-dirty=true 2>/dev/null

  echo "Deployed with $CHANGED swaps" >> "$LOG"
else
  echo "All feeds healthy, no deploy needed" >> "$LOG"
fi

cat "$LOG"
