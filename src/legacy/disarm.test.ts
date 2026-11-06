import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

let showPin: (...args: any[]) => void;
let submitPin: () => Promise<void>;
let handleAction: (index: number, action: string) => Promise<void>;

beforeAll(async () => {
  const elements = new Map<string, CustomElementConstructor>();
  vi.stubGlobal('HTMLElement', class {});
  vi.stubGlobal('document', { createElement: () => ({}) });
  vi.stubGlobal('customElements', {
    get: (name: string) => elements.get(name),
    define: (name: string, constructor: CustomElementConstructor) => elements.set(name, constructor),
  });
  await import('./argus-panel');
  const prototype = elements.get('argus-panel-v2018')!.prototype;
  handleAction = prototype._handleAction;
  submitPin = prototype._submitPin;
  showPin = prototype._showPinModal;
});

afterAll(() => vi.unstubAllGlobals());

describe('authenticated disarm in the real panel', () => {
  it('keeps the keypad open on rejection and closes after acceptance', async () => {
    const input = { value: '0000' };
    const modal = { classList: { remove: vi.fn(), add: vi.fn() } };
    const panel = {
      _pinCallback: vi.fn().mockResolvedValueOnce(false).mockResolvedValueOnce(true),
      _closePinModal: vi.fn(),
      shadowRoot: {
        getElementById: () => input,
        querySelector: () => modal,
      },
    };

    await submitPin.call(panel);
    expect(modal.classList.add).toHaveBeenCalledWith('pin-rejected');
    expect(panel._closePinModal).not.toHaveBeenCalled();

    input.value = '1111';
    await submitPin.call(panel);
    expect(panel._closePinModal).toHaveBeenCalledTimes(1);
  });

  it.each(['armed_home', 'armed_away', 'armed_night', 'triggered'])(
    'keeps %s visible until the backend accepts disarm',
    async state => {
      const entityId = 'alarm_control_panel.fixture';
      const error = { textContent: '' };
      const send = vi.fn()
        .mockRejectedValueOnce(new Error('PIN incorrecto'))
        .mockResolvedValueOnce({ state: 'disarmed' });
      const panel = {
        _dashboard: { entries: [{ entity_id: entityId, entry_id: 'fixture', pin_configured: true }] },
        _hass: { states: { [entityId]: { state } } },
        _isAdmin: true,
        _t: (key: string) => key,
        _showPinModal: vi.fn<(confirm: (pin: string) => Promise<boolean>, presentation: string) => void>(),
        _setOptimisticAlarmState: vi.fn(),
        _clearOptimisticAlarmState: vi.fn(),
        _send: send,
        _renderModeView: vi.fn(),
        _renderEntries: vi.fn(),
        dispatchEvent: vi.fn(),
        shadowRoot: { getElementById: () => error },
      };

      await handleAction.call(panel, 0, 'disarm');
      expect(send).not.toHaveBeenCalled();
      const [confirm, presentation] = panel._showPinModal.mock.calls[0];
      expect(presentation).toBe('disarm');
      const rejected = confirm('0000');
      expect(panel._setOptimisticAlarmState).not.toHaveBeenCalled();
      expect(await confirm('0000')).toBe(false);
      expect(send).toHaveBeenCalledTimes(1);
      expect(await rejected).toBe(false);
      expect(error.textContent).toContain('PIN incorrecto');
      expect(panel._setOptimisticAlarmState).not.toHaveBeenCalled();

      const accepted = confirm('1111');
      expect(panel._setOptimisticAlarmState).not.toHaveBeenCalled();
      expect(await accepted).toBe(true);
      expect(panel._setOptimisticAlarmState).toHaveBeenCalledExactlyOnceWith(entityId, 'disarmed');
    },
  );
});

it('resets the shared keypad and describes the alarm PIN without invoking profile authentication', () => {
  const input = { value: 'old value', focus: vi.fn() };
  const error = { textContent: 'old error', style: { color: '' } };
  const description = { textContent: '' };
  const box = { classList: { remove: vi.fn() }, style: {} };
  const modal = { classList: { remove: vi.fn(), add: vi.fn() }, style: { removeProperty: vi.fn() }, dataset: {},
    querySelector: () => box, setAttribute: vi.fn() };
  const shadow = { activeElement: {}, appendChild: vi.fn(),
    getElementById: (id: string) => ({ 'pin-modal': modal, 'pin-input': input, 'pin-error': error, 'l-pin-modal-desc': description }[id]),
    querySelector: () => null };
  const confirm = vi.fn();
  const panel = { shadowRoot: shadow, classList: { contains: () => false },
    _getCurrentLangCode: () => 'es', _t: () => 'Ingresa tu PIN de seguridad para continuar.' };
  showPin.call(panel, confirm, 'disarm');
  expect(input.value).toBe('');
  expect(error.textContent).toBe('');
  expect(description.textContent).toBe('Introduce el PIN de armado para desarmar el sistema.');
  expect((panel as any)._pinCallback).toBe(confirm);
  expect(confirm).not.toHaveBeenCalled();
  expect(input.focus).toHaveBeenCalledWith({ preventScroll: true });
});
