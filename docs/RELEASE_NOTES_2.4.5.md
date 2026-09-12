# Argus Home Hub v2.4.5 Release Notes

## Overview
Argus Home Hub v2.4.5 introduces an aggressive multi-layer brand patch engine designed to overcome Shadow DOM encapsulation barriers in Home Assistant and HACS frontend tables.

## Changes & Fixes
- **Deep Shadow DOM Penetration**: Traverses all open shadow roots recursively and observes element mutations across shadow boundaries.
- **attachShadow Interception**: Monkey-patches `Element.prototype.attachShadow` to automatically hook a `MutationObserver` to every shadow root created by Lit / Web Components dynamically.
- **Continuous Background Poller**: Unbounded background poller ensures dynamic HACS search filtering, sorting, and navigation events reliably replace the Cloudflare fallback icon with the local high-res Argus shield.
- **Capturing Error Listener**: Global error listener captures broken brand CDN images and instantly swaps them to local assets.
- **Cache-Busting Update**: Bumped all version tokens to v2.4.5 to clear stale browser asset caches.
