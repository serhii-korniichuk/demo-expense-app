import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

export const Input = styled.input`
  margin: 0;
  width: 100%;
  padding: 6.5px 0;
  color: var(--color-faded);
  background-color: inherit;
  font-size: 16px;
  border: none;
  border-bottom: var(--color-txt) 1px solid;
  &:focus {
    outline: none;
  }
`;

export const InputIconBtn = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  width: 24px;
  height: 24px;
  font-size: 24px;
  color: var(--color-txt);
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: var(--color-accent);
  }
`;
