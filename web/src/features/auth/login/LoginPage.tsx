import { useState } from 'react';

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
  onLoginRequested: (payload: LoginRequest) => Promise<void>;
  onRegisterRequested: () => void;
}

export function LoginPage({ onLoginRequested, onRegisterRequested }: LoginPageProps) {
  const { t } = useLocale();
  const email = useAuthFormField('');
  const password = useAuthFormField('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmitDisabled = isSubmitting || !email.value.trim() || !password.value.trim();

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      await onLoginRequested({
        email: email.value.trim(),
        password: password.value,
      });
    } catch (error) {
      setErrorMessage(readErrorMessage(error, t('auth.login.errorFallback')));
    } finally {
      setIsSubmitting(false);
    }
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

function readErrorMessage(error: unknown, fallbackMessage: string) {
  if (error instanceof Error) {
    return error.message;
  }

  return fallbackMessage;
}
