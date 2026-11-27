export type HistoryLogo = { bytes: Uint8Array; width: number; height: number };
type HistoryRow = { ts: string; action: string; user: string; detail: string };
type HistoryMetadata = {
  labels: Record<string, string>;
  logo: HistoryLogo | null;
  homeName: string;
  rangeFrom: string;
  rangeTo: string;
  generatedAt: string;
};

export async function loadHistoryLogo(): Promise<HistoryLogo | null> {
  try {
    const response = await fetch(new URL('/api/argus_static/argus_logo.png', window.location.origin), { credentials: 'same-origin' });
    if (!response.ok) return null;
    const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);
    const bitmap = new Image();
    const loaded = new Promise<void>((resolve, reject) => {
      bitmap.onload = () => resolve();
      bitmap.onerror = () => reject(new Error('Argus logo image could not be decoded'));
    });
    try {
      bitmap.src = imageUrl;
      if (typeof bitmap.decode === 'function') await bitmap.decode();
      else await loaded;
    } finally {
      URL.revokeObjectURL(imageUrl);
    }
    const size = 384;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    if (!context) return null;
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    // Match PDF header dark blue background
    context.fillStyle = '#0d1426';
    context.fillRect(0, 0, size, size);
    const scale = Math.min(size / bitmap.naturalWidth, size / bitmap.naturalHeight);
    const width = bitmap.naturalWidth * scale;
    const height = bitmap.naturalHeight * scale;
    context.drawImage(bitmap, (size - width) / 2, (size - height) / 2, width, height);
    const jpeg = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.95));
    return jpeg ? { bytes: new Uint8Array(await jpeg.arrayBuffer()), width: size, height: size } : null;
  } catch (error) {
    console.warn('Argus PDF logo could not be loaded:', error);
    return null;
  }
}

