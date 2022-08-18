import { Grid } from "@mui/material";
import React from "react";


const FooterImage: React.FC = () => {
  return (
    <Grid
      component='img'
      alt='Congratulations image'
      // eslint-disable-next-line no-undef
      src={process.env.PUBLIC_URL + "/footer_image.png"}
      sx={{
        mt: "70px",
      }}
    >
    </Grid>
  );
};

export default FooterImage;