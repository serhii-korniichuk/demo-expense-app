import React from 'react'

import { Box, Typography } from '@mui/material'

import { theme } from 'src/utils/constants/ui'

import { useStyles } from './style'

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant='h3'>InCode</Typography>
      <Typography variant='h5' color={theme.palette.success[700]}>
        Finance
      </Typography>
    </Box>
  )
}

export default Header
