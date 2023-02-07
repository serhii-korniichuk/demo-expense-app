import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Container, Typography } from '@mui/material'

import { CustomButton } from 'src/components/customButton'
import { CustomIcon } from 'src/components/customIcon'
import Header from 'src/components/header'

import { authLogout } from 'src/redux/auth/actions'

import { IconType } from 'src/types/enums'
import { isLoggedIn } from 'src/utils/helpers/authService'

import { useAppDispatch } from 'src/utils/hooks/redux'

import { useStyles } from './style'

const Home: React.FC = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/auth')
    }
  }, [])

  return (
    <Box className={classes.root}>
      <Container>
        <Header />
        <Box className={classes.main}>
          <Box className={classes.contentContainer}>
            <CustomIcon className={classes.decore} type={IconType.decor} />

            <Typography variant='h2'>Congratulations</Typography>
            <Typography variant='h5'>
              Now you are on the main page. Soon we will provide <br /> you with detailed feedback
              on the result of your work
            </Typography>

            <CustomButton
              type='button'
              size='SM'
              onClick={() => dispatch(authLogout({ func: () => navigate('/auth') }))}
              text='Log Out'
            />
          </Box>

          <Box className={classes.imgContainer}>
            <CustomIcon type={IconType.peopleBlog} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
