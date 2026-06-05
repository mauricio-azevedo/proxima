import { Button, Dropdown, Label, Typography } from '@heroui/react';

import { useLocale } from '../hooks/use-locale';
import type { SupportedLocale } from '../types/supported-locale';
import { Globe } from '@gravity-ui/icons';

const localeOptions: SupportedLocale[] = ['en-US', 'pt-BR'];

export function LanguageMenuButton() {
  const { locale, setLocale, t } = useLocale();

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button
          type="button"
          variant="tertiary"
          size="sm"
          isIconOnly
          aria-label={t('language.toggle')}
        >
          <Globe />
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
              <Dropdown.Item
                key={localeOption}
                id={localeOption}
                textValue={getLocaleLabel(localeOption, t)}
                onClick={() => setLocale(localeOption)}
              >
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

function SelectedLocaleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-3.5 shrink-0 text-muted"
      fill="none"
    >
      <path
        d="m4.5 10.4 3.2 3.1 7.8-7.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
