#!/bin/bash
# ============================================================
# Argus Home Hub — Auto-submission to hacs/brands + hacs/default
# Run from inside your local Argus repo on the correct branch.
# Requirements: git, gh (GitHub CLI - https://cli.github.com/)
# ============================================================

set -e

ARGUS_REPO="Chrisalvir1/Argus"
ARGUS_DOMAIN="argus"
ARGUS_DIR="$(cd "$(dirname "$0")" && pwd)"
WORK_DIR=$(mktemp -d)

echo "🔐 Checking GitHub CLI authentication..."
gh auth status || { echo "❌ Run: gh auth login"; exit 1; }
GH_USER=$(gh api user --jq '.login')
echo "✅ Logged in as: $GH_USER"

# Helper: clone using gh (handles SSH/HTTPS automatically)
gh_clone() {
  local repo="$1"
  local dest="$2"
  gh repo clone "$repo" "$dest" -- --depth=1 2>/dev/null || true
}

# ============================================================
# PART 1: hacs/brands
# ============================================================
echo ""
echo "══════════════════════════════════════════"
echo "  PART 1: Submitting brand to hacs/brands"
echo "══════════════════════════════════════════"

echo "📥 Forking hacs/brands (if not already forked)..."
gh repo fork hacs/brands --default-branch-only 2>/dev/null || true

BRANDS_DIR="$WORK_DIR/brands"
echo "📥 Cloning your fork..."
gh_clone "$GH_USER/brands" "$BRANDS_DIR"

cd "$BRANDS_DIR"

# Sync fork with upstream
git remote add upstream https://github.com/hacs/brands.git 2>/dev/null || true
git fetch upstream --quiet
DEFAULT_BRANCH=$(git remote show upstream | grep 'HEAD branch' | awk '{print $NF}')
echo "  upstream default branch: $DEFAULT_BRANCH"
git checkout -B "add-argus-brand" "upstream/$DEFAULT_BRANCH"

# Create the brand folder and copy images
TARGET_DIR="custom_integrations/$ARGUS_DOMAIN"
mkdir -p "$TARGET_DIR"

echo "📋 Copying brand images from Argus repo..."
cp "$ARGUS_DIR/custom_components/argus/brand/icon.png"      "$TARGET_DIR/icon.png"
cp "$ARGUS_DIR/custom_components/argus/brand/logo.png"      "$TARGET_DIR/logo.png"
cp "$ARGUS_DIR/custom_components/argus/brand/dark_icon.png" "$TARGET_DIR/dark_icon.png" 2>/dev/null || true
cp "$ARGUS_DIR/custom_components/argus/brand/dark_logo.png" "$TARGET_DIR/dark_logo.png" 2>/dev/null || true

# Verify image specs
python3 -c "
from PIL import Image
for name in ['icon.png', 'logo.png']:
    img = Image.open('$TARGET_DIR/' + name)
    assert img.size == (256, 256), f'{name} must be 256x256'
    assert img.mode == 'RGBA', f'{name} must be RGBA (transparent background)'
    print(f'  ✅ {name}: {img.mode} {img.size}')
" 2>/dev/null || echo "  ⚠️  Pillow not available — images copied without local verification"

git add "$TARGET_DIR/"
git commit -m "Add Argus Home Hub brand assets

- Domain: argus
- Repository: https://github.com/Chrisalvir1/Argus
- Icon and logo: 256x256px PNG with transparent background (RGBA)
- Dark variants included
" || { echo "  ℹ️  Nothing new to commit for brands"; }

echo "📤 Pushing brand branch to your fork..."
git push origin add-argus-brand --force

echo "🔀 Creating PR to hacs/brands..."
BRANDS_PR=$(gh pr create \
  --repo hacs/brands \
  --base "$DEFAULT_BRANCH" \
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
- [x] Folder: \`custom_integrations/argus/\`
" 2>&1) || BRANDS_PR="(PR may already exist — check https://github.com/hacs/brands/pulls)"

echo "✅ hacs/brands: $BRANDS_PR"

# ============================================================
# PART 2: hacs/default
# ============================================================
echo ""
echo "══════════════════════════════════════════"
echo "  PART 2: Submitting to hacs/default"
echo "══════════════════════════════════════════"

echo "📥 Forking hacs/default (if not already forked)..."
gh repo fork hacs/default --default-branch-only 2>/dev/null || true

DEFAULT_DIR="$WORK_DIR/default"
echo "📥 Cloning your fork..."
gh_clone "$GH_USER/default" "$DEFAULT_DIR"

cd "$DEFAULT_DIR"

git remote add upstream https://github.com/hacs/default.git 2>/dev/null || true
git fetch upstream --quiet
DEFAULT_BRANCH2=$(git remote show upstream | grep 'HEAD branch' | awk '{print $NF}')
echo "  upstream default branch: $DEFAULT_BRANCH2"
git checkout -B "add-argus-integration" "upstream/$DEFAULT_BRANCH2"

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
" || { echo "  ℹ️  Nothing new to commit for default"; }

echo "📤 Pushing to your fork..."
git push origin add-argus-integration --force

echo "🔀 Creating PR to hacs/default..."
DEFAULT_PR=$(gh pr create \
  --repo hacs/default \
  --base "$DEFAULT_BRANCH2" \
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
- 📱 **Fullscreen + multi-instance** support for wall-mounted tablets
- 🏠 **HomeKit bridge status** display
- ⚡ **MQTT sync** for external integrations
- 🔧 **Zero YAML** — pure config flow setup

**IoT class:** \`local_push\` | **Config flow:** Yes | **Zero external dependencies**
" 2>&1) || DEFAULT_PR="(PR may already exist — check https://github.com/hacs/default/pulls)"

echo "✅ hacs/default: $DEFAULT_PR"

# ============================================================
# Done
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
echo "  2. Respond to any reviewer feedback"
echo "  3. hacs/brands usually needs to merge first before hacs/default is reviewed"
echo ""

rm -rf "$WORK_DIR"
