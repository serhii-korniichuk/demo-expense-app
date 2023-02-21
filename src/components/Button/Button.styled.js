import styled from "styled-components";

export const Button = styled.button`
  margin-top: var(--mid-gap);
  padding: 9.5px 16px;
  color: var(--color-txt);
  background-color: var(--color-accent);
  font-weight: 600;
  font-size: 16px;
  border: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  &:active {
    color: var(--color-accent);
    background-color: var(--color-highlight);
    box-shadow: none;
  }
`;
