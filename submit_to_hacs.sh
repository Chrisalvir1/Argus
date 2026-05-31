#!/bin/bash
# ============================================================
# Argus Home Hub — Submit to hacs/default + home-assistant/brands
# Run from inside your local Argus repo (any branch).
# Requirements: gh (GitHub CLI) already authenticated.
# ============================================================

set -e

# Accept GitHub host key automatically (avoids "Are you sure?" prompt)
export GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=accept-new"

ARGUS_DOMAIN="argus"
ARGUS_DIR="$(cd "$(dirname "$0")" && pwd)"
WORK_DIR=$(mktemp -d)
trap "rm -rf '$WORK_DIR'" EXIT

echo "🔐 Checking GitHub CLI authentication..."
gh auth status || { echo "❌ Run: gh auth login"; exit 1; }
GH_USER=$(gh api user --jq '.login')
echo "✅ Logged in as: $GH_USER"
echo ""

ensure_fork() {
  local upstream="$1"
  local fork_name="${upstream##*/}"
  local fork_repo="$GH_USER/$fork_name"

  if gh api "repos/$fork_repo" --silent 2>/dev/null; then
    echo "  ✅ Fork $fork_repo already exists"
    return 0
  fi

  echo "  Creating fork of $upstream..."
  gh api "repos/$upstream/forks" -X POST --silent 2>/dev/null && sleep 8 || {
    echo ""
    echo "  ⚠️  Auto-fork failed. Please fork manually:"
    echo "     👉 https://github.com/$upstream  → click 'Fork'"
    echo "  Press ENTER when done..."
    read -r
  }
}

# ============================================================
# PART 1: hacs/default  (fork already exists: Chrisalvir1/default)
# ============================================================
echo "══════════════════════════════════════════"
echo "  PART 1: hacs/default"
echo "══════════════════════════════════════════"

ensure_fork "hacs/default"

DEFAULT_DIR="$WORK_DIR/default"
echo "📥 Cloning Chrisalvir1/default..."
gh repo clone "$GH_USER/default" "$DEFAULT_DIR" -- --depth=1
cd "$DEFAULT_DIR"

# Sync fork with upstream master
git remote add upstream https://github.com/hacs/default.git 2>/dev/null || true
GIT_TERMINAL_PROMPT=0 git fetch upstream master --quiet 2>/dev/null || git fetch origin --quiet
git checkout -B add-argus-integration upstream/master 2>/dev/null \
  || git checkout -B add-argus-integration origin/master

# hacs/default uses a single FILE named "integration" containing a JSON
# array of "owner/repo" strings, sorted case-insensitively. We insert
# our entry into that array (NOT a separate json file).
python3 - "$PWD/integration" << 'PYEOF'
import json, sys

path = sys.argv[1]
entry = "Chrisalvir1/Argus"

with open(path) as f:
    data = json.load(f)

if entry not in data:
    data.append(entry)

# HACS sorts case-insensitively by the full "owner/repo" string
data = sorted(set(data), key=lambda s: s.lower())

with open(path, "w") as f:
    json.dump(data, f, indent=2)
    f.write("\n")

print(f"  ✅ Added {entry} to integration list ({len(data)} total entries)")
PYEOF

git add integration
git commit -m "Add Argus Home Hub integration

- Name: Argus Home Hub
- Repository: Chrisalvir1/Argus
- Domain: argus
- IoT class: local_push
- Config flow: Yes
- Zero external dependencies" || echo "  (nothing to commit)"

echo "📤 Pushing to $GH_USER/default..."
git push origin add-argus-integration --force

