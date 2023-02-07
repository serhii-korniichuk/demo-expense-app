import { makeStyles } from '@mui/styles'

interface IconProps {
  fill?: string
  stroke?: string
  clickable?: boolean
  disabled: boolean
}

const useStyles = makeStyles({
  root: (props: IconProps) => ({
    cursor: props.clickable && !props.disabled ? 'pointer' : 'inherit',

    '& path': {
      fill: props.fill,
      stroke: props.stroke,
      fillOpacity: props.disabled ? 0.5 : 1,
      strokeOpacity: props.disabled ? 0.5 : 1
    }
  })
})

export default useStyles
