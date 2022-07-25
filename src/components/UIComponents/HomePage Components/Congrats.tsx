import { Grid} from '@mui/material'


const Congrats:React.FC = () => {
  return (
    <Grid 
    component='img'
    alt='Congratulations image'
    src={process.env.PUBLIC_URL + `/congratulations_image.png`}
    sx={{
      mt: '-25px',
      ml: '9%',
    }}
    >
    </Grid>
  )
}

export default Congrats