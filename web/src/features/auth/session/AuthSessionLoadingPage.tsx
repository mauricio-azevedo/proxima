import { Card, Typography } from '@heroui/react';

import { ThemeToggleButton } from '../../../shared/theme/components/ThemeToggleButton';

export function AuthSessionLoadingPage() {
  return (
    <main className="auth-screen">
      <div className="auth-shell">
        <div className="auth-theme-switch">
          <ThemeToggleButton />
        </div>

        <Card className="auth-card">
          <Card.Content className="auth-loading-content">
            <Typography.Heading level={1}>Carregando sessão</Typography.Heading>
            <Typography.Paragraph color="muted">Verificando suas credenciais...</Typography.Paragraph>
          </Card.Content>
        </Card>
      </div>
    </main>
  );
}
