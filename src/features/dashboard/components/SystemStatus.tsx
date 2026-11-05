import React from 'react';

type SystemStatusProps = {
  text: string;
  state: string;
  triggered?: boolean;
};

/** Single, independent status label owned by the React console. */
export function SystemStatus({ text, state, triggered = false }: SystemStatusProps) {
  const visualState = triggered ? 'triggered' : state;
  return (
    <span className={`argus-system-status argus-system-status--${visualState}`} role="status" aria-live="polite">
      {text}
    </span>
  );
}
