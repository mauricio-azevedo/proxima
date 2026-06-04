import { Button, Input, Label, TextField } from '@heroui/react';

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
      <form className="auth-form" onSubmit={submit}>
        <h1>Cadastro</h1>

        <TextField isRequired name="name">
          <Label>Nome</Label>
          <Input fullWidth autoComplete="name" value={name.value} onChange={name.onChange} />
        </TextField>

        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input fullWidth type="email" autoComplete="email" value={email.value} onChange={email.onChange} />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label>Senha</Label>
          <Input
            fullWidth
            type="password"
            autoComplete="new-password"
            value={password.value}
            onChange={password.onChange}
          />
        </TextField>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          isDisabled={!name.value.trim() || !email.value.trim() || !password.value.trim()}
        >
          Criar conta
        </Button>

        <Button type="button" variant="tertiary" fullWidth onPress={onLoginRequested}>
          Entrar
        </Button>
      </form>
    </main>
  );
}
