import React from "react"
import { styled } from "@mui/material"

const Logo: React.FC = () => {
  return (
    <>
      <LogoText>InCode</LogoText>
      <LogoSubText>Finance</LogoSubText>
    </>
  )
}

const LogoText = styled("p")({
  fontWeight: 700,
  fontSize: "36px",
  color: "#fff",
  lineHeight: "54px",
})

const LogoSubText = styled("p")({
  color: "#539713",
  fontSize: "16px",
})

export default Logo
