import React from 'react';
import './Auth.scss';
import { Logo } from './Logo';
import { Registration } from './Registration';

export const Auth: React.FC = () => {
  return (
    <section className="register">
      <Logo />
      <Registration />
    </section>
  )
}