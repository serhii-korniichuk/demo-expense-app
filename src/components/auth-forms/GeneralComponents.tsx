import { useState } from 'react';
import styled from 'styled-components';
import getSharedFontStyles from '../../sharedFont';

export const FormTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #f1f2f1;
  margin: 72px 0 48px 0;
`;

export const InputLabel = styled.label`
  color: white;
`;

export const StyledInput = styled.input`
  background: #1d283a;
  border: none;
  padding: 0.25rem 0rem;
  width: 328px;
  height: 30px;
  ${getSharedFontStyles(16)}
  line-height: 20px;
  color: #fff;

  -webkit-text-security: star;

  border-bottom: 1px solid #fff;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: #fff;
    opacity: 0.7;
  }

  &:-webkit-autofill:focus {
    ${getSharedFontStyles(16)}
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    font-size: 16px;
    box-shadow: 0 0 0 30px #1d283a inset !important;
    -webkit-text-fill-color: white;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const InputBlock = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background: #539713;
  width: 330px;
  height: 44px;
  ${getSharedFontStyles(16, 600)}
  border: none;
  margin-top: 24px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  color: #fff;
  transition: 0.3s background ease;

  &:hover {
    background: #64a12a;
  }
`;

const StyledIcon = styled.svg`
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
`;

const EyeIcon = ({
  onClick,
  readable,
}: {
  onClick: () => void;
  readable: boolean;
}): JSX.Element => {
  return (
    <StyledIcon
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M17.94 18.44C16.2306 19.743 14.1491 20.4649 12 20.5C5 20.5 1 12.5 1 12.5C2.24389 10.1819 3.96914 8.15663 6.06 6.56003M9.9 4.74002C10.5883 4.5789 11.2931 4.49836 12 4.50003C19 4.50003 23 12.5 23 12.5C22.393 13.6356 21.6691 14.7048 20.84 15.69M14.12 14.62C13.8454 14.9148 13.5141 15.1512 13.1462 15.3151C12.7782 15.4791 12.3809 15.5673 11.9781 15.5744C11.5753 15.5815 11.1752 15.5074 10.8016 15.3565C10.4281 15.2056 10.0887 14.9811 9.80385 14.6962C9.51897 14.4113 9.29439 14.072 9.14351 13.6984C8.99262 13.3249 8.91853 12.9247 8.92563 12.5219C8.93274 12.1191 9.02091 11.7219 9.18488 11.3539C9.34884 10.9859 9.58525 10.6547 9.88 10.38"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {!readable ? (
        <path
          d="M1 1.5L23 23.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : null}
    </StyledIcon>
  );
};

type InputType = 'email' | 'password' | 'text';

interface InputProps {
  label: string;
  placeholder: string;
  type?: InputType;
  value: string;
  autoComplete?: string;
  onChange: (newValue: string) => void;
}

export const Input = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  autoComplete,
}: InputProps): JSX.Element => {
  const [inputType, setInputType] = useState(type);
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputBlock>
        <StyledInput
          autoComplete={autoComplete}
          placeholder={placeholder}
          type={inputType}
          value={value}
          onChange={({ target }): void => onChange(target.value)}
        />
        {type === 'password' ? (
          <EyeIcon
            readable={inputType === 'text'}
            onClick={(): void =>
              setInputType(
                (lastType): InputType =>
                  lastType === 'password' ? 'text' : 'password',
              )
            }
          />
        ) : null}
      </InputBlock>
    </InputWrapper>
  );
};

export const Footer = styled.div`
  margin-top: 24px;
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    margin-left: 3px;
  }
`;

export const FooterText = styled.span`
  ${getSharedFontStyles()}
  color: white;
`;

export const FooterLink = styled(FooterText)`
  color: #7faaf0;
  cursor: pointer;
`;

export const AuthForm = styled.form`
  margin: 0 48px;
  width: 340px;
`;

export const ErrorMessage = styled.h4`
  margin: 16px 0;
  text-align: center;
  ${getSharedFontStyles(16)}
  color: #ee4444;
`;
