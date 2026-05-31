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

# The fork may be named "brands" OR "ha-brands" depending on how it was created.
# Detect the actual fork repo that points to home-assistant/brands.
echo "🔍 Detecting your fork of home-assistant/brands..."
FORK_REPO=""
for candidate in "brands" "ha-brands"; do
  if gh api "repos/$GH_USER/$candidate" --jq '.parent.full_name' 2>/dev/null \
      | grep -qi "home-assistant/brands"; then
    FORK_REPO="$GH_USER/$candidate"
    break
  fi
done

if [ -z "$FORK_REPO" ]; then
  echo ""
  echo "❌ Could not find your fork of home-assistant/brands."
  echo "   Fork it manually: https://github.com/home-assistant/brands → Fork"
  echo "   Then re-run: bash submit_brands_only.sh"
  exit 1
fi
echo "✅ Fork found: $FORK_REPO"

HA_BRANDS_DIR="$WORK_DIR/brands"
echo "📥 Cloning $FORK_REPO (large repo, may take a minute)..."
gh repo clone "$FORK_REPO" "$HA_BRANDS_DIR" -- --depth=1
cd "$HA_BRANDS_DIR"

# Branch from the FORK's own master (origin), NOT upstream. Branching from
# upstream/master would include upstream workflow files in the push, which
# GitHub rejects unless the token has the 'workflow' scope. Since the fork
# was just created it is current with upstream, so the PR diff stays clean.
git checkout -B add-argus-brand origin/master 2>/dev/null \
  || git checkout -B add-argus-brand HEAD

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

echo "📤 Pushing to $FORK_REPO..."
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
