import { Button, Card, Form, Input, Label, Link, TextField, Typography } from '@heroui/react';

import type { UserSession } from '../../../app/types/user-session';
import { defaultUserSession } from '../constants/default-user-session';
import { useAuthFormField } from '../hooks/use-auth-form-field';

interface RegisterPageProps {
  onRegistered: (user: UserSession) => void;
  onLoginRequested: () => void;
}

export function RegisterPage({ onRegistered, onLoginRequested }: RegisterPageProps) {
  const name = useAuthFormField('');
  const email = useAuthFormField('');
  const password = useAuthFormField('');

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onRegistered({
      name: name.value.trim() || defaultUserSession.name,
      email: email.value.trim() || defaultUserSession.email,
    });
  }

  return (
    <main className="auth-screen">
      <Card className="auth-card">
        <Form aria-label="Cadastro" className="auth-form" onSubmit={submit}>
          <Card.Header>
            <Typography.Heading level={1}>Cadastro</Typography.Heading>
          </Card.Header>

          <Card.Content className="auth-fields">
            <TextField fullWidth isRequired name="name">
              <Label>Nome</Label>
              <Input fullWidth variant="secondary" autoComplete="name" value={name.value} onChange={name.onChange} />
            </TextField>

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
                autoComplete="new-password"
                value={password.value}
                onChange={password.onChange}
              />
            </TextField>
          </Card.Content>

          <Card.Footer className="auth-actions">
            <Button
              type="submit"
              variant="primary"
              fullWidth
              isDisabled={!name.value.trim() || !email.value.trim() || !password.value.trim()}
            >
              Criar conta
            </Button>

            <Typography.Paragraph size="sm" color="muted">
              Já tem conta? <Link onPress={onLoginRequested}>Entrar</Link>
            </Typography.Paragraph>
          </Card.Footer>
        </Form>
      </Card>
    </main>
  );
}
