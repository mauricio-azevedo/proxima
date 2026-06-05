import { useState, type ChangeEvent } from 'react';

import { Eye, EyeSlash, Lock } from '@gravity-ui/icons';
import { Button, InputGroup, Label, TextField } from '@heroui/react';

import { useLocale } from '../../../shared/i18n/hooks/use-locale';

interface AuthPasswordInputProps {
  autoComplete: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function AuthPasswordInput({ autoComplete, value, onChange }: AuthPasswordInputProps) {
  const { t } = useLocale();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = isPasswordVisible ? 'text' : 'password';
  const visibilityLabel = isPasswordVisible ? t('auth.password.hide') : t('auth.password.show');
  const VisibilityIcon = isPasswordVisible ? EyeSlash : Eye;

  function togglePasswordVisibility() {
    setIsPasswordVisible((currentValue) => !currentValue);
  }

  return (
    <TextField fullWidth isRequired name="password" type={inputType}>
      <Label>{t('auth.password')}</Label>
      <InputGroup fullWidth variant="secondary">
        <InputGroup.Prefix>
          <Lock />
        </InputGroup.Prefix>
        <InputGroup.Input autoComplete={autoComplete} type={inputType} value={value} onChange={onChange} />
        <InputGroup.Suffix className="pr-0">
          <Button type="button" variant="tertiary" size="sm" isIconOnly aria-label={visibilityLabel} onPress={togglePasswordVisibility}>
            <VisibilityIcon />
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  );
}
