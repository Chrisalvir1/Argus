import React, { useEffect, useRef } from 'react';

interface ShadowGooeyPortalProps {
  id?: string;
  blur?: number;
  contrast?: number;
}

export function ShadowGooeyPortal({ id = 'argus-gooey', blur = 6, contrast = 18 }: ShadowGooeyPortalProps) {
  const ref = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // In Home Assistant, custom elements use Shadow DOM.
    // SVG filters usually need to be in the same DOM root as the element using them.
    const root = el.getRootNode();
    if (root instanceof ShadowRoot) {
      // The filter is already inside the Shadow DOM (rendered by React Portal), so it should work!
      // If we ever need to manually append it to the shadow root body, we can do it here.
    }
  }, []);

  return (
    <svg ref={ref} style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur" />
          <feColorMatrix in="blur" mode="matrix"
            values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${contrast} -${contrast - 1}`}
            result="gooey" />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}
