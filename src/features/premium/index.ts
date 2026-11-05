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
    injectDisplayStyles(this);
    return result;
  };
}

export function injectDisplayStyles(panel: Pick<ArgusPanelHost, 'shadowRoot'>): void {
  const root = panel.shadowRoot;
  if (!root || root.getElementById(HDR_PROMOTION_STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = HDR_PROMOTION_STYLE_ID;
  style.textContent = `
    :host {
      --argus-accent-green: #10b981;
      --argus-accent-amber: #f59e0b;
      --argus-accent-red: #ef4444;
      --argus-accent-blue: #3b82f6;
      --argus-accent-purple: #8b5cf6;
      --argus-glow-green: rgba(16,185,129,.35);
      --argus-glow-amber: rgba(245,158,11,.35);
      --argus-glow-red: rgba(239,68,68,.45);
    }
    @media (color-gamut: p3) {
      @supports (color: color(display-p3 1 1 1)) {
        :host {
          --argus-accent-green: color(display-p3 .22 .82 .38);
          --argus-accent-amber: color(display-p3 .98 .72 .15);
          --argus-accent-red: color(display-p3 .98 .20 .25);
          --argus-accent-blue: color(display-p3 .20 .58 .95);
          --argus-accent-purple: color(display-p3 .68 .25 .88);
        }
      }
    }
    @media (color-gamut: rec2020) {
      @supports (color: color(rec2020 1 1 1)) {
        :host {
          --argus-accent-green: color(rec2020 .15 .85 .35);
          --argus-accent-amber: color(rec2020 .95 .70 .10);
          --argus-accent-red: color(rec2020 .95 .15 .20);
          --argus-accent-blue: color(rec2020 .15 .55 .95);
          --argus-accent-purple: color(rec2020 .70 .20 .90);
        }
      }
    }

  `;
  root.appendChild(style);
}
