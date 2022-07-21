import React from 'react'

type Props = {
  props: any
}

const SignInForm:React.FC<Props> = (props: Props) => {
 
  const handleClick = ():void => {
    props.props('SignUpForm')
  }
  
  return (
    <div>
      <p>SignInForm</p>
      <button onClick={handleClick}>Show SignUpForm</button>
    </div>
  )
}

export default SignInForm