import styled from "styled-components";
import { PageContainer } from "../../components/SharedBlocks/SharedBlocks";

export const AuthContainer = styled(PageContainer)`
  max-width: 424px;
  margin: 0 auto;
  color: var(--color-txt);
`;

export const BottomText = styled.p`
  margin: var(--min-gap) 0 0;
  text-align: center;
  font-size: 12px;
  color: var(--color-faded);
`;
