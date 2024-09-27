import styled from 'styled-components';

export default function Logo() {
  return (
    <LogoWrap>
      <Title>InCode</Title>
      <Subtitle>Finance</Subtitle>
    </LogoWrap>
  );
}

const LogoWrap = styled.div`
  width: 134px;
  height: 79px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.5;
  color: #fff;
`;

const Subtitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.55;
  color: #539713;
`;
