import type { SupportedLocale } from '../types/supported-locale';

export function isSupportedLocale(value: string | null): value is SupportedLocale {
  return value === 'en-US' || value === 'pt-BR';
}
