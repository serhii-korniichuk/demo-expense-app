import { Outlet } from 'react-router-dom';
import Logo from './Logo/Logo';

export default function Layout(params) {
  return (
    <>
      <Logo />
      <Outlet />
    </>
  );
}
