import React, { useContext } from 'react'
import { Context } from '../../..';
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import { observer } from 'mobx-react-lite'

type Props = {}

const AuthPage: React.FC<Props> = (props: Props) => {
  const { store } = useContext(Context);


  if (store.isNeedRegister) {
    return (
      <SignUpPage />
    )
  }

  return (
    <SignInPage />
  )

}

export default observer(AuthPage)