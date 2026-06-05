import type { ColorTheme } from '../types/color-theme';

export function isColorTheme(value: string | null): value is ColorTheme {
  return value === 'light' || value === 'dark';
}
