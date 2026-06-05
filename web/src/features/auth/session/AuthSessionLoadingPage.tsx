import { Card, Typography } from '@heroui/react';

import { LanguageMenuButton } from '../../../shared/i18n/components/LanguageMenuButton';
import { useLocale } from '../../../shared/i18n/hooks/use-locale';
import { ThemeToggleButton } from '../../../shared/theme/components/ThemeToggleButton';

export function AuthSessionLoadingPage() {
  const { t } = useLocale();

  return (
    <main className="auth-screen">
      <div className="auth-shell">
        <div className="auth-theme-switch">
          <LanguageMenuButton />
          <ThemeToggleButton />
        </div>

        <Card className="auth-card">
          <Card.Content className="grid justify-items-center gap-3 text-center">
            <div className="grid size-12 place-items-center rounded-2xl bg-muted font-bold" aria-hidden="true">
              P
            </div>
            <Typography.Heading level={1}>{t('app.loading.title')}</Typography.Heading>
            <Typography.Paragraph color="muted">{t('app.loading.description')}</Typography.Paragraph>
            <div className="h-1 w-full rounded-full bg-muted" aria-hidden="true" />
          </Card.Content>
        </Card>
      </div>
    </main>
  );
}
