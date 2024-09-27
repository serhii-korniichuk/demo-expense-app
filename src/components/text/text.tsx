import { ReactNode } from 'react';
import styled from 'styled-components';

type TextProps = {
  color?: TextColors;
  size?: TextSizes;
  weight?: TextWeight;
  uppercase?: boolean;
  children?: ReactNode;
};

export const Text = ({
  size = 'second-small',
  color = 'white',
  weight = 'light',
  uppercase = false,
  children,
}: TextProps) => {
  return (
    <TextRoot size={size} color={color} weight={weight} uppercase={uppercase}>
      {children}
    </TextRoot>
  );
};

type TextColors = 'white' | 'green' | 'grey';
type TextWeight = 'light' | 'medium' | 'bold';
type TextSizes = 'small' | 'second-small' | 'big' | 'second-big' | 'big';

const getColor = ({ color }: TextProps) => {
  switch (color) {
    case 'white':
      return '#FFFFFF';

    case 'green':
      return '#539713';

    case 'grey':
      return 'rgba(255, 255, 255, 0.7)';
  }
};

const getFontSize = ({ size }: TextProps) => {
  switch (size) {
    case 'small':
      return '14px';

    case 'second-small':
      return '16px';

    case 'big':
      return '36px';
  }
};

const getFontWeight = ({ weight }: TextProps) => {
  switch (weight) {
    case 'bold':
      return '700';

    case 'medium':
      return '600';

    case 'light':
      return '400';
  }
};

const TextRoot = styled.div<TextProps>`
  line-height: 155%;

  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};

  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`;
