#!/bin/bash
# ============================================================
# Argus — Submit ONLY the brand icons to home-assistant/brands
# Use this AFTER you have manually forked home-assistant/brands.
#
# STEP 0 (do this in your browser FIRST):
#   1. Open https://github.com/home-assistant/brands
#   2. Click "Fork" → "Create fork"
#   3. WAIT until the page finishes and shows Chrisalvir1/brands
#      (this can take 1-2 minutes for such a large repo)
#   4. THEN run this script.
# ============================================================

set -e
export GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=accept-new"

ARGUS_DOMAIN="argus"
ARGUS_DIR="$(cd "$(dirname "$0")" && pwd)"
WORK_DIR=$(mktemp -d)
trap "rm -rf '$WORK_DIR'" EXIT

GH_USER=$(gh api user --jq '.login')
echo "✅ Logged in as: $GH_USER"

# Verify the fork actually exists before doing anything
echo "🔍 Checking that $GH_USER/brands fork exists..."
if ! gh api "repos/$GH_USER/brands" --silent 2>/dev/null; then
  echo ""
  echo "❌ Fork $GH_USER/brands does NOT exist yet."
  echo ""
  echo "   Please fork it manually first:"
  echo "   1. Open https://github.com/home-assistant/brands"
  echo "   2. Click 'Fork' → 'Create fork'"
  echo "   3. Wait until it finishes (1-2 min)"
  echo "   4. Re-run this script: bash submit_brands_only.sh"
  exit 1
fi
echo "✅ Fork exists!"

HA_BRANDS_DIR="$WORK_DIR/brands"
echo "📥 Cloning $GH_USER/brands (large repo, may take a minute)..."
gh repo clone "$GH_USER/brands" "$HA_BRANDS_DIR" -- --depth=1
cd "$HA_BRANDS_DIR"

git remote add upstream https://github.com/home-assistant/brands.git 2>/dev/null || true
GIT_TERMINAL_PROMPT=0 git fetch upstream master --quiet 2>/dev/null || git fetch origin --quiet
git checkout -B add-argus-brand upstream/master 2>/dev/null \
  || git checkout -B add-argus-brand origin/master

TARGET="custom_integrations/$ARGUS_DOMAIN"
mkdir -p "$TARGET"
cp "$ARGUS_DIR/custom_components/argus/brand/icon.png"      "$TARGET/icon.png"
cp "$ARGUS_DIR/custom_components/argus/brand/logo.png"      "$TARGET/logo.png"
cp "$ARGUS_DIR/custom_components/argus/brand/dark_icon.png" "$TARGET/dark_icon.png" 2>/dev/null || true
cp "$ARGUS_DIR/custom_components/argus/brand/dark_logo.png" "$TARGET/dark_logo.png" 2>/dev/null || true
echo "✅ Brand images copied"

git add "$TARGET/"
git commit -m "Add Argus Home Hub brand assets

- Domain: argus
- Repository: https://github.com/Chrisalvir1/Argus
- Icon and logo: 256x256px PNG with transparent background (RGBA)
- Dark variants included" || echo "  (nothing to commit)"

echo "📤 Pushing to $GH_USER/brands..."
git push origin add-argus-brand --force

echo "🔀 Creating PR to home-assistant/brands..."
gh pr create \
  --repo home-assistant/brands \
  --base master \
  --head "$GH_USER:add-argus-brand" \
  --title "Add Argus Home Hub brand" \
  --body "## Description

Adds brand assets for the **Argus Home Hub** custom integration.

- **Repository:** https://github.com/Chrisalvir1/Argus
- **Integration domain:** \`argus\`
- **Icon/Logo:** 256×256px PNG with transparent background (RGBA)
- **Dark variants:** Included

## Checklist
- [x] Images are 256×256px PNG with transparent background (RGBA mode)
- [x] Domain \`argus\` matches integration manifest
- [x] Folder: \`custom_integrations/argus/\`" \
  2>&1 || echo "  (PR may already exist — check https://github.com/home-assistant/brands/pulls)"

echo ""
echo "🎉 Brand PR submitted! Check: https://github.com/home-assistant/brands/pulls"
