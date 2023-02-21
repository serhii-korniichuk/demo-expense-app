import styled from "styled-components";
import { Button } from "../Button/Button.styled";
import { Heading } from "../SharedBlocks/SharedBlocks";

export const Form = styled.form`
  width: 100%;
  margin: calc(var(--mid-gap) * 2) auto 0;
`;

export const Caption = styled(Heading)`
  font-size: 56px;
  letter-spacing: 0.03em;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-top: var(--min-gap);
  font-size: 14px;
  &:first-child {
    margin-top: var(--big-gap);
  }
`;

export const FormButton = styled(Button)`
  width: 100%;
`;

export const Warning = styled.span`
  color: var(--color-warn);
`;
