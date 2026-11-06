import React from 'react';
import { SecurityEmblem3D, type EmblemProps } from './SecurityEmblem3D';
import { MODE_PALETTE } from './mode-palette';

/** Three.js is the sole owner of the security emblem. */
function SecurityShieldFallback({ label, state, pulse, zones, zonesEnabled }: EmblemProps) {
  const count = zonesEnabled === false ? 7 : (zones?.length || 0);
  if (zonesEnabled === false) zones = [];
  const accent = state === 'triggered' || pulse === 'sos' ? MODE_PALETTE.alarm.css : state === 'armed_home' ? MODE_PALETTE.home.css
    : state === 'armed_away' ? MODE_PALETTE.away.css : state === 'armed_night' ? MODE_PALETTE.night.css
    : state === 'disarmed' ? MODE_PALETTE.disarmed.css : '#a4aab4';
  return <svg role="img" aria-label={[label, ...(zones || []).map(zone => `Zona ${zone.number}: ${zone.area || "Sin área"}`)].join(". ")} className="console-emblem-unavailable" viewBox="0 0 160 160"
    style={{ width: '70%', height: '70%', maxWidth: 200, maxHeight: 200 }}>
    <circle opacity={count ? 1 : 0} cx="80" cy="80" r="55" fill="none" stroke={accent} strokeWidth="15" strokeDasharray={count ? `${(2 * Math.PI * 55 / count) * .79} ${(2 * Math.PI * 55 / count) * .21}` : undefined}
      strokeDashoffset={zones?.length ? (2 * Math.PI * 55 / zones.length) * .395 : undefined} />
    {zones?.map((zone, index) => {
      const angle = index * 2 * Math.PI / zones.length - Math.PI / 2;
      const tangent = angle * 180 / Math.PI + 90;
      const rotation = Math.cos(tangent * Math.PI / 180) < 0 ? tangent + 180 : tangent;
      const name = zone.area?.trim() || 'Sin área';
      return <g key={zone.id} transform={`translate(${80 + 55 * Math.cos(angle)}, ${80 + 55 * Math.sin(angle)}) rotate(${rotation})`}
        fill="#080e14" textAnchor="middle" fontSize="5">
        <text y="-1" fontWeight="bold">ZONA {zone.number}</text>
        <text y="5">{name.length > 10 ? name.slice(0, 9) + '…' : name}</text>
      </g>;
    })}
    <circle cx="80" cy="80" r="34" fill="#090d12" stroke={accent} strokeWidth="3" />
    <circle cx="80" cy="80" r="23" fill="#010204" stroke="#83919f" strokeWidth="1" />
    <ellipse cx="73" cy="73" rx="6" ry="4" fill="#d6e3ef" opacity=".7" />
    <circle cx="89" cy="91" r="2" fill={accent} />
  </svg>;
}

export function SecurityShield(props: EmblemProps) {
  return <SecurityEmblem3D {...props} fallback={<SecurityShieldFallback {...props} />} />;
}
