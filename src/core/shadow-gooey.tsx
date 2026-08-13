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
    const root = el.getRootNode();
    if (root instanceof ShadowRoot) {
      // The filter is already inside the Shadow DOM
    }
  }, []);

  // WebKit fallback for iOS Safari bugs with high contrast on feColorMatrix
  const isWebKit = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const safeContrast = isWebKit ? 14 : contrast;

  return (
    <svg ref={ref} style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur" />
          <feColorMatrix in="blur" mode="matrix"
            values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${safeContrast} -${safeContrast - 1}`}
            result="gooey" />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}
