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
          <Card.Content className="auth-loading-content">
            <div className="auth-loading-mark" aria-hidden="true">
              P
            </div>
            <Typography.Heading level={1}>{t('app.loading.title')}</Typography.Heading>
            <Typography.Paragraph color="muted">{t('app.loading.description')}</Typography.Paragraph>
            <div className="auth-loading-bar" aria-hidden="true" />
          </Card.Content>
        </Card>
      </div>
    </main>
  );
}
