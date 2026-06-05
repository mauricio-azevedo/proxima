import { Moon, Sun } from '@gravity-ui/icons';
import { Label, Switch } from '@heroui/react';

import { useColorTheme } from '../hooks/use-color-theme';

export function ThemeSwitch() {
  const { theme, setTheme } = useColorTheme();
  const isDarkTheme = theme === 'dark';
  const nextThemeLabel = isDarkTheme ? 'Ativar tema claro' : 'Ativar tema escuro';
  const ThemeIcon = isDarkTheme ? Moon : Sun;

  function toggleTheme(isSelected: boolean) {
    setTheme(isSelected ? 'dark' : 'light');
  }

  return (
    <Switch aria-label={nextThemeLabel} isSelected={isDarkTheme} onChange={toggleTheme}>
      <Switch.Control>
        <Switch.Thumb>
          <ThemeIcon />
        </Switch.Thumb>
      </Switch.Control>
      <Label>{isDarkTheme ? 'Escuro' : 'Claro'}</Label>
    </Switch>
  );
}
