import { Button, Input, Label, TextField } from '@heroui/react';

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
      <form className="auth-form" onSubmit={submit}>
        <h1>Login</h1>

        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input fullWidth type="email" autoComplete="email" value={email.value} onChange={email.onChange} />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label>Senha</Label>
          <Input
            fullWidth
            type="password"
            autoComplete="current-password"
            value={password.value}
            onChange={password.onChange}
          />
        </TextField>

        <Button type="submit" variant="primary" fullWidth isDisabled={!email.value.trim() || !password.value.trim()}>
          Entrar
        </Button>

        <Button type="button" variant="tertiary" fullWidth onPress={onRegisterRequested}>
          Criar conta
        </Button>
      </form>
    </main>
  );
}