echo "🔀 Creating PR to hacs/default..."
DEFAULT_PR=$(gh pr create \
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

- [x] Repository is public
- [x] Files in \`custom_components/argus/\`
- [x] \`manifest.json\` valid (domain, codeowners, config_flow, iot_class, version)
- [x] \`hacs.json\` valid
- [x] Translations in English (\`strings.json\`, \`translations/en.json\`)
- [x] Service descriptions in English (\`services.yaml\`)
- [x] HACS Action CI passes (validate.yml)
- [x] hassfest CI passes (validate.yml)

## What is Argus Home Hub?

Complete premium security alarm for Home Assistant — a full replacement for the standard alarm panel:

- 🎨 **Liquid Glass UI** (macOS/iOS inspired glassmorphism, Lovelace card + full admin panel)
- 🌤️ **Animated weather backgrounds** (pure CSS — rain, snow, stars, clouds)
- 🔐 **Guest PIN codes** with expiration dates
- 🚨 **Panic/SOS mode** with slide-to-confirm gesture
- 📋 **Full audit log** — 200 entries, user attribution, which sensor triggered
- 🔋 **Battery monitoring HUD** for all intrusion sensors (alerts below 20%)
- 🌍 **7 languages** with instant in-app switching (no reload)
- 📱 **Fullscreen + multi-instance** support for wall-mounted tablets
- 🏠 **HomeKit bridge status** display
- ⚡ **MQTT sync** for external integrations
- 🔧 **Zero YAML** — pure config flow setup

**IoT class:** \`local_push\` | **Config flow:** Yes | **Zero external dependencies**") \
  2>&1 || true

echo "✅ hacs/default PR: $DEFAULT_PR"

# ============================================================
# PART 2: home-assistant/brands  (where HACS actually gets icons)
# ============================================================
echo ""
echo "══════════════════════════════════════════"
echo "  PART 2: home-assistant/brands"
echo "══════════════════════════════════════════"

ensure_fork "home-assistant/brands"

HA_BRANDS_DIR="$WORK_DIR/brands"
echo "📥 Cloning $GH_USER/brands..."
gh repo clone "$GH_USER/brands" "$HA_BRANDS_DIR" -- --depth=1
cd "$HA_BRANDS_DIR"

git remote add upstream https://github.com/home-assistant/brands.git 2>/dev/null || true
GIT_TERMINAL_PROMPT=0 git fetch upstream master --quiet 2>/dev/null || git fetch origin --quiet
git checkout -B add-argus-brand upstream/master 2>/dev/null \
  || git checkout -B add-argus-brand origin/master

# Create brand folder for custom integrations
TARGET="custom_integrations/$ARGUS_DOMAIN"
mkdir -p "$TARGET"
cp "$ARGUS_DIR/custom_components/argus/brand/icon.png"      "$TARGET/icon.png"
cp "$ARGUS_DIR/custom_components/argus/brand/logo.png"      "$TARGET/logo.png"
cp "$ARGUS_DIR/custom_components/argus/brand/dark_icon.png" "$TARGET/dark_icon.png" 2>/dev/null || true
cp "$ARGUS_DIR/custom_components/argus/brand/dark_logo.png" "$TARGET/dark_logo.png" 2>/dev/null || true
echo "✅ Brand images copied (RGBA 256x256 transparent background)"

git add "$TARGET/"
git commit -m "Add Argus Home Hub brand assets

- Domain: argus
- Repository: https://github.com/Chrisalvir1/Argus
- Icon and logo: 256x256px PNG with transparent background (RGBA)
- Dark variants included" || echo "  (nothing to commit)"

echo "📤 Pushing to $GH_USER/brands..."
git push origin add-argus-brand --force

echo "🔀 Creating PR to home-assistant/brands..."
BRANDS_PR=$(gh pr create \
  --repo home-assistant/brands \
  --base master \
  --head "$GH_USER:add-argus-brand" \
  --title "Add Argus Home Hub brand" \
  --body "## Description

Adds brand assets for **Argus Home Hub** custom integration.

- **Repository:** https://github.com/Chrisalvir1/Argus
- **Integration domain:** \`argus\`
- **Icon/Logo:** 256×256px PNG with transparent background (RGBA)
- **Dark variants:** Included

## Checklist
- [x] Images are 256×256px
- [x] Images are PNG format with transparent background (RGBA mode)
- [x] Domain \`argus\` matches integration manifest
- [x] Folder: \`custom_integrations/argus/\`") \
  2>&1 || true

echo "✅ home-assistant/brands PR: $BRANDS_PR"

# ============================================================
echo ""
echo "══════════════════════════════════════════"
echo "  🎉 ALL DONE!"
echo "══════════════════════════════════════════"
echo ""
echo "hacs/default PR:          $DEFAULT_PR"
echo "home-assistant/brands PR: $BRANDS_PR"
echo ""
echo "Next steps:"
echo "  1. Wait for CI on both PRs"
echo "  2. home-assistant/brands usually merges faster"
echo "  3. hacs/default reviewers may ask for CI screenshots"
