# Argus v2.2.80 — Frosted Profile Blur, Jelly Spring Physics, Dynamic Sensor Grid & Arming Priority Blinking

## Added & Improved
- **Profile Popover Frosted Blur & Jelly Spring Physics:** High-fidelity frosted glass background (`backdrop-filter: blur(32px) saturate(190%)` and `background: rgba(18, 26, 40, 0.95)`) eliminating background text and element bleed-through, plus smooth spring jelly opening and closing physics (`@keyframes jellySpringIn` / `@keyframes jellySpringOut`).
- **Real-Time Sensor Synchronization:** Instant live updates of the console sensor cards whenever sensors are added or removed from mode configurations.
- **Dynamic Adaptive Sensor Grid & Contained Scrolling:** Bounded sensor container preventing dashboard vertical stretching, adapting dynamically to 1-column (1-2 sensors), compact 2-column (3-6 sensors), and micro-grid (7+ sensors).
- **Arming-Pending Priority & Warning Blinking:** In arming delay or pending state (`pending`, `arming`, `arming_waiting_for_sensors`), open or blocking sensors are automatically placed in top priority rows with high-visibility amber/gold pulsing animations.
