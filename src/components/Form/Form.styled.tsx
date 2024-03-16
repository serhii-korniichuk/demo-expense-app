import styled from 'styled-components';
import { ReactComponent as EyeOffSvg } from '../../images/svg/eye-off.svg';
import { ReactComponent as EyeOnSvg } from '../../images/svg/eye-on.svg';

export const Title = styled.h1`
  margin-top: ${p => p.theme.space[7]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: ${p => p.theme.lineHeights.title};
  text-transform: uppercase;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  :not(:last-of-type) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  :last-of-type {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Input = styled.input`
  background-color: inherit;
  border: ${p => p.theme.borders.none};
  border-bottom: ${p => p.theme.borders.fields};
  border-color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.text};
  :hover,
  :focus {
    outline: none;
  }
  :active {
    background-color: inherit;
  }
`;

export const Button = styled.button`
  width: 100%;
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

export const Text = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  margin-right: auto;
  margin-left: auto;
  color: ${p => p.theme.colors.annotation};
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const Link = styled.a`
  color: ${p => p.theme.colors.link};
  :hover,
  :focus {
    cursor: pointer;
  }
`;

export const EyeOff = styled(EyeOffSvg)`
  position: absolute;
  right: 0;
  bottom: 8px;
  cursor: pointer;
`;

export const EyeOn = styled(EyeOnSvg)`
  position: absolute;
  right: 0;
  bottom: 8px;
  cursor: pointer;
`;
