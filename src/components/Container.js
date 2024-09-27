import styled from 'styled-components';

export default function Container({ children }) {
  return <ContainerEl>{children}</ContainerEl>;
}

const ContainerEl = styled.div`
  padding: 48px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 720px) {
    padding: 48px 60px;
  }
`;
