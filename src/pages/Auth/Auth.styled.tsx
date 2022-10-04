import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.sizes[0]}px;
  margin-right: auto;
  margin-left: auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;
