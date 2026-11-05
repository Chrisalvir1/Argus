import type { HassEntityId } from '../core/home-assistant';
import type { ArgusZone } from './types';

export class ZoneRegistry {
  private values = new Map<string, ArgusZone>();
  replace(zones: ArgusZone[] = []): void { this.values = new Map(zones.map(zone => [zone.id, this.normalize(zone)])); }
  list(): ArgusZone[] { return [...this.values.values()].map(zone => ({ ...zone, entity_ids: [...zone.entity_ids], device_ids: [...zone.device_ids] })); }
  get(id: string): ArgusZone | undefined { return this.values.get(id); }
  create(name: string): ArgusZone { const zone = this.normalize({ id: crypto.randomUUID(), name, entity_ids: [], device_ids: [], enabled: true }); this.values.set(zone.id, zone); return zone; }
  update(id: string, patch: Partial<ArgusZone>): ArgusZone { const current = this.values.get(id); if (!current) throw new Error(`Unknown zone: ${id}`); const zone = this.normalize({ ...current, ...patch, id }); this.values.set(id, zone); return zone; }
  remove(id: string): void { this.values.delete(id); }
  linkEntity(id: string, entityId: HassEntityId): ArgusZone { const zone = this.get(id); if (!zone) throw new Error(`Unknown zone: ${id}`); return this.update(id, { entity_ids: [...new Set([...zone.entity_ids, entityId])] }); }
  unlinkEntity(id: string, entityId: HassEntityId): ArgusZone { const zone = this.get(id); if (!zone) throw new Error(`Unknown zone: ${id}`); return this.update(id, { entity_ids: zone.entity_ids.filter(item => item !== entityId) }); }
  linkDevice(id: string, deviceId: string): ArgusZone { const zone = this.get(id); if (!zone) throw new Error(`Unknown zone: ${id}`); return this.update(id, { device_ids: [...new Set([...zone.device_ids, deviceId])] }); }
  unlinkDevice(id: string, deviceId: string): ArgusZone { const zone = this.get(id); if (!zone) throw new Error(`Unknown zone: ${id}`); return this.update(id, { device_ids: zone.device_ids.filter(item => item !== deviceId) }); }
  private normalize(zone: ArgusZone): ArgusZone { return { ...zone, name: zone.name.trim(), entity_ids: [...new Set(zone.entity_ids)], device_ids: [...new Set(zone.device_ids)], enabled: zone.enabled !== false }; }
}
