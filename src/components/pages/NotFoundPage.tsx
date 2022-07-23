import { Box, Container, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const NotFoundPage:React.FC = (props: Props) => {
  return (
    <Container maxWidth={false} sx={{background: '#5D5D67'}}>
      <Box
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Typography variant="h1">Page not found</Typography>
  </Box>
    </Container>
    
  )
}

export default NotFoundPage