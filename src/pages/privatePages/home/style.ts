import { Theme } from '@mui/material'

import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    minHeight: '100vh',
    padding: '48px 0',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.main
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '75px',
    height: '100%'
  },
  contentContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '48px'
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  decore: {
    position: 'absolute',
    transform: 'translate(0%,-50%)',
    top: '-10px',
    right: '-100px',
  }
}))
