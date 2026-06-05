import { colorThemeStorageKey } from '../constants/color-theme-storage-key';
import { isColorTheme } from './is-color-theme';

export function getStoredColorTheme() {
  const storedTheme = localStorage.getItem(colorThemeStorageKey);

  if (isColorTheme(storedTheme)) {
    return storedTheme;
  }

  return 'light';
}
