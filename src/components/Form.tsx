import React, { useState } from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

type Props = {};

export const Form: React.FC<Props> = () => {
  const [signCheck, setSignCheck] = useState(true);

  return (
    <div className="form-body">
      <div className="header">
        <h1 className="header__h1">InCode</h1>
        <p className="header__p">Finance</p>
      </div>
      {signCheck
        ? (
          <SignIn
            setSignCheck={setSignCheck}
          />
        )
        : (
          <SignUp
            setSignCheck={setSignCheck}
          />
        )}
    </div>

  );
};
