# 🔴 Reddit Post — r/homeassistant (English)

**Title:**
> I built Argus Home Hub v1.3.3 — A premium security panel for HA that makes Alarmo look basic (Liquid Glass UI, 7 languages, guest PINs with expiry, animated weather backgrounds, and way more)

---

**Body:**

Hey r/homeassistant! 👋

I've been building **Argus Home Hub** for the past year and just released **v1.3.3** — a full custom integration that replaces your alarm panel with something that actually looks and feels premium.

I know Alarmo is great and I used it too, but I wanted something more powerful and beautiful. So I built it from scratch.

---

## 🎬 What is Argus?

A complete **Home Assistant security system** — backend integration + Lovelace card + full admin panel — all in one HACS install. Zero external dependencies. Pure Python + vanilla JS.

---

## ✨ What's new in v1.3.3

- **Liquid Glass Lovelace card** with integrated PIN keypad overlay (auto-shows when Master PIN is active)
- **Full i18n with instant language switching** — no reload needed (7 languages: EN, ES, FR, PT, IT, ZH, RU)
- **Admin PIN reset** — HA admins can reset the master PIN securely, with audit trail
- **Physical background file storage** — no more Base64 strings bloating your config

---

## 🆚 Argus vs Alarmo — key differences

| Feature | Alarmo | Argus |
|---|---|---|
| UI Design | Default HA card | ✅ Liquid Glass (macOS-inspired) |
| Animated backgrounds | ❌ | ✅ CSS weather animations (rain, snow, stars…) |
| Multi-language | Limited | ✅ 7 languages, instant switch |
| Guest codes with expiry | ❌ | ✅ Temporary PINs with date expiration |
| Panic / SOS mode | ❌ | ✅ Slide-to-confirm panic button |
| Battery monitoring HUD | ❌ | ✅ Auto-scan sensors, alerts below 20% |
| Activity audit log | Basic | ✅ 200 entries, sensor detail, user attribution |
| Admin PIN reset | ❌ | ✅ Admin-only, logged in audit trail |
| Linked automations view | ❌ | ✅ See your HA rules from within the panel |
| Fullscreen + multi-instance | ❌ | ✅ Perfect for wall-mounted tablets |
| HomeKit bridge status | ❌ | ✅ Built-in |
| YAML required | Sometimes | ✅ Zero YAML — pure config flow UI |

---

## 🛡️ Core security features

- **5 alarm modes**: Home, Away, Night, Vacation, Disarmed
- **Per-mode sensor configuration** — different sensors per mode
- **Entry delay** — grace period when entering
- **Bypass mode** — arm even with open sensors
- **Siren failover** — tries native domain, falls back to `homeassistant.turn_on` (works with Tuya plugs, WiFi lights, Matter devices)
- **MQTT support** — publish state, listen for arm/disarm commands
- **TTS integration** — announce alarm events on media players

---

## 📦 Install via HACS (Custom Repository)

1. Open HACS → Integrations → `⋮` menu → **Custom repositories**
2. Add URL: `https://github.com/Chrisalvir1/Argus` → Category: **Integration**
3. Search **"Argus"** → Download → Restart HA
4. Go to **Settings → Devices & Services → Add Integration** → search **Argus**
5. Follow the config wizard (name, sensors, PIN, timers — no YAML!)

**Add the Lovelace card:**
```yaml
type: custom:argus-card
entity: alarm_control_panel.argus
title: Security Panel
```

**Add the full admin panel (optional, great for tablets):**
```yaml
type: custom:argus-panel
```

---

## 🔗 Links

- **GitHub**: https://github.com/Chrisalvir1/Argus
- **Issues / Feature Requests**: https://github.com/Chrisalvir1/Argus/issues
- **Support the project**: https://paypal.me/CEstradaAlvir

---

Built by a single developer. If you try it, feedback is super welcome — drop a comment or open an issue. Stars on GitHub are always appreciated ⭐

---

**Suggested subreddits to cross-post:**
- r/homeassistant ← primary
- r/smarthome
- r/homeautomation
- r/HomeKit (for HomeKit section)
- r/selfhosted
