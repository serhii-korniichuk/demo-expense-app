import { Grid } from "@mui/material";
import React from "react";


const Congrats: React.FC = () => {
  return (
    <Grid
      component='img'
      alt='Congratulations image'
      // eslint-disable-next-line no-undef
      src={process.env.PUBLIC_URL + "/congratulations_image.png"}
      sx={{
        mt: "-25px",
        ml: "9%",
      }}
    >
    </Grid>
  );
};

export default Congrats;