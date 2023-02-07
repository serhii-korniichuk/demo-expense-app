import React from 'react'

import { Alert } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'
import classNames from 'classnames'

import { messageSlice } from 'src/redux/message/reducer'

import { useAppDispatch, useAppSelector } from 'src/utils/hooks/redux'

import useStyles from './style'

interface IProps {
  className?: string
}

const SnackBarComp: React.FC<IProps> = ({ className }) => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const { type, text, open } = useAppSelector((state) => state.message)

  const handleClose = () => {
    dispatch(messageSlice.actions.resetValue())
  }

  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      className={classNames(classes.root, className)}
    >
      <Alert onClose={handleClose} elevation={6} variant='filled' severity={type}>
        {text}
      </Alert>
    </Snackbar>
  )
}

export default SnackBarComp
