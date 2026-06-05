import { useState } from 'react';

import { Envelope, Person } from '@gravity-ui/icons';
import { Button, Card, Form, Link, Typography } from '@heroui/react';

import { ThemeToggleButton } from '../../../shared/theme/components/ThemeToggleButton';
import { AuthPasswordInput } from '../components/AuthPasswordInput';
import { AuthTextInput } from '../components/AuthTextInput';
import { useAuthFormField } from '../hooks/use-auth-form-field';
import type { RegisterRequest } from '../types/register-request';

interface RegisterPageProps {
  onRegisterRequested: (payload: RegisterRequest) => Promise<void>;
  onLoginRequested: () => void;
}

export function RegisterPage({ onRegisterRequested, onLoginRequested }: RegisterPageProps) {
  const firstName = useAuthFormField('');
  const lastName = useAuthFormField('');
  const nickname = useAuthFormField('');
  const email = useAuthFormField('');
  const password = useAuthFormField('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmitDisabled =
    isSubmitting ||
    !firstName.value.trim() ||
    !lastName.value.trim() ||
    !nickname.value.trim() ||
    !email.value.trim() ||
    password.value.length < 6;

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      await onRegisterRequested({
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        nickname: nickname.value.trim(),
        email: email.value.trim(),
        password: password.value,
      });
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="auth-screen">
      <div className="auth-shell">
        <div className="auth-theme-switch">
          <ThemeToggleButton />
        </div>

        <Card className="auth-card">
          <Form aria-label="Cadastro" className="auth-form" onSubmit={submit}>
            <Card.Header>
              <Typography.Heading level={1}>Cadastro</Typography.Heading>
            </Card.Header>

            <Card.Content className="auth-fields">
              <AuthTextInput
                autoComplete="given-name"
                icon={Person}
                label="Nome"
                name="firstName"
                value={firstName.value}
                onChange={firstName.onChange}
              />
              <AuthTextInput
                autoComplete="family-name"
                icon={Person}
                label="Sobrenome"
                name="lastName"
                value={lastName.value}
                onChange={lastName.onChange}
              />
              <AuthTextInput
                autoComplete="nickname"
                icon={Person}
                label="Apelido"
                name="nickname"
                value={nickname.value}
                onChange={nickname.onChange}
              />
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

              {errorMessage ? (
                <Typography.Paragraph size="sm" className="text-danger">
                  {errorMessage}
                </Typography.Paragraph>
              ) : null}
            </Card.Content>

            <Card.Footer className="auth-actions">
              <Button type="submit" variant="primary" fullWidth isDisabled={isSubmitDisabled}>
                {isSubmitting ? 'Criando conta...' : 'Criar conta'}
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

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return 'Não foi possível criar sua conta. Tente novamente.';
}
