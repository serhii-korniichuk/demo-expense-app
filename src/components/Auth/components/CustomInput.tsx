import { Box, styled, TextField } from "@mui/material"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import React, { ChangeEvent, useState } from "react"

const CustomInput: React.FC<{
  id: string
  isPassword: boolean
  errorLabel: string | undefined
  type: string
  label: string
  value: string
  onChange: (e: ChangeEvent) => void
}> = ({ isPassword, errorLabel, type, label, value, onChange, id }) => {
  const [isPassShow, setIsPassShow] = useState(false)

  const handleChangePassVisibility = () => {
    setIsPassShow(!isPassShow)
  }

  return (
    <Wrapper>
      <CustomInputStyled
        id={id}
        error={!!errorLabel}
        label={label}
        variant='standard'
        type={type === "password" ? (isPassShow ? "text" : type) : type}
        value={value}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChange}
        focused={false}
      />
      {errorLabel && <ErrorElem> {errorLabel} </ErrorElem>}
      {value && isPassword && (
        <Box onClick={handleChangePassVisibility} sx={{ cursor: "pointer" }}>
          {isPassShow ? (
            <EyeWrap>
              <RemoveRedEyeOutlinedIcon />
            </EyeWrap>
          ) : (
            <EyeWrap>
              <VisibilityOffOutlinedIcon />
            </EyeWrap>
          )}
        </Box>
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Box)({
  position: "relative",
})

const EyeWrap = styled(Box)({
  svg: {
    color: "#fff",
    width: "22px",
    height: "22px",
    position: "absolute",
    bottom: "5px",
    right: "0",
  },
})

const CustomInputStyled = styled(TextField)({
  width: "100%",
  color: "#fff",
  "& label": {
    color: "#fff",
    fontSize: "14px",
  },
  "& input": {
    borderBottom: "1px solid #fff !important",
    color: "#fff",
  },
  "& .MuiInput-root:hover:before": {
    borderBottom: "1px solid #fff",
  },
})

const ErrorElem = styled("p")({
  position: "absolute",
  bottom: "-21px",
  color: "red",
  fontSize: "12px",
  fontFamily: "Montserrat",
})

export default CustomInput
