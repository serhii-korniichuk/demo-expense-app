import { useState } from "react";
import { TextField, Typography, InputAdornment } from "@mui/material";
import Eye from "assets/Eye";
import getStyles from "./style";

const Input = ({ topLabel, isPassword, field, errorText, ...props }) => {
  const classes = getStyles();
  const [isPasswordType, setIsPasswordType] = useState(true);
  const handleClickPassword = () => setIsPasswordType(!isPasswordType);
  return (
    <div>
      <Typography variant="body1" sx={classes.label}>
        {topLabel}
      </Typography>
      <TextField
        {...props}
        {...field}
        InputProps={{
          disableUnderline: true,
          endAdornment: isPassword && (
            <InputAdornment position="end">
              <Eye sx={classes.passwordIcon} onClick={handleClickPassword} />
            </InputAdornment>
          ),
        }}
        type={isPassword ? (isPasswordType ? "password" : "text") : "text"}
      />
      {errorText && (
        <Typography variant="body1" sx={classes.errorText}>
          {errorText}
        </Typography>
      )}
    </div>
  );
};

export default Input;
