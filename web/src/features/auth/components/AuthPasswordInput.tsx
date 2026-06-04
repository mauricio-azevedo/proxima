import { useState, type ChangeEvent } from 'react';

import { Eye, EyeSlash, Lock } from '@gravity-ui/icons';
import { Button, InputGroup, Label, TextField } from '@heroui/react';

interface AuthPasswordInputProps {
  autoComplete: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function AuthPasswordInput({ autoComplete, value, onChange }: AuthPasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = isPasswordVisible ? 'text' : 'password';
  const visibilityLabel = isPasswordVisible ? 'Esconder senha' : 'Mostrar senha';
  const VisibilityIcon = isPasswordVisible ? EyeSlash : Eye;

  function togglePasswordVisibility() {
    setIsPasswordVisible((currentValue) => !currentValue);
  }

  return (
    <TextField fullWidth isRequired name="password" type={inputType}>
      <Label>Senha</Label>
      <InputGroup fullWidth variant="secondary">
        <InputGroup.Prefix>
          <Lock />
        </InputGroup.Prefix>
        <InputGroup.Input autoComplete={autoComplete} type={inputType} value={value} onChange={onChange} />
        <InputGroup.Suffix>
          <Button type="button" variant="tertiary" size="sm" isIconOnly aria-label={visibilityLabel} onPress={togglePasswordVisibility}>
            <VisibilityIcon />
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  );
}
