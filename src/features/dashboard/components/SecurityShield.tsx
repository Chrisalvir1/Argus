import React, { useId } from 'react';

/** Layered glass shield. Finite transitions only; no background animation loop. */
export function SecurityShield({ state, label }: { state: string; label: string }) {
  const id = useId().replace(/:/g, '');
  const outline = 'M120 14 212 53v75c0 53-38 88-92 112-54-24-92-59-92-112V53z';
  return <svg className="console-shield-art console-shield" data-state={state} viewBox="0 0 240 256" role="img" aria-label={label}>
    <defs>
      <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="currentColor" stopOpacity=".55"/><stop offset=".45" stopColor="currentColor" stopOpacity=".12"/><stop offset="1" stopColor="currentColor" stopOpacity=".3"/></linearGradient>
      <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".9"/><stop offset=".4" stopColor="currentColor"/><stop offset="1" stopColor="currentColor" stopOpacity=".4"/></linearGradient>
    </defs>
    <path d={outline} fill={`url(#${id}-glass)`} stroke={`url(#${id}-rim)`} strokeWidth="2.5"/>
    <path d="M120 24 202 60v68c0 46-33 77-82 101-49-24-82-55-82-101V60z" fill="rgba(10,18,30,.35)" stroke="currentColor" strokeOpacity=".3"/>
    <path d="m44 65 76-32 70 29" fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="1.5"/>
    <path d="M39 73v53c0 41 29 73 64 91" fill="none" stroke="#fff" strokeOpacity=".13" strokeWidth="8"/>
    <circle cx="120" cy="124" r="55" fill="rgba(8,15,25,.6)" stroke="currentColor" strokeOpacity=".35"/>
    <circle className="console-shield-ring" cx="120" cy="124" r="49" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity=".2"/>
    <g key={state} className="console-shield-symbol" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      {state === 'armed_night' ? <path d="M132 91a34 34 0 1 0 20 57 29 29 0 0 1-20-57z"/>
        : state === 'armed_home' ? <><path d="m91 122 29-24 29 24v31H99v-31M113 153v-22h14v22"/></>
        : state === 'triggered' ? <><path d="m120 93 34 59H86zM120 114v17"/><circle cx="120" cy="141" r="1"/></>
        : ['pending','arming'].includes(state) ? <><circle cx="120" cy="124" r="28"/><path d="M120 105v20l13 9"/></>
        : state === 'unknown' || state === 'unavailable' ? <><path d="M120 101v28"/><circle cx="120" cy="144" r="1"/></>
        : state.startsWith('armed_') ? <><rect x="99" y="118" width="42" height="34" rx="8"/><path d="M107 118v-12a13 13 0 0 1 26 0v12"/></>
        : <path className="console-shield-check" d="m97 125 16 16 32-34"/>}
    </g>
  </svg>;
}
