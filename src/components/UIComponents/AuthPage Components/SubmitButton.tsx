import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../../..';


type Props = {
  children: string;
  userData: { username: string; password: string; displayName: string};
}

const SubmitButton = ({ children, userData }: Props) => {
  const { store } = useContext(Context);

  const login = async (e: React.MouseEvent<HTMLElement>): Promise<void> => {
    e.preventDefault()
    await store.login(userData.username, userData.password);
  }

  const register = async (e: React.MouseEvent<HTMLElement>): Promise<void> => {
    e.preventDefault()
    await store.register(userData.username, userData.password, userData.displayName)
  }


  if (children === 'Sign Up') {
    return (
      <Button
        type="submit"
        fullWidth
        onClick={register}
        sx={{
          mt: '38px',
          background: '#539713',
          color: 'white',
          textTransform: 'capitalize',
          borderRadius: '0px',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '155%',
          ml: '-1px',
          '&:hover': {
            backgroundColor: '#97BC62FF'
          }
        }}>
        {children}
      </Button>
    )
  }

  return (
    <Button
      type="submit"
      fullWidth
      onClick={login}
      sx={{
        mt: '48px',
        background: '#539713',
        color: 'white',
        textTransform: 'capitalize',
        borderRadius: '0px',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '155%',
        ml: '-1px',
        '&:hover': {
          backgroundColor: '#97BC62FF'
        }
      }}>
      {children}
    </Button>
  )
}

export default SubmitButton