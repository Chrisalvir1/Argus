import { describe, expect, it } from 'vitest';
import { ARGUS_LOCALES, translate, type ArgusLocale, type I18nKey } from './i18n';

describe('Argus i18n', () => {
  it('defines 12 locales', () => {
    expect(ARGUS_LOCALES).toHaveLength(12);
    expect(ARGUS_LOCALES).toContain('es');
    expect(ARGUS_LOCALES).toContain('en');
    expect(ARGUS_LOCALES).toContain('ar');
    expect(ARGUS_LOCALES).toContain('zh-Hans');
    expect(ARGUS_LOCALES).toContain('zh-Hant');
  });

  it('translates properly with placeholder replacement across all locales', () => {
    for (const locale of ARGUS_LOCALES) {
      const result = translate(locale, 'profile.active', { name: 'Admin' });
      expect(result).toContain('Admin');
      expect(result).not.toContain('{name}');
    }
  });

  it('contains non-empty translations for all core keys in all locales', () => {
    const testKeys: I18nKey[] = [
      'app.panel',
      'widget.security',
      'action.home',
      'action.away',
      'action.disarm',
      'sos.title',
      'sos.permission',
      'automation.readOnly',
      'field.background',
      'dashboard.loading',
      'dashboard.edit',
      'dashboard.done'
    ];

    for (const locale of ARGUS_LOCALES) {
      for (const key of testKeys) {
        const text = translate(locale, key);
        expect(text).toBeTruthy();
        expect(typeof text).toBe('string');
        expect(text.trim().length).toBeGreaterThan(0);
      }
    }
  });
});
