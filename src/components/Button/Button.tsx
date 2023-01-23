import React from "react"
import { styled } from "@mui/material"

const CustomButton: React.FC<{
  label: string
  handler: () => void
}> = ({ label, handler }) => {
  return <Button onClick={handler}>{label}</Button>
}

const Button = styled("button")({
  width: "100%",
  height: "44px",
  color: "#fff",
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "16px",
  background: "#539713",
  outline: "none",
  border: "none",
  cursor: "pointer",
  boxShadow:
    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
})

export default CustomButton
