import React, {FormEvent} from "react";
import { InputTextField } from "../InputTextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";


export const InputPass = ({formik, name, label} : any) => {
  const [values, setValues] = React.useState({
    [name]: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event: FormEvent) => {
    event.preventDefault();
  };

  return (          
    <InputTextField
      label={label}
      variant="standard"
      name={name}
      onChange={formik.handleChange}
      value={formik.values[name] || ''}
      type={values.showPassword ? 'text' : 'password'}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      InputProps={{
        endAdornment:(
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <VisibilityOff sx={{color: '#FFFFFF'}} /> : <Visibility sx={{color: '#FFFFFF'}} />}
            </IconButton>
          </InputAdornment>
        )
      }}
  />
);
}