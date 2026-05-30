#!/bin/bash
# ============================================================
# Argus Home Hub — Auto-submission to hacs/brands + hacs/default
# Run from inside your local Argus repo on the correct branch.
# Requirements: git, gh (GitHub CLI - https://cli.github.com/)
# ============================================================

set -e

ARGUS_DOMAIN="argus"
ARGUS_DIR="$(cd "$(dirname "$0")" && pwd)"
WORK_DIR=$(mktemp -d)
trap "rm -rf '$WORK_DIR'" EXIT

echo "🔐 Checking GitHub CLI authentication..."
gh auth status || { echo "❌ Run: gh auth login"; exit 1; }
GH_USER=$(gh api user --jq '.login')
echo "✅ Logged in as: $GH_USER"
echo ""

# ============================================================
# PART 1: hacs/brands
# ============================================================
echo "══════════════════════════════════════════"
echo "  PART 1: hacs/brands"
echo "══════════════════════════════════════════"

cd "$WORK_DIR"
echo "📥 Forking + cloning hacs/brands..."
gh repo fork hacs/brands --clone --fork-name brands
cd brands

# Sync with upstream
git remote add upstream https://github.com/hacs/brands.git 2>/dev/null || true
git fetch upstream --quiet
UB=$(git ls-remote --symref upstream HEAD | head -1 | sed 's/.*refs\/heads\///')
echo "  upstream branch: $UB"
git checkout -B add-argus-brand "upstream/$UB"

# Copy images
TARGET="custom_integrations/$ARGUS_DOMAIN"
mkdir -p "$TARGET"
cp "$ARGUS_DIR/custom_components/argus/brand/icon.png"      "$TARGET/icon.png"
cp "$ARGUS_DIR/custom_components/argus/brand/logo.png"      "$TARGET/logo.png"
cp "$ARGUS_DIR/custom_components/argus/brand/dark_icon.png" "$TARGET/dark_icon.png" 2>/dev/null || true
cp "$ARGUS_DIR/custom_components/argus/brand/dark_logo.png" "$TARGET/dark_logo.png" 2>/dev/null || true
echo "✅ Brand images copied (RGBA 256x256)"

git add "$TARGET/"
git commit -m "Add Argus Home Hub brand assets

- Domain: argus
- Repository: https://github.com/Chrisalvir1/Argus
- Icon and logo: 256x256px PNG with transparent background (RGBA)
- Dark variants included"

git push origin add-argus-brand --force
echo "📤 Pushed to fork"

echo "🔀 Creating PR to hacs/brands..."
BRANDS_PR=$(gh pr create \
  --repo hacs/brands \
  --base "$UB" \
  --head "$GH_USER:add-argus-brand" \
  --title "Add Argus Home Hub brand" \
  --body "## Description

Adds brand assets for **Argus Home Hub** — a premium security integration for Home Assistant.

- **Repository:** https://github.com/Chrisalvir1/Argus
- **Integration domain:** \`argus\`
- **Icon/Logo:** 256×256px PNG with transparent background (RGBA)
- **Dark variants:** Included

## Checklist
- [x] Images are 256×256px
- [x] Images are PNG format
- [x] Images have transparent background (RGBA)
- [x] Domain \`argus\` matches integration manifest
- [x] Folder path: \`custom_integrations/argus/\`") || BRANDS_PR="PR may already exist — check https://github.com/hacs/brands/pulls"

echo "✅ hacs/brands PR: $BRANDS_PR"

# ============================================================
# PART 2: hacs/default
# ============================================================
echo ""
echo "══════════════════════════════════════════"
echo "  PART 2: hacs/default"
echo "══════════════════════════════════════════"

cd "$WORK_DIR"
echo "📥 Forking + cloning hacs/default..."
gh repo fork hacs/default --clone --fork-name default
cd default

git remote add upstream https://github.com/hacs/default.git 2>/dev/null || true
git fetch upstream --quiet
UB2=$(git ls-remote --symref upstream HEAD | head -1 | sed 's/.*refs\/heads\///')
echo "  upstream branch: $UB2"
git checkout -B add-argus-integration "upstream/$UB2"

cat > "integration/$ARGUS_DOMAIN.json" << 'JSON'
{
  "description": "Premium Smart Alarm & Security Panel for Home Assistant",
  "full_name": "Chrisalvir1/Argus",
  "render_readme": true
}
JSON

git add "integration/$ARGUS_DOMAIN.json"
git commit -m "Add Argus Home Hub integration

- Name: Argus Home Hub
- Repository: Chrisalvir1/Argus
- Domain: argus
- IoT class: local_push
- Config flow: Yes
- Zero external dependencies"

git push origin add-argus-integration --force
echo "📤 Pushed to fork"

echo "🔀 Creating PR to hacs/default..."
DEFAULT_PR=$(gh pr create \
  --repo hacs/default \
  --base "$UB2" \
  --head "$GH_USER:add-argus-integration" \
  --title "Add Argus Home Hub integration" \
  --body "## Integration details

- **Name:** Argus Home Hub
- **Repository:** https://github.com/Chrisalvir1/Argus
- **Domain:** \`argus\`
- **Category:** integration

## Checklist

- [x] The repository is public
- [x] All files are in \`custom_components/argus/\`
- [x] \`manifest.json\` is present and valid
- [x] \`hacs.json\` is present and valid
- [x] Translations exist (\`strings.json\`, \`translations/en.json\`)
- [x] Service descriptions are in English (\`services.yaml\`)
- [x] HACS Action CI passes
- [x] hassfest CI passes
- [x] Brand assets submitted to hacs/brands

## What is Argus Home Hub?

Argus Home Hub is a complete premium security alarm system for Home Assistant:

- 🎨 **Liquid Glass UI** (macOS/iOS inspired glassmorphism)
- 🌤️ **Animated weather backgrounds** (pure CSS — rain, snow, stars, clouds)
- 🔐 **Guest PIN codes** with expiration dates
- 🚨 **Panic/SOS mode** with slide-to-confirm gesture
- 📋 **Full audit log** — 200 entries, user attribution, sensor detail
- 🔋 **Battery monitoring HUD** for all intrusion sensors
- 🌍 **7 languages** with instant in-app switching (no reload)
- 📱 **Fullscreen + multi-instance** for wall tablets
- 🏠 **HomeKit bridge status** display
- ⚡ **MQTT sync** for external integrations
- 🔧 **Zero YAML** — pure config flow setup

**IoT class:** \`local_push\` | **Config flow:** Yes | **Zero external dependencies**") || DEFAULT_PR="PR may already exist — check https://github.com/hacs/default/pulls"

echo "✅ hacs/default PR: $DEFAULT_PR"

# ============================================================
echo ""
echo "══════════════════════════════════════════"
echo "  🎉 ALL DONE!"
echo "══════════════════════════════════════════"
echo ""
echo "hacs/brands PR:  $BRANDS_PR"
echo "hacs/default PR: $DEFAULT_PR"
echo ""
echo "Next steps:"
echo "  1. Wait for CI to pass on both PRs"
echo "  2. hacs/brands typically merges before hacs/default is reviewed"
echo "  3. Respond to any reviewer feedback"
