import { Moon, Sun } from '@gravity-ui/icons';
import { Button } from '@heroui/react';

import { useColorTheme } from '../hooks/use-color-theme';

export function ThemeToggleButton() {
  const { theme, setTheme } = useColorTheme();
  const isDarkTheme = theme === 'dark';
  const nextTheme = isDarkTheme ? 'light' : 'dark';
  const label = isDarkTheme ? 'Ativar tema claro' : 'Ativar tema escuro';
  const Icon = isDarkTheme ? Sun : Moon;

  function toggleTheme() {
    setTheme(nextTheme);
  }

  return (
    <Button type="button" variant="tertiary" size="sm" isIconOnly aria-label={label} onPress={toggleTheme}>
      <Icon />
    </Button>
  );
}
