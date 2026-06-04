import { Envelope } from '@gravity-ui/icons';
import { Button, Card, Form, Link, Typography } from '@heroui/react';

import type { UserSession } from '../../../app/types/user-session';
import { AuthPasswordInput } from '../components/AuthPasswordInput';
import { AuthTextInput } from '../components/AuthTextInput';
import { defaultUserSession } from '../constants/default-user-session';
import { useAuthFormField } from '../hooks/use-auth-form-field';

interface LoginPageProps {
  onLoggedIn: (user: UserSession) => void;
  onRegisterRequested: () => void;
}

export function LoginPage({ onLoggedIn, onRegisterRequested }: LoginPageProps) {
  const email = useAuthFormField('');
  const password = useAuthFormField('');

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onLoggedIn({
      name: defaultUserSession.name,
      email: email.value.trim() || defaultUserSession.email,
    });
  }

  return (
    <main className="auth-screen">
      <Card className="auth-card">
        <Form aria-label="Login" className="auth-form" onSubmit={submit}>
          <Card.Header>
            <Typography.Heading level={1}>Login</Typography.Heading>
          </Card.Header>

          <Card.Content className="auth-fields">
            <AuthTextInput
              autoComplete="email"
              icon={Envelope}
              label="Email"
              name="email"
              type="email"
              value={email.value}
              onChange={email.onChange}
            />
            <AuthPasswordInput autoComplete="current-password" value={password.value} onChange={password.onChange} />
          </Card.Content>

          <Card.Footer className="auth-actions">
            <Button type="submit" variant="primary" fullWidth isDisabled={!email.value.trim() || !password.value.trim()}>
              Entrar
            </Button>

            <Typography.Paragraph size="sm" color="muted">
              Não tem conta? <Link onPress={onRegisterRequested}>Criar conta</Link>
            </Typography.Paragraph>
          </Card.Footer>
        </Form>
      </Card>
    </main>
  );
}
