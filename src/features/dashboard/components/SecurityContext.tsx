import { type CSSProperties, type ReactNode } from 'react';

export function SecurityContext({ title, detail, navigation, children, overviewAttention, indicators, indicatorScope, accent, view, tone = "normal", online }: {
  title: string;
  detail?: string;
  navigation?: ReactNode;
  children?: ReactNode;
  overviewAttention?: boolean;
  indicators?: { label: string; value: number | null }[];
  indicatorScope?: string;
  accent?: string;
  view?: string;
  tone?: "normal" | "warning" | "alarm";
  online?: boolean;
}) {
  return (
    <aside className="security-context" data-tone={overviewAttention ? "warning" : tone} style={accent ? { "--context-accent": accent } as CSSProperties : undefined} aria-label="Contexto de seguridad">
      <div className="context-heading"><span>Panel de control</span>{online && <span className="context-live">En vivo</span>}</div>
      <header key={title} aria-live="polite">
        <span className="context-eyebrow">Estado general</span>
        <svg className="context-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M12 3 4 6v5c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-3Z"/>
          <path d="m8.5 12 2.3 2.3 4.7-5"/>
        </svg>
        <strong>{title}</strong>
        {detail && <p>{detail}</p>}
      </header>
      {indicators && <section aria-label={`Zonas habilitadas · ${indicatorScope || "global"}`}>
        <span className="context-eyebrow">Zonas habilitadas · {indicatorScope || "global"}</span>
        <dl className="context-indicators">
        {indicators.map(({ label, value }) => <div key={label}>
          <dt>{label}</dt><dd>{value ?? <abbr title="No disponible">—</abbr>}</dd>
        </div>)}
        </dl>
      </section>}
      {view && <strong className="context-view-title">{view}</strong>}
      <div className="console-sensors">{children}</div>
      {navigation}
      <div className="context-pin-slot" />
    </aside>
  );
}
