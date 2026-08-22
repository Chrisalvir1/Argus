import type { ArgusPanelConstructor, ArgusPanelHost } from '../../core/panel';

const HDR_PROMOTION_STYLE_ID = 'argus-hdr-promotion-styles';

export function applyPremiumExperience(ArgusPanel: ArgusPanelConstructor): void {
  applyPremium(ArgusPanel);
}

export function applyPremium(ArgusPanel: ArgusPanelConstructor): void {
  if (!ArgusPanel || (ArgusPanel as any).__argusPremiumHDRApplied) return;
  (ArgusPanel as any).__argusPremiumHDRApplied = true;

  const originalConnectedCallback = ArgusPanel.prototype.connectedCallback as (() => void) | undefined;
  ArgusPanel.prototype.connectedCallback = function (this: ArgusPanelHost) {
    const result = typeof originalConnectedCallback === 'function' ? originalConnectedCallback.call(this) : undefined;
    injectHDRStyles(this);
    return result;
  };
}

function injectHDRStyles(panel: ArgusPanelHost): void {
  const root = panel.shadowRoot;
  if (!root || root.getElementById(HDR_PROMOTION_STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = HDR_PROMOTION_STYLE_ID;
  style.textContent = `
    @supports (color: color(rec2020 1 1 1)) {
      :host {
        --argus-accent-green: color(rec2020 0.15 0.85 0.35);
        --argus-accent-amber: color(rec2020 0.95 0.70 0.10);
        --argus-accent-red: color(rec2020 0.95 0.15 0.20);
        --argus-accent-blue: color(rec2020 0.15 0.55 0.95);
        --argus-accent-purple: color(rec2020 0.70 0.20 0.90);
        --argus-glow-green: rgba(30, 220, 90, 0.45);
        --argus-glow-amber: rgba(255, 180, 20, 0.45);
        --argus-glow-red: rgba(255, 40, 50, 0.55);
      }
    }

    @supports (color: color(display-p3 1 1 1)) and (not (color: color(rec2020 1 1 1))) {
      :host {
        --argus-accent-green: color(display-p3 0.22 0.82 0.38);
        --argus-accent-amber: color(display-p3 0.98 0.72 0.15);
        --argus-accent-red: color(display-p3 0.98 0.20 0.25);
        --argus-accent-blue: color(display-p3 0.20 0.58 0.95);
        --argus-accent-purple: color(display-p3 0.68 0.25 0.88);
        --argus-glow-green: rgba(34, 197, 94, 0.40);
        --argus-glow-amber: rgba(245, 158, 11, 0.40);
        --argus-glow-red: rgba(239, 68, 68, 0.50);
      }
    }

    :host {
      --argus-accent-green: #10b981;
      --argus-accent-amber: #f59e0b;
      --argus-accent-red: #ef4444;
      --argus-accent-blue: #3b82f6;
      --argus-accent-purple: #8b5cf6;
      --argus-glow-green: rgba(16, 185, 129, 0.35);
      --argus-glow-amber: rgba(245, 158, 11, 0.35);
      --argus-glow-red: rgba(239, 68, 68, 0.45);
    }

    .entry-icon,
    .argus-shield-svg,
    .liquid-btn,
    .console-sensor,
    .argus-sta-thumb {
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      perspective: 1000px;
    }

    .entry-icon {
      will-change: transform;
      animation: float-icon 5s ease-in-out infinite;
    }

    @keyframes float-icon {
      0%, 100% {
        transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
      }
      50% {
        transform: translate3d(0, -6px, 0) scale3d(1.015, 1.015, 1);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .entry-icon {
        animation: none !important;
        transform: none !important;
      }
    }
  `;
  root.appendChild(style);
}
