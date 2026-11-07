"""Plain speech rules. This module formats reports; it makes no alarm decisions."""
from __future__ import annotations

STATES = {'open', 'closed', 'unavailable', 'battery_low', 'recently_closed', 'recently_opened'}
ACTIVE = {'on', 'open', 'opening', 'unlocked', 'motion', 'detected', 'active', 'triggered', 'vibration', 'recording'}
IDLE = {'off', 'closed', 'locked', 'clear', 'idle', 'standby'}


def validate_rules(value, message_keys, zone_ids):
    if not isinstance(value, dict) or set(value) - set(message_keys):
        raise ValueError('Aviso no válido')
    result = {}
    for key, rule in value.items():
        if not isinstance(rule, dict) or set(rule) - {'zone_ids', 'states'}:
            raise ValueError('Configuración de aviso no válida')
        selected, states = rule.get('zone_ids'), rule.get('states', [])
        if selected is not None and (not isinstance(selected, list) or len(selected) > 100 or any(not isinstance(z, str) or z not in zone_ids for z in selected)):
            raise ValueError('Selecciona zonas existentes')
        if not isinstance(states, list) or len(states) > len(STATES) or any(not isinstance(s, str) or s not in STATES for s in states):
            raise ValueError('Estado de aviso no válido')
        result[key] = {'zone_ids': None if selected is None else list(dict.fromkeys(selected)), 'states': list(dict.fromkeys(states))}
    return result


def build_rule_message(phrase, rule, zones, entities, *, mode='', eligible=None, closed=(), opened=(), lang='es'):
    """Count matching sensors once, using current HA states and explicit transitions."""
    selected = rule.get('zone_ids')
    filters = set(rule.get('states', []))
    spanish = lang == 'es'
    if not filters:
        return str(phrase or '').strip()
    seen = set()
    matched_zones = set()
    descriptions = []
    for zone in zones:
        if zone.get('enabled', True) is False or (selected is not None and zone.get('id') not in selected):
            continue
        if mode and mode != 'disarmed' and mode not in zone.get('modes', []):
            continue
        for entity_id in zone.get('entity_ids', []):
            if entity_id in seen or (eligible is not None and entity_id not in eligible):
                continue
            seen.add(entity_id)
            entity = entities.get(entity_id)
            state = str(getattr(entity, 'state', 'unavailable')).lower()
            attrs = getattr(entity, 'attributes', {})
            available = state not in {'unknown', 'unavailable', 'offline'}
            security = entity_id.startswith(('binary_sensor.', 'lock.', 'cover.'))
            battery = attrs.get('battery_level', attrs.get('battery'))
            battery = battery if type(battery) in (int, float) and 0 <= battery <= 100 else None
            low = attrs.get('battery_low') is True or (battery is not None and battery <= 20)
            labels = []
            for condition, es, en in [
                ('unavailable' in filters and not available, 'sin conexión', 'unavailable'),
                ('open' in filters and available and security and state in ACTIVE, 'abierto o activo', 'open or active'),
                ('closed' in filters and available and security and state in IDLE, 'cerrado o inactivo', 'closed or idle'),
                ('recently_closed' in filters and available and security and state in IDLE and entity_id in closed, 'se acaba de cerrar', 'just closed'),
                ('recently_opened' in filters and available and security and state in ACTIVE and entity_id in opened, 'se acaba de abrir', 'just opened'),
                ('battery_low' in filters and low, 'batería baja', 'low battery'),
            ]:
                if condition:
                    labels.append(es if spanish else en)
            if not labels:
                continue
            if 'battery_low' in filters and low and battery is not None:
                labels.append(f'{battery}%')
            zone_id = zone.get('id')
            if zone_id != '__mode_sensors__':
                matched_zones.add(zone_id)
            zone_name = zone.get('area') or zone.get('number') or zone_id
            name = attrs.get('friendly_name') or entity_id
            prefix = '' if zone_id == '__mode_sensors__' else f"{'Zona' if spanish else 'Zone'} {zone_name}, "
            descriptions.append(f"{prefix}{name}: {', '.join(labels)}")
    count = len(descriptions)
    if count:
        if spanish:
            summary = f"{len(matched_zones)} {'zona' if len(matched_zones) == 1 else 'zonas'}, {count} {'sensor' if count == 1 else 'sensores'} según los estados seleccionados. "
        else:
            summary = f'{len(matched_zones)} zones, {count} sensors matching the selected states. '
        summary += '. '.join(descriptions)
    else:
        summary = 'No hay sensores que coincidan con los estados seleccionados en este aviso.' if spanish else 'No sensors match the selected states for this announcement.'
    if count and not matched_zones:
        summary = (f"{count} {'sensor' if count == 1 else 'sensores'} según los estados seleccionados. " if spanish else f'{count} sensors matching the selected states. ') + '. '.join(descriptions)
    phrase = str(phrase or '').strip()
    return (phrase.rstrip('. ') + '. ' if phrase else '') + summary
