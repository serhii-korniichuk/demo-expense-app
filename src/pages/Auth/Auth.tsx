import React from 'react';
import './Auth.scss';
import { Logo } from './page-elements/Logo';
import { Registration } from './Registration';

type Props = {
  toLoginUser: () => void;
}

export const Auth: React.FC<Props> = (props) => {
  const {toLoginUser} = props;
  
  return (
    <section className="register">
      <Logo />
      <Registration toLoginUser={toLoginUser} />
    </section>
  )
}