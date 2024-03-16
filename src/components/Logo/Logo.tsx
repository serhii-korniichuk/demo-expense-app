import { LogoLink, Primary, Secondary } from './Logo.styled';
import React from 'react';

export const Logo: React.FC = () => {
  return (
    <LogoLink to="/home">
      <Primary>InCode</Primary>
      <Secondary>Finance</Secondary>
    </LogoLink>
  );
};
