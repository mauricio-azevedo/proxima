import { Envelope } from '@gravity-ui/icons';
import { Button, Card, Form, Link, Typography } from '@heroui/react';

import { LanguageMenuButton } from '../../../shared/i18n/components/LanguageMenuButton';
import { useLocale } from '../../../shared/i18n/hooks/use-locale';
import { ThemeToggleButton } from '../../../shared/theme/components/ThemeToggleButton';
import { AuthPasswordInput } from '../components/AuthPasswordInput';
import { AuthTextInput } from '../components/AuthTextInput';
import { useAuthFormField } from '../hooks/use-auth-form-field';
import type { LoginRequest } from '../types/login-request';

interface LoginPageProps {
  errorMessage: string | null;
  isSubmitting: boolean;
  onLoginRequested: (payload: LoginRequest) => void;
  onRegisterRequested: () => void;
}

export function LoginPage({ errorMessage, isSubmitting, onLoginRequested, onRegisterRequested }: LoginPageProps) {
  const { t } = useLocale();
  const email = useAuthFormField('');
  const password = useAuthFormField('');
  const isSubmitDisabled = isSubmitting || !email.value.trim() || !password.value.trim();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onLoginRequested({
      email: email.value.trim(),
      password: password.value,
    });
  }

  return (
    <main className="auth-screen">
      <div className="auth-shell">
        <div className="auth-theme-switch">
          <LanguageMenuButton />
          <ThemeToggleButton />
        </div>

        <Card className="auth-card">
          <Form aria-label={t('auth.login')} className="auth-form" onSubmit={submit}>
            <Card.Header>
              <Typography.Heading level={1}>{t('auth.login')}</Typography.Heading>
            </Card.Header>

            <Card.Content className="auth-fields">
              <AuthTextInput
                autoComplete="email"
                icon={Envelope}
                label={t('auth.email')}
                name="email"
                type="email"
                value={email.value}
                onChange={email.onChange}
              />
              <AuthPasswordInput autoComplete="current-password" value={password.value} onChange={password.onChange} />

              {errorMessage ? (
                <Typography.Paragraph size="sm" className="text-danger">
                  {errorMessage}
                </Typography.Paragraph>
              ) : null}
            </Card.Content>

            <Card.Footer className="auth-actions">
              <Button type="submit" variant="primary" fullWidth isDisabled={isSubmitDisabled}>
                {isSubmitting ? t('auth.login.loading') : t('auth.login.action')}
              </Button>

              <Typography.Paragraph size="sm" color="muted">
                {t('auth.switchToRegister')} <Link onPress={onRegisterRequested}>{t('auth.switchToRegister.action')}</Link>
              </Typography.Paragraph>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    </main>
  );
}
