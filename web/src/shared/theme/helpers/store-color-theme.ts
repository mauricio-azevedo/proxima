import { colorThemeStorageKey } from '../constants/color-theme-storage-key';
import type { ColorTheme } from '../types/color-theme';

export function storeColorTheme(theme: ColorTheme) {
  localStorage.setItem(colorThemeStorageKey, theme);
}
