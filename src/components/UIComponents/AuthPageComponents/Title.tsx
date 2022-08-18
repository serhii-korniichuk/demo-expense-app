import { Typography } from "@mui/material";
import React from "react";

type Props = {
  children: string
}

const Title: React.FC<Props> = ({ children }: Props) => {
  return (
    <Typography sx={{
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "56px",
      lineHeight: "150%",
      letterSpacing: "0.03em",
      color: "#FFFFFF",
      mt: "22px",
    }}> {children} </Typography >
  );
};

export default Title;