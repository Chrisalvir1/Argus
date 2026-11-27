var e=`argus-hdr-promotion-styles`;function t(e){n(e)}function n(e){if(!e||e.__argusPremiumHDRApplied)return;e.__argusPremiumHDRApplied=!0;let t=e.prototype.connectedCallback;e.prototype.connectedCallback=function(){let e=typeof t==`function`?t.call(this):void 0;return r(this),e}}function r(t){let n=t.shadowRoot;if(!n||n.getElementById(e))return;let r=document.createElement(`style`);r.id=e,r.textContent=`
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

  `,n.appendChild(r)}export{r as n,t};