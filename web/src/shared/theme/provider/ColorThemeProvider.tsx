import { useEffect, useMemo, useState, type ReactNode } from 'react';

import { ColorThemeContext } from '../context/color-theme-context';
import { applyColorTheme } from '../helpers/apply-color-theme';
import { getStoredColorTheme } from '../helpers/get-stored-color-theme';
import { storeColorTheme } from '../helpers/store-color-theme';
import type { ColorTheme } from '../types/color-theme';

interface ColorThemeProviderProps {
  children: ReactNode;
}

export function ColorThemeProvider({ children }: ColorThemeProviderProps) {
  const [theme, setThemeState] = useState<ColorTheme>(getStoredColorTheme);

  useEffect(() => {
    applyColorTheme(theme);
    storeColorTheme(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: setThemeState,
    }),
    [theme],
  );

  return <ColorThemeContext value={value}>{children}</ColorThemeContext>;
}
