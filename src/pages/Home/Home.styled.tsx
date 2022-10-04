import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[6]}px;
  width: ${p => p.theme.sizes[1]}px;
  margin-right: auto;
  margin-left: auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.title};
  text-transform: uppercase;
`;

export const Decor = styled.img`
  position: absolute;
  bottom: 1px;
  right: -118px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  margin-top: 109px;
`;

export const Text = styled.p`
  margin-top: ${p => p.theme.space[5]}px;
  margin-right: auto;
  margin-left: auto;
`;

export const Button = styled.button`
  margin-top: ${p => p.theme.space[5]}px;
  margin-right: auto;
  margin-left: auto;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: inherit;
  background-color: ${p => p.theme.colors.secondary};
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  border: ${p => p.theme.borders.none};
  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.first};
    box-shadow: ${p => p.theme.shadows.second};
    box-shadow: ${p => p.theme.shadows.third};
    cursor: pointer;
  }
`;

export const Image = styled.img`
  margin-top: ${p => p.theme.space[7]}px;
  margin-right: auto;
  margin-left: auto;
`;
