import { Card } from '@heroui/react';

import { LanguageMenuButton } from '../../../shared/i18n/components/LanguageMenuButton';
import { ThemeToggleButton } from '../../../shared/theme/components/ThemeToggleButton';

export function AuthSessionLoadingPage() {
  return (
    <main className="auth-screen">
      <div className="auth-shell">
        <div className="auth-theme-switch">
          <LanguageMenuButton />
          <ThemeToggleButton />
        </div>

        <Card className="auth-card">
          <Card.Content className="grid justify-items-center py-10">
            <div className="size-8 animate-spin rounded-full border-2 border-current border-t-transparent" aria-label="Loading" role="status" />
          </Card.Content>
        </Card>
      </div>
    </main>
  );
}
