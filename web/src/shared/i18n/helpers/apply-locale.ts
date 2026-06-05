import type { SupportedLocale } from '../types/supported-locale';

export function applyLocale(locale: SupportedLocale) {
  document.documentElement.lang = locale;
}
