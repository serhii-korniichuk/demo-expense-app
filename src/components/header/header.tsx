import styled from 'styled-components';

import { Text } from '../text/';

export const Header = () => {
  return (
    <HeaderRoot>
      <Text weight='bold' size='big'>
        InCode
      </Text>
      <Text weight='bold' color='green'>
        Finance
      </Text>
    </HeaderRoot>
  );
};

const HeaderRoot = styled.header`
  width: 100%;
  padding: 48px 0px 0px 48px;

  display: flex;
  flex-direction: column;
`;
