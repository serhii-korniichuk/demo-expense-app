import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: var(--big-gap);
  color: var(--color-txt);
  background-color: var(--color-bg);
`;

export const Heading = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  text-transform: uppercase;
`;

export const Svg = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export const TextLink = styled.a`
  color: var(--color-link);
  font-style: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: var(--color-highlight);
  }
`;
