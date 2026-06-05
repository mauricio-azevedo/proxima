import { useEffect, useMemo, useState, type ReactNode } from 'react';

import { localePreferenceKey } from '../constants/locale-preference-key';
import { applyLocale } from '../helpers/apply-locale';
import { readStoredLocale } from '../helpers/read-stored-locale';
import { messages, type MessageId } from '../messages/messages';
import { LocaleContext } from '../state/locale-context';
import type { SupportedLocale } from '../types/supported-locale';

interface LocaleProviderProps {
  children: ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<SupportedLocale>(readStoredLocale);

  useEffect(() => {
    localStorage.setItem(localePreferenceKey, locale);
    applyLocale(locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      changeLocale: setLocale,
      translate: (messageId: string) => messages[locale][messageId as MessageId] ?? messageId,
    }),
    [locale],
  );

  return <LocaleContext value={value}>{children}</LocaleContext>;
}
