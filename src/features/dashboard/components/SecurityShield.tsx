import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import type { EmblemProps } from './SecurityEmblem3D';
import { MODE_PALETTE } from './mode-palette';

const SecurityEmblem3D = lazy(async () => ({
  default: (await import('./SecurityEmblem3D')).SecurityEmblem3D,
}));

/** Lightweight SVG renders the security state without a WebGL context. */
function SecurityShieldFallback({ label, state, pulse, zones, zonesEnabled, onSelectZone }: EmblemProps) {
  const count = zonesEnabled === false ? 7 : (zones?.length || 0);
  if (zonesEnabled === false) zones = [];
  const accent = state === 'triggered' || pulse === 'sos' ? MODE_PALETTE.alarm.css : state === 'armed_home' ? MODE_PALETTE.home.css
    : state === 'armed_away' ? MODE_PALETTE.away.css : state === 'armed_night' ? MODE_PALETTE.night.css
    : state === 'disarmed' ? MODE_PALETTE.disarmed.css : '#a4aab4';
  return <svg role="img" aria-label={[label, ...(zones || []).map(zone => `Zona ${zone.number}: ${zone.area || "Sin área"}`)].join(". ")} className="console-emblem-unavailable" viewBox="0 0 160 160"
    style={{ width: '90%', height: '90%', maxWidth: 380, maxHeight: 380 }}>
    <g className="argus-lite-rotor">
    <circle opacity={count && !zones?.length ? 1 : 0} cx="80" cy="80" r="55" fill="none" stroke={accent} strokeWidth="15" strokeDasharray={count ? `${(2 * Math.PI * 55 / count) * .79} ${(2 * Math.PI * 55 / count) * .21}` : undefined}
      strokeDashoffset={zones?.length ? (2 * Math.PI * 55 / zones.length) * .395 : undefined} />
    {zones?.map((zone, index) => <circle key={`arc-${zone.id}`} cx="80" cy="80" r="55" fill="none"
      stroke={zone.open ? '#ff302b' : '#21dba0'} strokeWidth="15"
      strokeDasharray={`${(2 * Math.PI * 55 / zones.length) * .79} ${2 * Math.PI * 55}`}
      transform={`rotate(${index * 360 / zones.length - 90 - (360 / zones.length) * .395} 80 80)`} />)}
    {zones?.map((zone, index) => {
      const angle = index * 2 * Math.PI / zones.length - Math.PI / 2;
      const tangent = angle * 180 / Math.PI + 90;
      const rotation = Math.cos(tangent * Math.PI / 180) < 0 ? tangent + 180 : tangent;
      const name = zone.area?.trim() || 'Sin área';
      return <g key={zone.id} role="button" tabIndex={0} aria-label={`Zona ${zone.number}: ${name}`}
        onClick={() => onSelectZone?.(zone.id)}
        onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelectZone?.(zone.id); } }}
        style={{cursor: 'pointer', pointerEvents: 'auto'}} transform={`translate(${80 + 55 * Math.cos(angle)}, ${80 + 55 * Math.sin(angle)}) rotate(${rotation})`}
        fill="#080e14" textAnchor="middle" fontSize="6">
        <title>{`Zona ${zone.number}: ${name}`}</title>
        <text y="-1" fontWeight="bold">ZONA {zone.number}</text>
        <text y="5">{name.length > 10 ? name.slice(0, 9) + '…' : name}</text>
      </g>;
    })}
    </g>
    <circle cx="80" cy="80" r="34" fill="#090d12" stroke={accent} strokeWidth="3" />
    <circle cx="80" cy="80" r="23" fill="#010204" stroke="#83919f" strokeWidth="1" />
    <ellipse cx="73" cy="73" rx="6" ry="4" fill="#d6e3ef" opacity=".7" />
    <circle cx="89" cy="91" r="2" fill={accent} />
  </svg>;
}

export function SecurityShield(props: EmblemProps) {
  const anchor = useRef<HTMLSpanElement>(null);
  const [lightweight, setLightweight] = useState(true);
  useEffect(() => {
    const host = (anchor.current?.getRootNode() as ShadowRoot)?.host;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setLightweight(motion.matches || (host ? host.classList.contains('argus-perf-essential') : false));
    update();
    motion.addEventListener('change', update);
    const observer = new MutationObserver(update);
    if (host) observer.observe(host, { attributes: true, attributeFilter: ['class'] });
    return () => {
      motion.removeEventListener('change', update);
      observer.disconnect();
    };
  }, []);
  const fallback = <SecurityShieldFallback {...props} />;
  return <span ref={anchor} style={{display: 'contents'}}>
    {lightweight ? fallback : <Suspense fallback={fallback}><SecurityEmblem3D {...props} fallback={fallback} /></Suspense>}
  </span>;
}
