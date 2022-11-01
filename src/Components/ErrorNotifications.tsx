import React, { useEffect } from 'react';
import classNames from 'classnames';

type Props = {
  error: string;
  setError: (errorMessage: string) => void;
};

export const ErrorNotification: React.FC<Props> = ({ error, setError }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setError('');
    }, (3000));

    return () => {
      clearTimeout(timer);
    };

  }, []);
  
  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'error__message',
        { hidden: error.length > 0 },
      )}
    >
      {error}
    </div>
  );
};