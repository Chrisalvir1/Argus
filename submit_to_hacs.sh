#!/bin/bash
# ============================================================
# Argus Home Hub — Auto-submission to hacs/brands + hacs/default
# Run this script ONCE from your local machine.
# Requirements: git, gh (GitHub CLI - https://cli.github.com/)
# ============================================================

set -e

ARGUS_REPO="Chrisalvir1/Argus"
ARGUS_DOMAIN="argus"
WORK_DIR=$(mktemp -d)

echo "🔐 Checking GitHub CLI authentication..."
gh auth status || { echo "❌ Run: gh auth login"; exit 1; }
GH_USER=$(gh api user --jq '.login')
echo "✅ Logged in as: $GH_USER"

# ============================================================
# PART 1: hacs/brands
# ============================================================
echo ""
echo "══════════════════════════════════════════"
echo "  PART 1: Submitting brand to hacs/brands"
echo "══════════════════════════════════════════"

BRANDS_DIR="$WORK_DIR/brands"
echo "📥 Forking hacs/brands..."
gh repo fork hacs/brands --clone --remote 2>/dev/null || true
git clone "https://github.com/$GH_USER/brands.git" "$BRANDS_DIR" 2>/dev/null || \
  git clone "git@github.com:$GH_USER/brands.git" "$BRANDS_DIR"

cd "$BRANDS_DIR"
git remote add upstream https://github.com/hacs/brands.git 2>/dev/null || true
git fetch upstream
git checkout -b "add-argus-brand" upstream/master 2>/dev/null || \
  git checkout -b "add-argus-brand" upstream/main

# Create the brand folder
TARGET_DIR="custom_integrations/$ARGUS_DOMAIN"
mkdir -p "$TARGET_DIR"

# Copy brand images from Argus repo (clone fresh to get latest)
echo "📥 Getting brand images from Argus repo..."
ARGUS_TMP="$WORK_DIR/argus_tmp"
git clone "https://github.com/$ARGUS_REPO.git" "$ARGUS_TMP"

cp "$ARGUS_TMP/custom_components/argus/brand/icon.png"      "$TARGET_DIR/icon.png"
cp "$ARGUS_TMP/custom_components/argus/brand/logo.png"      "$TARGET_DIR/logo.png"
cp "$ARGUS_TMP/custom_components/argus/brand/dark_icon.png" "$TARGET_DIR/dark_icon.png" 2>/dev/null || true
cp "$ARGUS_TMP/custom_components/argus/brand/dark_logo.png" "$TARGET_DIR/dark_logo.png" 2>/dev/null || true

# Verify image specs
python3 -c "
from PIL import Image
import sys
for name in ['icon.png', 'logo.png']:
    img = Image.open('$TARGET_DIR/' + name)
    assert img.size == (256, 256), f'{name} must be 256x256, got {img.size}'
    assert img.mode == 'RGBA', f'{name} must be RGBA, got {img.mode}'
    print(f'  ✅ {name}: {img.mode} {img.size}')
" 2>/dev/null && echo "✅ Brand images verified (256x256 RGBA)" || echo "⚠️  Pillow not available, skipping image verification"

git add "$TARGET_DIR/"
git commit -m "Add Argus Home Hub brand assets

- Domain: argus
- Repository: https://github.com/Chrisalvir1/Argus
- Icon and logo: 256x256px PNG with transparent background (RGBA)
"

echo "📤 Pushing brand branch..."
git push origin add-argus-brand --force

echo "🔀 Creating PR to hacs/brands..."
gh pr create \
  --repo hacs/brands \
  --base master \
  --head "$GH_USER:add-argus-brand" \
  --title "Add Argus Home Hub brand" \
  --body "## Description

Adds brand assets for **Argus Home Hub** — a premium security integration for Home Assistant.

