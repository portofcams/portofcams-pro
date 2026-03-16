#!/bin/bash
set -e
cd "$(dirname "$0")"
npm run build
git push origin main
npx wrangler pages deploy dist --project-name portofcams-pro --branch pro --commit-dirty=true
echo "✓ Deployed to pro.portofcams.com"
