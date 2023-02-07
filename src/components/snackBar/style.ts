import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiAlert-filledError': {
      backgroundColor: '#FFF',
      color: 'black',
      padding: '14px 27px',
      borderLeft: '1px red solid'
    },

    '& .MuiAlert-icon': {
      marginRight: 16,
      alignItems: 'center'
    },

    '& .MuiAlert-message': {
      display: 'flex',
      alignItems: 'center',
      fontSize: 18,
      fontWeight: 600
    },

    '& .MuiAlert-action': {
      paddingLeft: 44
    }
  }
}))

export default useStyles
