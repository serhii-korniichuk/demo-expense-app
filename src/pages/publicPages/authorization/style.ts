import { Theme } from '@mui/material'

import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    maxWidth: '424px',
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    padding: 48,
    backgroundColor: theme.palette.primary.main
  },
  formContainer: {
    padding: '47px 0 24px',
    '& form': {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',

      '&>button': {
        marginTop: 14
      }
    }
  },
  linkContainer: {
    textAlign: 'center'
  }
}))
