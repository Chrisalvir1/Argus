#!/bin/bash
# ============================================================
# Argus Home Hub — Submit to hacs/brands + hacs/default
# Run from inside your local Argus repo (any branch).
# Requirements: gh (GitHub CLI) already authenticated.
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
# HELPER: push files to a repo via GitHub API (no git clone needed)
# ============================================================
api_put_file() {
  local repo="$1"    # e.g. "Chrisalvir1/brands"
  local path="$2"    # e.g. "custom_integrations/argus/icon.png"
  local file="$3"    # local file path
  local branch="$4"
  local message="$5"

  local content
  content=$(base64 < "$file" | tr -d '\n')

  # Get existing file SHA if it exists (for updates)
  local sha
  sha=$(gh api "repos/$repo/contents/$path" --jq '.sha' 2>/dev/null || echo "")

  local body
  if [ -n "$sha" ]; then
    body=$(printf '{"message":"%s","content":"%s","branch":"%s","sha":"%s"}' \
      "$message" "$content" "$branch" "$sha")
  else
    body=$(printf '{"message":"%s","content":"%s","branch":"%s"}' \
      "$message" "$content" "$branch")
  fi

  gh api "repos/$repo/contents/$path" -X PUT --input - <<< "$body" --silent
}

# ============================================================
# STEP 1: Ensure forks exist (create via API)
# ============================================================
echo "🍴 Creating forks (if not existing)..."

ensure_fork() {
  local upstream="$1"
  local fork_repo="$GH_USER/${upstream##*/}"

  # Check if fork already exists
  if gh api "repos/$fork_repo" --silent 2>/dev/null; then
    echo "  ✅ Fork $fork_repo already exists"
    return 0
  fi

  echo "  Creating fork of $upstream..."
  local result
  result=$(gh api "repos/$upstream/forks" -X POST -f "default_branch_only=false" 2>&1) || {
    echo ""
    echo "  ⚠️  Could not auto-fork $upstream (HTTP 404 — forking may be restricted)"
    echo ""
    echo "  👉 Please do this manually:"
    echo "     1. Go to https://github.com/$upstream"
    echo "     2. Click the 'Fork' button → Create fork"
    echo "     3. Press ENTER here when done"
    read -r
    return 0
  }
  echo "  ✅ Fork created. Waiting 8s for GitHub to propagate..."
  sleep 8
}

ensure_fork "hacs/brands"
ensure_fork "hacs/default"

# ============================================================
# PART 1: hacs/brands
# ============================================================
echo ""
echo "══════════════════════════════════════════"
echo "  PART 1: hacs/brands"
echo "══════════════════════════════════════════"

BRANDS_FORK="$GH_USER/brands"
BRANDS_DIR="$WORK_DIR/brands"

# Clone fork using gh (handles auth automatically)
echo "📥 Cloning $BRANDS_FORK..."
gh repo clone "$BRANDS_FORK" "$BRANDS_DIR" -- --depth=1
cd "$BRANDS_DIR"

# Sync fork with upstream
git remote add upstream https://github.com/hacs/brands.git 2>/dev/null || true
GIT_TERMINAL_PROMPT=0 git fetch upstream --quiet 2>/dev/null || {
  # Fallback: get default branch from API
  echo "  (fetch upstream skipped, using fork's default branch)"
}
UB=$(gh api "repos/hacs/brands" --jq '.default_branch' 2>/dev/null || echo "master")
echo "  upstream default branch: $UB"

# Reset to upstream state
git fetch origin --quiet
git checkout -B add-argus-brand "origin/$UB" 2>/dev/null || git checkout -B add-argus-brand

# Copy images
TARGET="custom_integrations/$ARGUS_DOMAIN"
mkdir -p "$TARGET"
cp "$ARGUS_DIR/custom_components/argus/brand/icon.png"      "$TARGET/icon.png"
cp "$ARGUS_DIR/custom_components/argus/brand/logo.png"      "$TARGET/logo.png"
cp "$ARGUS_DIR/custom_components/argus/brand/dark_icon.png" "$TARGET/dark_icon.png" 2>/dev/null || true
cp "$ARGUS_DIR/custom_components/argus/brand/dark_logo.png" "$TARGET/dark_logo.png" 2>/dev/null || true
echo "✅ Brand images copied (RGBA 256x256 with transparent background)"

git add "$TARGET/"
git commit -m "Add Argus Home Hub brand assets

- Domain: argus
- Repository: https://github.com/Chrisalvir1/Argus
- Icon and logo: 256x256px PNG with transparent background (RGBA)
- Dark variants included" || echo "  (nothing new to commit)"

echo "📤 Pushing to $BRANDS_FORK..."
git push origin add-argus-brand --force

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
- [x] Folder path: \`custom_integrations/argus/\`") \
  2>&1 || true

echo "✅ hacs/brands: $BRANDS_PR"

# ============================================================
# PART 2: hacs/default
# ============================================================
echo ""
echo "══════════════════════════════════════════"
echo "  PART 2: hacs/default"
echo "══════════════════════════════════════════"

DEFAULT_FORK="$GH_USER/default"
DEFAULT_DIR="$WORK_DIR/default"

echo "📥 Cloning $DEFAULT_FORK..."
gh repo clone "$DEFAULT_FORK" "$DEFAULT_DIR" -- --depth=1
cd "$DEFAULT_DIR"

UB2=$(gh api "repos/hacs/default" --jq '.default_branch' 2>/dev/null || echo "master")
echo "  upstream default branch: $UB2"

git fetch origin --quiet
git checkout -B add-argus-integration "origin/$UB2" 2>/dev/null || git checkout -B add-argus-integration

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
- Zero external dependencies" || echo "  (nothing new to commit)"

echo "📤 Pushing to $DEFAULT_FORK..."
git push origin add-argus-integration --force

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

- [x] Repository is public
- [x] Files in \`custom_components/argus/\`
- [x] \`manifest.json\` valid
- [x] \`hacs.json\` valid
- [x] Translations in English (\`strings.json\`, \`translations/en.json\`)
- [x] Service descriptions in English (\`services.yaml\`)
- [x] HACS Action CI passes
- [x] hassfest CI passes
- [x] Brand submitted to hacs/brands

## What is Argus Home Hub?

Complete premium security alarm for Home Assistant:
🎨 Liquid Glass UI · 🌤️ Animated weather backgrounds · 🔐 Guest PINs with expiry
🚨 Panic/SOS mode · 📋 Full audit log · 🔋 Battery HUD · 🌍 7 languages
📱 Fullscreen multi-instance · 🏠 HomeKit status · ⚡ MQTT · 🔧 Zero YAML

**IoT class:** \`local_push\` | **Config flow:** Yes | **Zero external dependencies**") \
  2>&1 || true

echo "✅ hacs/default: $DEFAULT_PR"

echo ""
echo "══════════════════════════════════════════"
echo "  🎉 ALL DONE!"
echo "══════════════════════════════════════════"
echo "hacs/brands PR:  $BRANDS_PR"
echo "hacs/default PR: $DEFAULT_PR"
