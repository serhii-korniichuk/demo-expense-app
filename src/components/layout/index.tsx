import React from 'react'
import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

import { CircularLoader } from '../loader'
import { useAppSelector } from 'src/utils/hooks/redux'

export const Layout: React.FC = () => {
  const { loading } = useAppSelector((state) => state.auth)

  return (
    <Box sx={{ position: 'relative' }}>
      {loading && <CircularLoader />}
      <Outlet />
    </Box>
  )
}
