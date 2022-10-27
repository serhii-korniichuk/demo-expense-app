import { FC, ReactNode } from 'react';
import classes from './MainLayout.module.scss';
import { Logo } from '../Logo';

type Props = {
  children: ReactNode;
  pageType: string;
};

export const MainLayout: FC<Props> = ({ children, pageType }) => {
  return (
    <div className={`${classes.container} ${classes[pageType]}`}>
      <Logo />

      <main>
        {children}
      </main>
    </div>
  );
};
