import styled from "styled-components";
import { Button } from "../../components/Button/Button.styled";

export const HomeContent = styled.div`
  margin: 109px 0 0;
  text-align: center;
`;

export const HeadingBlock = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

export const Decor = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(55%, -60%);
`;

export const Paragraph = styled.p`
  margin: var(--min-gap) 0 0;
  font-weight: 600;
  font-size: 16px;
`;

export const WelcomeImg = styled.img`
  display: block;
  margin: calc(var(--mid-gap) * 2) auto 0;
`;

export const LogOutBtn = styled(Button)`
  margin: var(--big-gap) 0 0;
`;
