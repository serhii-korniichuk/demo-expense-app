import React from 'react'
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";



type Props = {}

const AuthPage:React.FC<Props> = (props: Props) => {
  const [isNeedRegister, setIsNeedRegister]= React.useState<boolean>(false)
  const pullData = (arg:string):void => {
    if(arg === 'SignUpForm') {
      setIsNeedRegister(true);
    } else if (arg === 'SignInForm') {
      setIsNeedRegister(false);
    }
  }

  if (isNeedRegister) {
    return (
      <SignUpForm props={pullData}/>
    )
  }

  return (
    <SignInForm props={pullData}/>
  )
  
}

export default AuthPage