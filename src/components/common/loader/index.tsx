import { FC, SVGProps } from 'react';
import clsx from 'clsx';

import { LoaderProps } from './types';

import classes from './loader.module.scss';

const FruitSaladLoader = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        background: 'none',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width="40px"
      height="40px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#4dae51"
        strokeWidth="4"
        r="41"
        strokeDasharray="193.20794819577225 66.40264939859075"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
};

export const Loader: FC<LoaderProps> = ({
  className = '',
}: {
  className?: string;
}) => {
  return (
    <div className={clsx(classes.loader, className)}>
      <FruitSaladLoader />
    </div>
  );
};
