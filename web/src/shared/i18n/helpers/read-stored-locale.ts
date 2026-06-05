import { defaultLocale } from '../constants/default-locale';
import { localePreferenceKey } from '../constants/locale-preference-key';
import { isSupportedLocale } from './is-supported-locale';

export function readStoredLocale() {
  const storedLocale = localStorage.getItem(localePreferenceKey);

  if (isSupportedLocale(storedLocale)) {
    return storedLocale;
  }

  return defaultLocale;
}
