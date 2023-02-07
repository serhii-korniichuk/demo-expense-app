import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontSize: '0.85rem',
    color: theme.palette.error[800],
    paddingTop: '0.5rem',
    marginBottom: '0.5rem'
  }
}))

export default useStyles
