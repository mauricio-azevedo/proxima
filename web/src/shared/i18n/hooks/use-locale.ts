import { useContext } from 'react';

import { LocaleContext } from '../state/locale-context';
import type { MessageId } from '../messages/messages';

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used inside LocaleProvider.');
  }

  return {
    locale: context.locale,
    setLocale: context.changeLocale,
    t: (messageId: MessageId) => context.translate(messageId),
  };
}