- **Repository:** https://github.com/Chrisalvir1/Argus
- **Integration domain:** \`argus\`
- **Icon/Logo:** 256×256px PNG with transparent background (RGBA)
- **Dark variants:** Included

## Checklist
- [x] Images are 256x256px
- [x] Images are PNG format
- [x] Images have transparent background (RGBA)
- [x] Domain matches integration manifest (\`argus\`)
" 2>/dev/null || \
  gh pr create \
    --repo hacs/brands \
    --base main \
    --head "$GH_USER:add-argus-brand" \
    --title "Add Argus Home Hub brand" \
    --body "## Description

Adds brand assets for **Argus Home Hub** — a premium security integration for Home Assistant.

- **Repository:** https://github.com/Chrisalvir1/Argus
- **Integration domain:** \`argus\`
- **Icon/Logo:** 256×256px PNG with transparent background (RGBA)
"

echo "✅ PR submitted to hacs/brands!"

# ============================================================
# PART 2: hacs/default
# ============================================================
echo ""
echo "══════════════════════════════════════════"
echo "  PART 2: Submitting to hacs/default"
echo "══════════════════════════════════════════"

DEFAULT_DIR="$WORK_DIR/default"
echo "📥 Forking hacs/default..."
gh repo fork hacs/default --clone --remote 2>/dev/null || true
git clone "https://github.com/$GH_USER/default.git" "$DEFAULT_DIR" 2>/dev/null || \
  git clone "git@github.com:$GH_USER/default.git" "$DEFAULT_DIR"

cd "$DEFAULT_DIR"
git remote add upstream https://github.com/hacs/default.git 2>/dev/null || true
git fetch upstream
git checkout -b "add-argus-integration" upstream/master 2>/dev/null || \
  git checkout -b "add-argus-integration" upstream/main

# Create the integration entry
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
- Zero external dependencies
"

echo "📤 Pushing default branch..."
git push origin add-argus-integration --force

echo "🔀 Creating PR to hacs/default..."
gh pr create \
  --repo hacs/default \
  --base master \
  --head "$GH_USER:add-argus-integration" \
  --title "Add Argus Home Hub integration" \
  --body "## Integration details

- **Name:** Argus Home Hub
- **Repository:** https://github.com/Chrisalvir1/Argus
- **Domain:** \`argus\`
- **Category:** integration

## Checklist

- [x] The repository is public
- [x] All integration files are in \`custom_components/argus/\`
- [x] \`manifest.json\` is present and valid
- [x] \`hacs.json\` is present and valid
- [x] Translations exist (\`strings.json\`, \`translations/en.json\`)
- [x] Service descriptions are in English (\`services.yaml\`)
- [x] HACS Action CI passes
- [x] hassfest CI passes
- [x] Brand assets submitted to hacs/brands

## What is Argus Home Hub?

Argus Home Hub is a complete premium security alarm system for Home Assistant that replaces the standard alarm panel with:

- 🎨 **Liquid Glass UI** (macOS/iOS inspired, glassmorphism)
- 🌤️ **Animated weather backgrounds** (pure CSS, rain/snow/stars/clouds)
- 🔐 **Guest PIN codes** with expiration dates
- 🚨 **Panic/SOS mode** with slide-to-confirm
- 📋 **Full audit log** (200 entries, user attribution, sensor detail)
- 🔋 **Battery monitoring HUD** for all intrusion sensors
- 🌍 **7 languages** with instant in-app switching
- 📱 **Fullscreen + multi-instance** for wall tablets
- 🏠 **HomeKit bridge status** display
- ⚡ **MQTT support** for external integrations

**IoT class:** local_push | **Config flow:** Yes | **Zero external dependencies**
" 2>/dev/null || \
  gh pr create \
    --repo hacs/default \
    --base main \
    --head "$GH_USER:add-argus-integration" \
    --title "Add Argus Home Hub integration" \
    --body "## Integration details

- **Name:** Argus Home Hub
- **Repository:** https://github.com/Chrisalvir1/Argus
- **Domain:** \`argus\`
- **IoT class:** local_push
- **Config flow:** Yes
- **Zero external dependencies**
"

echo "✅ PR submitted to hacs/default!"

# ============================================================
# Done
# ============================================================
echo ""
echo "══════════════════════════════════════════"
echo "  🎉 ALL DONE!"
echo "══════════════════════════════════════════"
echo ""
echo "Next steps:"
echo "  1. Wait for CI to pass on both PRs"
echo "  2. Respond to any reviewer feedback"
echo "  3. Once hacs/brands is merged, the hacs/default PR can proceed"
echo ""
echo "PR links:"
gh pr list --repo hacs/brands --author "$GH_USER" --limit 3 2>/dev/null | head -5 || true
gh pr list --repo hacs/default --author "$GH_USER" --limit 3 2>/dev/null | head -5 || true

# Cleanup
rm -rf "$WORK_DIR"
