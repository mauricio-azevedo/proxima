import { Button, Dropdown, Label, Typography } from '@heroui/react';

import { useLocale } from '../hooks/use-locale';
import type { SupportedLocale } from '../types/supported-locale';

const localeOptions: SupportedLocale[] = ['en-US', 'pt-BR'];

export function LanguageMenuButton() {
  const { locale, setLocale, t } = useLocale();

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button type="button" variant="tertiary" size="sm" isIconOnly aria-label={t('language.toggle')}>
          <LanguageIcon />
        </Button>
      </Dropdown.Trigger>

      <Dropdown.Popover className="w-56 overflow-hidden">
        <section aria-labelledby="language-menu-heading">
          <div className="px-3 pt-3 pb-1">
            <Typography.Paragraph id="language-menu-heading" size="sm" color="muted">
              {t('language.menu.header')}
            </Typography.Paragraph>
          </div>

          <Dropdown.Menu aria-label={t('language.menu.header')} className="w-full min-w-0">
            {localeOptions.map((localeOption) => (
              <Dropdown.Item key={localeOption} id={localeOption} textValue={getLocaleLabel(localeOption, t)} onClick={() => setLocale(localeOption)}>
                <div className="flex w-full min-w-0 items-center justify-between gap-2">
                  <Label>{getLocaleLabel(localeOption, t)}</Label>
                  {locale === localeOption ? <SelectedLocaleIcon /> : null}
                </div>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </section>
      </Dropdown.Popover>
    </Dropdown>
  );
}

function getLocaleLabel(locale: SupportedLocale, t: ReturnType<typeof useLocale>['t']) {
  if (locale === 'pt-BR') {
    return t('language.ptBR');
  }

  return t('language.enUS');
}

function LanguageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none">
      <path d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 10h13M10 3c1.8 1.9 2.7 4.2 2.7 7s-.9 5.1-2.7 7M10 3C8.2 4.9 7.3 7.2 7.3 10s.9 5.1 2.7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SelectedLocaleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3.5 shrink-0 text-muted" fill="none">
      <path d="m4.5 10.4 3.2 3.1 7.8-7.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
