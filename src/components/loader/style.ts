import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: theme.palette.neutral[100],
    opacity: .1,
    zIndex: 100
  },
  circular: {
    width: '100px !important',
    height: '100px !important',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 102,
    color: theme.palette.secondary[800]
  }
}))