export function generateHistoryPDF(
  events: HistoryRow[],
  metadata: HistoryMetadata,
  formatPage: (current: number, total: number) => string,
): Uint8Array {
  const labels = metadata.labels;
  const PAGE_WIDTH = 612;
  const PAGE_HEIGHT = 792;
  const MARGIN_LEFT = 36;
  const MARGIN_BOTTOM = 42;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT * 2;
  const itemsPerPage = 22;
  const pagesCount = Math.max(1, Math.ceil(events.length / itemsPerPage));
  const logo = metadata.logo;
  const logoObjectId = logo?.bytes?.length ? 5 : null;
  const firstPageObjectId = logoObjectId ? 6 : 5;
  const pageObjIds = Array.from({ length: pagesCount }, (_, index) => firstPageObjectId + index * 2);

  // Standard PDF fonts use WinAnsiEncoding. Keep Latin characters (including
  // Spanish accents) as single bytes so stream lengths and xref offsets agree.
  const toPdfText = (value: unknown) => Array.from(String(value ?? '-').normalize('NFC')).map(char => {
    const code = char.codePointAt(0) ?? 0;
    if (code >= 32 && code <= 255) return char;
    const fallback = char.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
    return Array.from(fallback).map(part => (part.codePointAt(0) ?? 0) <= 255 ? part : '?').join('') || ' ';
  }).join('').replace(/[\\()]/g, '\\$&').replace(/[\r\n\t]/g, ' ');
  const text = (font: string, size: number, color: string, x: number, y: number, value: unknown) => `BT /${font} ${size} Tf ${color} rg ${x} ${y} Td (${toPdfText(value)}) Tj ET\n`;
  const pages = [];

  const logoSize = 46;
  const textX = logoObjectId ? MARGIN_LEFT + logoSize + 12 : MARGIN_LEFT;

  for (let page = 0; page < pagesCount; page++) {
    const pageEvents = events.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
    let stream = '';
    stream += `q 0.05 0.08 0.15 rg 0 ${PAGE_HEIGHT - 72} ${PAGE_WIDTH} 72 re f Q\n`;
    if (logoObjectId) {
      const logoY = PAGE_HEIGHT - 72 + Math.round((72 - logoSize) / 2);
      stream += `q ${logoSize} 0 0 ${logoSize} ${MARGIN_LEFT} ${logoY} cm /ArgusLogo Do Q\n`;
    }
    stream += text('F2', 13, '1 1 1', textX, PAGE_HEIGHT - 31, labels.title);
    stream += text('F1', 8, '0.82 0.87 0.93', textX, PAGE_HEIGHT - 48, `${labels.home}: ${metadata.homeName}`);
    stream += text('F1', 7.5, '0.82 0.87 0.93', textX, PAGE_HEIGHT - 61, `${labels.range}: ${metadata.rangeFrom} - ${metadata.rangeTo}   |   ${labels.generated}: ${metadata.generatedAt}   |   ${labels.total}: ${events.length}`);

    const tableTop = PAGE_HEIGHT - 86;
    stream += `q 0.12 0.18 0.28 rg ${MARGIN_LEFT} ${tableTop - 18} ${CONTENT_WIDTH} 20 re f Q\n`;
    stream += text('F2', 7.5, '1 1 1', MARGIN_LEFT + 5, tableTop - 12, labels.date);
    stream += text('F2', 7.5, '1 1 1', MARGIN_LEFT + 125, tableTop - 12, labels.action);
    stream += text('F2', 7.5, '1 1 1', MARGIN_LEFT + 265, tableTop - 12, labels.user);
    stream += text('F2', 7.5, '1 1 1', MARGIN_LEFT + 390, tableTop - 12, labels.detail);

    let y = tableTop - 38;
    pageEvents.forEach((event, index) => {
      if (index % 2 === 0) stream += `q 0.96 0.97 0.98 rg ${MARGIN_LEFT} ${y - 4} ${CONTENT_WIDTH} 20 re f Q\n`;
      stream += `q 0.88 0.88 0.88 RG 0.5 w ${MARGIN_LEFT} ${y - 4} m ${MARGIN_LEFT + CONTENT_WIDTH} ${y - 4} l S Q\n`;
      stream += text('F1', 7.2, '0.15 0.15 0.15', MARGIN_LEFT + 5, y + 2, String(event.ts || '-').slice(0, 22));
      stream += text('F2', 7.2, '0.1 0.2 0.4', MARGIN_LEFT + 125, y + 2, String(event.action || '-').slice(0, 24));
      stream += text('F1', 7.2, '0.2 0.2 0.2', MARGIN_LEFT + 265, y + 2, String(event.user || 'Argus').slice(0, 21));
      stream += text('F1', 7.0, '0.3 0.3 0.3', MARGIN_LEFT + 390, y + 2, String(event.detail || '-').slice(0, 37));
      y -= 22;
    });
    if (!events.length) stream += text('F1', 9, '0.4 0.4 0.4', MARGIN_LEFT + 8, tableTop - 44, labels.empty);
    stream += `q 0.8 0.8 0.8 RG 0.5 w ${MARGIN_LEFT} ${MARGIN_BOTTOM} m ${MARGIN_LEFT + CONTENT_WIDTH} ${MARGIN_BOTTOM} l S Q\n`;
    stream += text('F1', 7, '0.5 0.5 0.5', MARGIN_LEFT, MARGIN_BOTTOM - 13, labels.footer);
    stream += text('F1', 7, '0.5 0.5 0.5', PAGE_WIDTH - MARGIN_LEFT - 80, MARGIN_BOTTOM - 13, formatPage(page + 1, pagesCount));
    pages.push(stream);
  }

  let document = '%PDF-1.4\n';
  const offsets = [0];
  const addObject = (id: number, body: string) => { offsets[id] = document.length; document += `${id} 0 obj\n${body}\nendobj\n`; };
  addObject(1, '<< /Type /Catalog /Pages 2 0 R >>');
  addObject(2, `<< /Type /Pages /Kids [${pageObjIds.map(id => `${id} 0 R`).join(' ')}] /Count ${pagesCount} /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] >>`);
  addObject(3, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  addObject(4, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
  if (logoObjectId && logo) {
    const image = Array.from(logo.bytes, byte => String.fromCharCode(byte)).join('');
    addObject(logoObjectId, `<< /Type /XObject /Subtype /Image /Width ${logo.width} /Height ${logo.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${logo.bytes.length} >>\nstream\n${image}\nendstream`);
  }
  pages.forEach((stream, index) => {
    const pageId = pageObjIds[index];
    const contentId = pageId + 1;
    const imageResource = logoObjectId ? ` /XObject << /ArgusLogo ${logoObjectId} 0 R >>` : '';
    addObject(pageId, `<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R >>${imageResource} >> /Contents ${contentId} 0 R >>`);
    addObject(contentId, `<< /Length ${stream.length} >>\nstream\n${stream}endstream`);
  });
  const xrefOffset = document.length;
  document += `xref\n0 ${offsets.length}\n0000000000 65535 f \n`;
  for (let id = 1; id < offsets.length; id++) document += `${String(offsets[id]).padStart(10, '0')} 00000 n \n`;
  document += `trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return Uint8Array.from(document, char => char.charCodeAt(0) & 0xff);
}
