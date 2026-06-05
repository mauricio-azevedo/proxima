import type { ColorTheme } from '../types/color-theme';

export function applyColorTheme(theme: ColorTheme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
}
