import styled from 'styled-components';
import getSharedFontStyles from '../sharedFont';

export default function PageTitle(): JSX.Element {
  return (
    <HeaderBlock>
      <Header>InCode</Header>
      <HeaderUnderText>Finance</HeaderUnderText>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  margin: 48px 0 0 48px;
`;

export const Header = styled.h3`
  ${getSharedFontStyles(36, 700)}
  line-height: 50px;
  margin: 0;
  color: #ffffff;
`;

export const HeaderUnderText = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 155%;
  color: #539713;
  margin: 0rem;
`;
