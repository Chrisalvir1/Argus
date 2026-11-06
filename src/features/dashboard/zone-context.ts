export type ContextEntity = {
  state: string;
  attributes?: Record<string, unknown>;
};

export function sensorAvailability(entity?: ContextEntity) {
  const state = entity?.state?.toLowerCase();
  if (['unavailable', 'offline', 'disconnected', 'desconectado'].includes(state || '') ||
      ['available', 'online', 'connected', 'is_online'].some(key => entity?.attributes?.[key] === false)) return 'offline';
  return !state || state === 'unknown' ? 'unknown' : 'available';
}

export function zoneReadiness(
  ids: string[],
  readEntity: (id: string) => ContextEntity | undefined,
  isActive: (entity: ContextEntity) => boolean,
  required?: ReadonlySet<string>,
  confirmedBlockers?: ReadonlySet<string>,
) {
  const relevant = required ? ids.filter(id => required.has(id)) : ids;
  if (!relevant.length) return required ? 'notApplicable' : 'unknown';
  if (confirmedBlockers && relevant.some(id => confirmedBlockers.has(id))) return 'pending';
  const entities = relevant.map(readEntity);
  if (!confirmedBlockers && entities.some(entity => entity && sensorAvailability(entity) === 'available' && isActive(entity))) return 'pending';
  if (entities.some(entity => sensorAvailability(entity) !== 'available' || entity?.attributes?.device_class === 'timestamp')) return 'unknown';
  return 'ready';
}

export function formatContextTimestamp(value: string, language: string, timeZone?: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat(language, { dateStyle: 'medium', timeStyle: 'short', timeZone }).format(date);
}
