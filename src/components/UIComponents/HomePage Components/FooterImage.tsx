import { Grid } from "@mui/material"


const FooterImage:React.FC = () => {
  return (
    <Grid 
    component='img'
    alt='Congratulations image'
    src={process.env.PUBLIC_URL + `/footer_image.png`}
    sx={{
      mt: '70px',
    }}
    >
    </Grid>
  )
}

export default FooterImage