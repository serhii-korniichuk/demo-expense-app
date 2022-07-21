import React from 'react'

type Props = {
  props: any
}

const SignUpForm:React.FC<Props> = (props: Props) => {
  const handleClick = ():void => {
    props.props('SignInForm')
  }
 
  return (
    <div>
      <p>SignUpForm</p>
      <button onClick={handleClick}>Show SignInForm</button>
    </div>
  )
}

export default SignUpForm