import React, { useId } from 'react';
import { SecurityEmblem3D, type EmblemProps } from './SecurityEmblem3D';

/** Three selectable Argus emblems; the default is the animated security core. */
function SecurityShieldFallback({ state, label, variant = 'core', pulse = '', pulseKey = '' }: { state: string; label: string; variant?: string; pulse?: string; pulseKey?: string }) {
  const id = useId().replace(/:/g, '');
  const armed = state.startsWith('armed_');
  return <svg key={`${state}:${pulse}:${pulseKey}`} className={`console-shield-art console-shield console-shield--${variant} ${pulse ? `console-shield-pulse console-shield-pulse--${pulse}` : ''}`} data-state={state} data-pulse-key={pulseKey} viewBox="0 0 240 256" role="img" aria-label={label}>
    <defs>
      <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="currentColor" stopOpacity=".55"/><stop offset=".45" stopColor="currentColor" stopOpacity=".12"/><stop offset="1" stopColor="currentColor" stopOpacity=".3"/></linearGradient>
      <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".9"/><stop offset=".4" stopColor="currentColor"/><stop offset="1" stopColor="currentColor" stopOpacity=".4"/></linearGradient>
    </defs>
    <path d="M120 14 212 53v75c0 53-38 88-92 112-54-24-92-59-92-112V53z" fill={`url(#${id}-glass)`} stroke={`url(#${id}-rim)`} strokeWidth="2.5"/>
    <path d="M120 24 202 60v68c0 46-33 77-82 101-49-24-82-55-82-101V60z" fill="rgba(10,18,30,.35)" stroke="currentColor" strokeOpacity=".3"/>
    <path d="M44 65 120 33l70 29" fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="1.5"/>
    <path d="M39 73v53c0 41 29 73 64 91" fill="none" stroke="#fff" strokeOpacity=".13" strokeWidth="8"/>
    {pulse && <g className="console-shield-alert-rings" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="120" cy="124" r="58"/><circle cx="120" cy="124" r="58"/></g>}
    {variant === 'core' ? <g key={state} className="console-shield-symbol" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      <circle className="console-shield-core" cx="120" cy="124" r="51" fill="rgba(8,15,25,.6)" strokeOpacity=".35"/>
      <circle className="console-shield-ring" cx="120" cy="124" r="63" strokeWidth="1.5" strokeOpacity=".38"/>
      {state === 'armed_night' ? <path d="M132 91a34 34 0 1 0 20 57 29 29 0 0 1-20-57z"/>
        : state === 'armed_home' ? <path d="m91 122 29-24 29 24v31H99v-31M113 153v-22h14v22"/>
        : state === 'triggered' ? <path d="m120 93 34 59H86zM120 114v17"/>
        : ['pending','arming'].includes(state) ? <><circle cx="120" cy="124" r="28"/><path d="M120 105v20l13 9"/></>
        : state === 'unknown' || state === 'unavailable' ? <><path d="M120 101v28"/><circle cx="120" cy="144" r="1"/></>
        : armed ? <><rect x="99" y="118" width="42" height="34" rx="8"/><path d="M107 118v-12a13 13 0 0 1 26 0v12"/></>
        : <path className="console-shield-check" d="m97 125 16 16 32-34"/>}
    </g> : variant === 'crystal' ? <g className="console-shield-crystal" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"><path d="m120 76 44 48-44 52-44-52z"/><path d="m120 76 0 100m-44-52h88"/>{armed ? <path d="m101 126 13 13 27-29" strokeWidth="5"/> : <circle cx="120" cy="124" r="8" fill="currentColor"/>}</g>
      : <g className="console-shield-argus" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="M76 124q44-50 88 0-44 50-88 0z"/><circle cx="120" cy="124" r="17" fill="currentColor" fillOpacity=".18"/><circle cx="120" cy="124" r="6" fill="currentColor"/>{armed && <path d="m103 124 12 12 25-27"/>}</g>}
  </svg>;
}

export function SecurityShield(props: EmblemProps) {
  return <SecurityEmblem3D {...props} fallback={<SecurityShieldFallback {...props} />} />;
}
