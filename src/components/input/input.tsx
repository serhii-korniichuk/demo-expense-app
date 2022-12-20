import { ChangeEvent, ReactNode } from 'react';
import styled from 'styled-components';

import { Text } from '../text';

export type InputProps = {
  label?: string;
  value?: string;
  endAdornment?: ReactNode;
  type?: string;
  placeholder?: string;
  error?: boolean | undefined;
  helperText?: string;
  onChange?: (e: ChangeEvent<unknown>) => void;
  id?: string;
};

export const Input = ({
  placeholder,
  label,
  endAdornment,
  type,
  onChange,
  value,
  id,
  error,
  helperText,
  ...props
}: InputProps) => {
  return (
    <InputRoot>
      {label && <Text>{label}</Text>}

      <InputField placeholder={placeholder} type={type} onChange={onChange} value={value} id={id} {...props} />

      <EndAdornment>
        {error && <Error>{helperText}</Error>}
        {endAdornment && endAdornment}
      </EndAdornment>
    </InputRoot>
  );
};

const InputRoot = styled.label`
  position: relative;
`;

const InputField = styled.input`
  width: 100%;
  background: inherit;

  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: 400;
  line-height: 155%;

  padding: 6.5px 0;
  box-sizing: border-box;

  outline: none;
  border: none;

  border-bottom: 1px solid #ffffff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    font-weight: 400;
  }
`;

const EndAdornment = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(0%, -50%);
  user-select: none;
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #ff9090;
`;
