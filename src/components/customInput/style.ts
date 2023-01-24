import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },

  iconWrap: {
    position: 'absolute',
    top: '40%',
    right: 0,

    '& svg': {
      cursor: 'pointer',
      width: 22,
      height: 22,
      color: '#fff'
    }
  },

  error: {
    position: 'absolute',
    top: 42,
    textAlign: 'start'
  }
}))
