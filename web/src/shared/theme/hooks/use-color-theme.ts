import { useContext } from 'react';

import { ColorThemeContext } from '../context/color-theme-context';

export function useColorTheme() {
  const context = useContext(ColorThemeContext);

  if (!context) {
    throw new Error('useColorTheme must be used inside ColorThemeProvider.');
  }

  return context;
}
