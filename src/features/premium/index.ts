import type { ArgusPanelConstructor, ArgusPanelHost } from '../../core/panel';

const HDR_AND_PROMOTION_CSS = `
/* ─── Argus High Gamut (Rec.2020 / Display-P3 / HDR / HLG) & 120Hz ProMotion ─── */
:host {
  --argus-accent-home: #ffad42;
  --argus-accent-away: #ff6464;
  --argus-accent-night: #7fb9ff;
  --argus-accent-vacation: #d69cff;
  --argus-accent-disarm: #6be295;
  --argus-accent-triggered: #ff424f;
  --argus-accent-connected: #75f4b0;
  --argus-glow-opacity: 0.35;
}

@supports (color: color(display-p3 1 1 1)) {
  :host {
    --argus-accent-home: color(display-p3 1 0.68 0.22);
    --argus-accent-away: color(display-p3 1 0.35 0.35);
    --argus-accent-night: color(display-p3 0.45 0.72 1);
    --argus-accent-vacation: color(display-p3 0.85 0.55 1);
    --argus-accent-disarm: color(display-p3 0.4 0.9 0.55);
    --argus-accent-triggered: color(display-p3 1 0.2 0.2);
    --argus-accent-connected: color(display-p3 0.46 0.96 0.69);
  }
}

@supports (color: color(rec2020 1 1 1)) {
  :host {
    --argus-accent-home: color(rec2020 1 0.65 0.12);
    --argus-accent-away: color(rec2020 1 0.25 0.28);
    --argus-accent-night: color(rec2020 0.35 0.72 1);
    --argus-accent-vacation: color(rec2020 0.85 0.5 1);
    --argus-accent-disarm: color(rec2020 0.3 0.95 0.5);
    --argus-accent-triggered: color(rec2020 1 0.1 0.15);
    --argus-accent-connected: color(rec2020 0.38 0.98 0.64);
  }
}

@media (dynamic-range: high) {
  :host {
    --argus-glow-opacity: 0.55;
  }
  .entry-icon svg {
    filter: drop-shadow(0 0 32px var(--argus-accent-connected, rgba(94,255,167,0.4))) brightness(1.08) !important;
  }
}

/* ─── Apple ProMotion (120Hz) & High Frame Rate GPU Composition ─── */
.entry-icon {
  transform: translate3d(0, 0, 0) !important;
  -webkit-transform: translate3d(0, 0, 0) !important;
  -webkit-backface-visibility: hidden !important;
  backface-visibility: hidden !important;
  will-change: transform !important;
}

.entry-icon svg {
  transform: translate3d(0, 0, 0) !important;
  -webkit-transform: translate3d(0, 0, 0) !important;
  will-change: transform !important;
}

@keyframes float-icon {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(-1deg);
  }
  50% {
    transform: translate3d(0, -12px, 0) rotate(1deg);
  }
}

.console-sensor, .console-sensor-icon, .console-sensor-state {
  will-change: transform, opacity !important;
}

.wx-static {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
}
`;

type PremiumPrototype = ArgusPanelHost & {
  __argusPremiumExperience?: boolean;
  connectedCallback?: () => void;
};

export function applyPremiumExperience(C: ArgusPanelConstructor | undefined): void {
  const proto = C?.prototype as PremiumPrototype | undefined;
  if (!proto || proto.__argusPremiumExperience) return;
  proto.__argusPremiumExperience = true;

  const connected = proto.connectedCallback;
  proto.connectedCallback = function (this: ArgusPanelHost) {
    const value = connected?.call(this);
    queueMicrotask(() => {
      if (!this.shadowRoot) return;
      if (!this.shadowRoot.getElementById('argus-premium-hdr-style')) {
        const style = document.createElement('style');
        style.id = 'argus-premium-hdr-style';
        style.textContent = HDR_AND_PROMOTION_CSS;
        this.shadowRoot.append(style);
      }
    });
    return value;
  };
}
