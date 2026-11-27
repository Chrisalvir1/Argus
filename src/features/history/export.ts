import { generateHistoryPDF, type HistoryLogo } from './pdf';

type HistoryEvent = { ts?: string; action?: string; detail?: string; user?: string; actor?: string };
type HistoryView = {
  shadowRoot: ShadowRoot;
  _homeName?: string;
  _closeHistoryExportModal(): void;
  _formatLocalDateInput(date: Date): string;
  _getFilteredHistory(): HistoryEvent[];
  _getLocale(): string;
  _t(key: string): string;
  _format(key: string, parameters: Record<string, number>): string;
  _localizeActivityAction(action?: string): string;
  _localizeActivityDetail(action?: string, detail?: string): string;
};

export function downloadHistoryText(view: HistoryView): void {
  view._closeHistoryExportModal();
  const list = view._getFilteredHistory();
  const homeName = view._homeName || view._t('home_default');
  const nowStr = new Date().toLocaleString(view._getLocale());
  const fromValue = (view.shadowRoot.getElementById('export-history-from') as HTMLInputElement | null)?.value;
  const toValue = (view.shadowRoot.getElementById('export-history-to') as HTMLInputElement | null)?.value;
  const formatRangeDate = (value: string | undefined, fallback: string) => value ? new Date(`${value}T12:00:00`).toLocaleDateString(view._getLocale()) : fallback;
  const fromInput = formatRangeDate(fromValue, view._t('history_range_all'));
  const toInput = formatRangeDate(toValue, view._t('history_range_today'));

  let content = `================================================================================\n`;
  content += `🛡️  ${view._t('history_pdf_title').toLocaleUpperCase(view._getLocale())}\n`;
  content += `🏡  ${view._t('history_pdf_home')}: ${homeName}\n`;
  content += `📅  ${view._t('history_pdf_range')}: ${fromInput} - ${toInput}\n`;
  content += `⏰  ${view._t('history_pdf_generated')}: ${nowStr}\n`;
  content += `📊  ${view._t('history_pdf_total')}: ${list.length}\n`;
  content += `================================================================================\n\n`;

  list.forEach((ev, idx) => {
    const date = ev.ts ? new Date(ev.ts) : null;
    const ts = date && !isNaN(date.getTime()) ? date.toLocaleString(view._getLocale()) : '—';
    const action = view._localizeActivityAction(ev.action);
    const detail = view._localizeActivityDetail(ev.action, ev.detail);
    const user = ev.user || ev.actor || 'Argus';
    content += `[${String(idx + 1).padStart(3, '0')}] ${ts} | [${action}] ${detail} | 👤 ${user}\n`;
  });

  content += `\n================================================================================\n`;
  content += `${view._t('history_pdf_footer')}\n`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `argus_historial_${view._formatLocalDateInput(new Date())}.txt`;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

export async function downloadHistoryPDF(view: HistoryView, logoPromise: Promise<HistoryLogo | null>): Promise<void> {
  view._closeHistoryExportModal();
  const rawEvents = view._getFilteredHistory();
  const events = rawEvents.map(ev => {
    const rawAction = String(ev.action || '');
    const rawDetail = String(ev.detail || '');
    const action = view._localizeActivityAction(rawAction);
    const detail = view._localizeActivityDetail ? view._localizeActivityDetail(rawAction, rawDetail) : rawDetail;
    const user = String(ev.user || ev.actor || 'Argus');
    let ts = '';
    if (ev.ts) {
      try { ts = new Date(ev.ts).toLocaleString(view._getLocale()); } catch (e) { ts = String(ev.ts); }
    }
    return { ts, action, user, detail };
  });

  const homeName = view._homeName || view._t('home_default');
  const now = new Date();
  const dateStr = view._formatLocalDateInput(now);
  const timeStr = now.toTimeString().slice(0, 5).replace(':', '-');
  const generatedAt = now.toLocaleString(view._getLocale());
  const fromValue = (view.shadowRoot.getElementById('export-history-from') as HTMLInputElement | null)?.value;
  const toValue = (view.shadowRoot.getElementById('export-history-to') as HTMLInputElement | null)?.value;
  const formatDate = (value: string | undefined, fallback: string) => value ? new Date(`${value}T12:00:00`).toLocaleDateString(view._getLocale()) : fallback;
  const labels = {
    title: view._t('history_pdf_title'), home: view._t('history_pdf_home'), range: view._t('history_pdf_range'),
    generated: view._t('history_pdf_generated'), total: view._t('history_pdf_total'), date: view._t('history_pdf_date'),
    action: view._t('history_pdf_action'), user: view._t('history_pdf_user'), detail: view._t('history_pdf_detail'),
    empty: view._t('history_pdf_empty'), footer: view._t('history_pdf_footer'),
  };
  const logo = await logoPromise;
  const pdfData = generateHistoryPDF(events, {
    homeName, generatedAt, labels, logo,
    rangeFrom: formatDate(fromValue, view._t('history_range_all')),
    rangeTo: formatDate(toValue, view._t('history_range_today')),
  }, (page, pages) => view._format('history_pdf_page', {page, pages}));
  const blob = new Blob([new Uint8Array(pdfData)], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `argus_historial_${dateStr}_${timeStr}.pdf`;
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}


export function downloadForensicTimeline(events: unknown[]): void {
  const content = JSON.stringify({
    format: 'argus-forensic-timeline',
    generated_at: new Date().toISOString(),
    events,
  }, null, 2);
  const url = URL.createObjectURL(new Blob([content], { type: 'application/json' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `argus_forensic_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
