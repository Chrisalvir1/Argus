import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

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
