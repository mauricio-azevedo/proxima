import { Moon, Sun } from '@gravity-ui/icons';
import { Button } from '@heroui/react';

import { useLocale } from '../../i18n/hooks/use-locale';
import { useColorTheme } from '../hooks/use-color-theme';

export function ThemeToggleButton() {
  const { t } = useLocale();
  const { theme, setTheme } = useColorTheme();
  const isDarkTheme = theme === 'dark';
  const nextTheme = isDarkTheme ? 'light' : 'dark';
  const label = isDarkTheme ? t('theme.activateLight') : t('theme.activateDark');
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
