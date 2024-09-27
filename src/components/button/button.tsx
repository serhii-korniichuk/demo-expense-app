import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonRoot {...props}>{children}</ButtonRoot>;
};

const ButtonRoot = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 9.5px 16px;
  box-sizing: border-box;

  background: #539713;
  border: 0;

  outline: none;
  cursor: pointer;

  color: #fff;

  font-weight: 600;
  font-size: 16px;
  line-height: 155%;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
`;
