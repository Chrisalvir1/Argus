import React, { useEffect, useRef, useState } from 'react';
import { isSlideTouchMode } from '../../safety/slide-action';

export function slideTranslation(clientX: number, trackLeft: number, grabOffset: number, inset: number, max: number): number {
  return Math.max(0, Math.min(clientX - trackLeft - grabOffset - inset, max));
}

export function slideReachedEnd(position: number, max: number): boolean {
  // The action is intentionally strict: releasing close to the end never
  // arms, disarms, or triggers SOS. `slideTranslation` clamps a true end
  // position to `max`, so this still works with mouse, touch and fullscreen.
  return max > 0 && position >= max;
}

type Props = {
  panel: any;
  kind: 'disarm' | 'sos';
  label: string;
  icon: React.ReactNode;
  touchLabel?: string;
  activeSos?: boolean;
  onConfirm: () => unknown;
};

/** React owns the complete slider subtree so state renders cannot detach an active pointer gesture. */
export function SlideAction({ panel, kind, label, icon, touchLabel, activeSos = false, onConfirm }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const activePointer = useRef<number | null>(null);
  const grabOffset = useRef(0);
  const baseLeft = useRef(4);
  const maxPosition = useRef(1);
  const progressRef = useRef(0);
  const doneRef = useRef(false);
  const busyTimer = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [busy, setBusy] = useState(false);
  const touchMode = isSlideTouchMode(panel);

  useEffect(() => () => {
    if (busyTimer.current != null) window.clearTimeout(busyTimer.current);
  }, []);

  const reset = () => {
    progressRef.current = 0;
    setProgress(0);
    setDragging(false);
    activePointer.current = null;
  };

  const commit = () => {
    if (doneRef.current || busy) return;
    doneRef.current = true;
    reset();
    setBusy(true);
    try {
      const result = onConfirm();
      if (result && typeof (result as Promise<unknown>).then === 'function') {
        void (result as Promise<unknown>).catch(error => console.error('Argus slide action failed', error));
      }
    } finally {
      busyTimer.current = window.setTimeout(() => {
        doneRef.current = false;
        setBusy(false);
      }, 1300);
    }
  };

  const update = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const next = slideTranslation(clientX, rect.left, grabOffset.current, baseLeft.current, maxPosition.current);
    progressRef.current = next;
    setProgress(next);
    if (slideReachedEnd(next, maxPosition.current)) commit();
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (touchMode || busy || event.button !== 0 || !(event.target as HTMLElement).closest('.argus-sta-thumb')) return;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return;
    event.preventDefault();
    const trackRect = track.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    baseLeft.current = Number.parseFloat(getComputedStyle(thumb).left) || 4;
    maxPosition.current = Math.max(1, track.clientWidth - thumb.offsetWidth - baseLeft.current);
    grabOffset.current = event.clientX - thumbRect.left;
    activePointer.current = event.pointerId;
    doneRef.current = false;
    setDragging(true);
    try { track.setPointerCapture(event.pointerId); } catch { /* document fallback still tracks release */ }
    // Correct the initial position if layout changed since the last render.
    progressRef.current = Math.max(0, Math.min(thumbRect.left - trackRect.left - baseLeft.current, maxPosition.current));
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (activePointer.current !== event.pointerId || doneRef.current) return;
    if (event.cancelable) event.preventDefault();
    update(event.clientX);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (activePointer.current !== event.pointerId) return;
    update(event.clientX);
    if (activePointer.current == null) return; // reached the end and committed
    // A partial drag must always return to the start and do nothing. This is
    // especially important for destructive SOS / disarm actions.
    reset();
  };

  const onPointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    if (activePointer.current === event.pointerId) reset();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!busy && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      commit();
    }
  };

  const trackClass = [
    'argus-sta-track', `argus-sta-track--${kind}`,
    dragging ? 'is-dragging' : '',
    activeSos ? 'sos-pulsing sos-active' : '',
  ].filter(Boolean).join(' ');
  const accessibleLabel = busy
    ? (kind === 'disarm' ? 'Solicitando desarmado…' : 'Procesando SOS…')
    : touchMode ? (touchLabel || label) : label;

  return <div className={`argus-sta-wrap argus-sta-wrap--${kind}${kind === 'disarm' ? ' sta-armed' : ''}${touchMode ? ' sta-mode-touch' : ''}${activeSos ? ' sos-active' : ''}`}>
    <div
      ref={trackRef}
      className={trackClass}
      role="button"
      tabIndex={busy ? -1 : 0}
      aria-label={accessibleLabel}
      aria-busy={busy || undefined}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onLostPointerCapture={onPointerCancel}
      onKeyDown={onKeyDown}
      onClick={touchMode && !busy ? commit : undefined}
    >
      <div className="argus-sta-fill" style={{ width: touchMode ? undefined : `${progress + (thumbRef.current?.offsetWidth || 56) + baseLeft.current}px` }} />
      <div ref={thumbRef} className="argus-sta-thumb" style={{ transform: touchMode ? undefined : `translateX(${progress}px)` }} aria-hidden="true">{icon}</div>
      <span className="argus-sta-label" style={{ opacity: touchMode ? 1 : Math.max(0, 1 - (progress / Math.max(1, maxPosition.current)) * 1.8) }}>
        {touchMode && <span className="argus-sta-touch-icon" aria-hidden="true">{icon}</span>}
        <span>{accessibleLabel}</span>
      </span>
    </div>
  </div>;
}
