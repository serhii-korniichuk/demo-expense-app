import React from 'react'

import { Box, CircularProgress } from '@mui/material'

import { useStyles } from './style'

export const CircularLoader: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.wrap}>
      <CircularProgress className={classes.circular} />
    </Box>
  )
}
