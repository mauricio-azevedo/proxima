import { Envelope, Person } from '@gravity-ui/icons';
import { Button, Card, Form, Link, Typography } from '@heroui/react';

import type { UserSession } from '../../../app/types/user-session';
import { ThemeSwitch } from '../../../shared/theme/components/ThemeSwitch';
import { AuthPasswordInput } from '../components/AuthPasswordInput';
import { AuthTextInput } from '../components/AuthTextInput';
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
      <div className="auth-shell">
        <div className="auth-theme-switch">
          <ThemeSwitch />
        </div>

        <Card className="auth-card">
          <Form aria-label="Cadastro" className="auth-form" onSubmit={submit}>
            <Card.Header>
              <Typography.Heading level={1}>Cadastro</Typography.Heading>
            </Card.Header>

            <Card.Content className="auth-fields">
              <AuthTextInput autoComplete="name" icon={Person} label="Nome" name="name" value={name.value} onChange={name.onChange} />
              <AuthTextInput
                autoComplete="email"
                icon={Envelope}
                label="Email"
                name="email"
                type="email"
                value={email.value}
                onChange={email.onChange}
              />
              <AuthPasswordInput autoComplete="new-password" value={password.value} onChange={password.onChange} />
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
      </div>
    </main>
  );
}
