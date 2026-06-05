import { createContext } from 'react';

import type { SupportedLocale } from '../types/supported-locale';

export const LocaleContext = createContext<{
  locale: SupportedLocale;
  changeLocale: (locale: SupportedLocale) => void;
  translate: (key: string) => string;
} | null>(null);
