import styled from "@emotion/styled";
import theme from "../../layout/theme";

export const HomeImage = styled.img`
  margin-top: 72px;
`;

export const DecorImage = styled.img`
  position: absolute;
  right: -25%;
  top: -125%;
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 80px;
    right: -20%;
    top: -60%;
  }
`;
