export type ClockFormat = 'auto' | '12h' | '24h';
export function clockFormat(ui: {clock_format?: unknown; personalization?: {clock_format?: unknown}} | undefined, dashboard?: {clock_format?: unknown}): ClockFormat {
  const value = ui?.clock_format ?? ui?.personalization?.clock_format ?? dashboard?.clock_format ?? 'auto';
  return value === '12h' || value === '24h' ? value : 'auto';
}
export function clockTime(value: Date | string | number, format: ClockFormat, haFormat = ''): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const twelve = format === '12h' || (format === 'auto' && /12|am/i.test(haFormat));
  return twelve ? `${hours % 12 || 12}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}` : `${String(hours).padStart(2, '0')}:${minutes}`;
}
