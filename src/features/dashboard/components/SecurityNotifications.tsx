import React, { useEffect, useRef, useState } from 'react';

export type ZoneSensorNotice = { id:string; name:string; open:boolean; zoneNumber:number; zoneName:string };
type Toast = ZoneSensorNotice & { closedAt?:number };

/** UI-only notifications: closing a sensor or a notice never controls the alarm. */
export function SecurityNotifications({ panic, triggered, sensors, emergencyNumber, callLabel, cancelLabel }: {
  panic:boolean; triggered:boolean; sensors:ZoneSensorNotice[]; emergencyNumber:string; callLabel:string; cancelLabel:string;
}) {
  const element = useRef<HTMLElement>(null);
  const [callOpen, setCallOpen] = useState(false);
  const [callMounted, setCallMounted] = useState(panic);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const previous = useRef(new Map<string, boolean>());
  const swipe = useRef<number | null>(null);
  const dragged = useRef(false);
  const signature = JSON.stringify(sensors);

  useEffect(() => { setCallOpen(false); setCallMounted(panic); }, [panic]);
  useEffect(() => {
    if (!triggered || panic) { previous.current.clear(); setToasts([]); return; }
    const changed = sensors.filter(sensor => sensor.open || previous.current.get(sensor.id) === true);
    setToasts(old => [
      ...old.filter(toast => toast.closedAt && !changed.some(sensor => sensor.id === toast.id)),
      ...changed.map(sensor => ({...sensor, closedAt: sensor.open ? undefined : Date.now()})),
    ]);
    previous.current = new Map(sensors.map(sensor => [sensor.id, sensor.open]));
  }, [triggered, panic, signature]);
  useEffect(() => {
    const closed = toasts.filter(toast => toast.closedAt);
    if (!closed.length) return;
    const next = Math.min(...closed.map(toast => toast.closedAt! + 1800));
    const timer = window.setTimeout(() => setToasts(old => old.filter(toast => !toast.closedAt || toast.closedAt + 1800 > Date.now())), Math.max(0, next - Date.now()));
    return () => window.clearTimeout(timer);
  }, [toasts]);
  useEffect(() => {
    const dock = element.current, consoleElement = dock?.parentElement;
    const core = consoleElement?.querySelector('.console-emblem-viewport');
    if (!dock || !consoleElement || !core) return;
    const measure = () => {
      const bounds = core.getBoundingClientRect();
      dock.style.setProperty('--notice-core-y', `${bounds.top + bounds.height / 2 - consoleElement.getBoundingClientRect().top}px`);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(consoleElement); observer.observe(core); measure();
    return () => observer.disconnect();
  }, [panic, triggered]);

  if (!panic && !triggered) return null;
  return <aside ref={element} className={`security-notice ${panic ? 'is-sos' : 'is-intrusion'}`} aria-label="Avisos de seguridad">
    {!panic && <div className="security-sensor-toasts" aria-live="polite">
      {toasts.map(toast => <button type="button" key={toast.id} className={`security-sensor-toast ${toast.open ? 'is-open' : 'is-closed'}`} aria-label={`Zona ${toast.zoneNumber}, ${toast.name}, ${toast.open ? 'Abierto' : 'Cerrado'}`} onClick={() => setToasts(old => old.filter(item => item.id !== toast.id))}>
        <strong>Zona {toast.zoneNumber} · {toast.zoneName}</strong>
        <span>{toast.name}</span><b>{toast.open ? 'Abierto' : 'Cerrado'}</b>
      </button>)}
    </div>}
    {!panic && <button type="button" className="security-emergency-open" onClick={() => { setCallMounted(true); setCallOpen(true); }}>¿Necesitas llamar a emergencias?</button>}
    {(panic || callMounted) && <div className={`security-call-shell ${callOpen ? 'is-open' : 'is-collapsed'}`}>
      <div className="security-call-motion" onTransitionEnd={event => { if (event.target === event.currentTarget && event.propertyName === 'transform' && !panic && !callOpen) setCallMounted(false); }}>
        <button type="button" className="security-notice-toggle" aria-expanded={callOpen} aria-label={callOpen ? 'Ocultar llamada de emergencia' : 'Abrir llamada de emergencia'}
          onClick={() => { if (!dragged.current) setCallOpen(value => !value); dragged.current = false; }}
          onPointerDown={event => { swipe.current = event.clientX; dragged.current = false; event.currentTarget.setPointerCapture(event.pointerId); }}
          onPointerCancel={() => { swipe.current = null; }}
          onPointerUp={event => { if (swipe.current !== null && Math.abs(event.clientX - swipe.current) > 24) { dragged.current = true; setCallOpen(event.clientX < swipe.current); } swipe.current = null; }}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d={callOpen ? 'm9 5 7 7-7 7' : 'm15 5-7 7 7 7'} /></svg>
        </button>
        <div className="security-notice-card" aria-hidden={!callOpen} inert={!callOpen} role="dialog" aria-label="Llamar a emergencias">
          <strong>{panic ? 'SOS activado' : 'Llamada de emergencia'}</strong>
          <span>¿Llamar al número local de emergencias ({emergencyNumber})?</span>
          <div className="security-notice-actions">
            <a href={`tel:${emergencyNumber}`} onClick={() => setCallOpen(false)}>{callLabel}</a>
            <button type="button" onClick={() => setCallOpen(false)}>{cancelLabel}</button>
          </div>
        </div>
      </div>
    </div>}
  </aside>;
}
