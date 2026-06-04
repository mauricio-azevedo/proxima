import type { ChangeEvent, ComponentType, SVGProps } from 'react';

import { InputGroup, Label, TextField } from '@heroui/react';

interface AuthTextInputProps {
  autoComplete: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function AuthTextInput({ autoComplete, icon: Icon, label, name, type = 'text', value, onChange }: AuthTextInputProps) {
  return (
    <TextField fullWidth isRequired name={name} type={type}>
      <Label>{label}</Label>
      <InputGroup fullWidth variant="secondary">
        <InputGroup.Prefix>
          <Icon />
        </InputGroup.Prefix>
        <InputGroup.Input autoComplete={autoComplete} type={type} value={value} onChange={onChange} />
      </InputGroup>
    </TextField>
  );
}
