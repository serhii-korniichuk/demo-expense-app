import { useState } from 'react';
import styled from 'styled-components';

import { EyeIcon } from '../../assets/svg/eye-icon';
import { Input, InputProps } from '../input/input';

enum PasswordInput {
  Text = 'text',
  Password = 'password',
}

export const InputPassword = ({ value, placeholder, error, onChange, ...props }: InputProps) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={visiblePassword ? PasswordInput.Text : PasswordInput.Password}
      error={error}
      endAdornment={
        <ShowPassword onClick={() => setVisiblePassword(!visiblePassword)}>
          <EyeIcon />
        </ShowPassword>
      }
      {...props}
    />
  );
};

const ShowPassword = styled.div`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;
