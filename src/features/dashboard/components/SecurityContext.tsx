import { type CSSProperties, type ReactNode } from 'react';

export function SecurityContext({ title, detail, navigation, selection, focused, children, overviewAttention, indicators, indicatorScope, notice, closeControl, onClose, accent, view, tone = "normal", online }: {
  title: string;
  detail?: string;
  navigation?: ReactNode;
  selection?: ReactNode;
  focused?: boolean;
  children?: ReactNode;
  overviewAttention?: boolean;
  indicators?: { label: string; value: number | null; onClick?: () => void }[];
  indicatorScope?: string;
  notice?: string;
  closeControl?: ReactNode;
  onClose?: () => void;
  accent?: string;
  view?: string;
  tone?: "normal" | "warning" | "alarm";
  online?: boolean;
}) {
  return (
    <aside className="security-context" data-context-focused={focused ? 'true' : 'false'} data-tone={overviewAttention ? "warning" : tone} style={accent ? { "--context-accent": accent } as CSSProperties : undefined} aria-label="Contexto de seguridad" onKeyDown={event => { if (focused && event.key === 'Escape') { event.stopPropagation(); onClose?.(); } }}>
      <div className="context-heading"><span>Panel de control</span><span className="context-heading-actions">{online && <span className="context-live">En vivo</span>}{focused && closeControl}</span></div>
      <header key={title} aria-live="polite">
        <span className="context-eyebrow">Estado general</span>
        <svg className="context-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M12 3 4 6v5c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-3Z"/>
          <path d="m8.5 12 2.3 2.3 4.7-5"/>
        </svg>
        <strong>{title}</strong>
        {detail && <p>{detail}</p>}
      </header>
      {indicators && <section className="context-zone-summary" aria-label="Zonas activas">
        <dl className="context-indicators">
        {indicators.map(({ label, value, onClick }) => <div key={label}>
          <dt>{onClick ? <button type="button" onClick={onClick} aria-label={`Ver ${label.toLowerCase()}`}>{label}</button> : label}</dt><dd>{value ?? <abbr title="No disponible">—</abbr>}</dd>
        </div>)}
        </dl>
      </section>}
      <div className="context-view-body">
      {notice && <p className="context-zone-notice" role="status">{notice}</p>}
      {selection}
      {!focused && view && <strong className="context-view-title">{view}</strong>}
      {!focused && <div className="console-sensors">{children}</div>}
      {!focused && navigation}
      <div className="context-pin-slot" />
      </div>
    </aside>
  );
}
