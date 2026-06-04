import { Button, Card, Form, Input, Label, Link, TextField, Typography } from '@heroui/react';

import type { UserSession } from '../../../app/types/user-session';
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
            <TextField fullWidth isRequired name="email" type="email">
              <Label>Email</Label>
              <Input
                fullWidth
                variant="secondary"
                type="email"
                autoComplete="email"
                value={email.value}
                onChange={email.onChange}
              />
            </TextField>

            <TextField fullWidth isRequired name="password" type="password">
              <Label>Senha</Label>
              <Input
                fullWidth
                variant="secondary"
                type="password"
                autoComplete="current-password"
                value={password.value}
                onChange={password.onChange}
              />
            </TextField>
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
