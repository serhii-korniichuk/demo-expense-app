import { Box, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import SubmitButton from "./SubmitButton";
import ErrorAlert from "../ErrorAlert";
import { ThemeProvider } from "@mui/material";
import { muiTextFieldTheme } from "../../../styles/mui/themes";

interface State {
  password: string;
  showPassword: boolean;
  username: string;
  displayName: string;
}

const SignInForm: React.FC = () => {
  const [values, setValues] = React.useState<State>({
    password: "",
    username: "",
    displayName: "",
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={muiTextFieldTheme}>
      <Box component="form" >
        <TextField
          value={values.username}
          onChange={handleChange("username")}
          required
          fullWidth
          placeholder="John15"
          variant="standard"
          id="username"
          label="Username"
          name="username"
          autoFocus
          sx={{
            marginBottom: "20px",
          }}
        />
        <FormControl fullWidth required variant="standard" sx={{ color: "pink" }} >
          <InputLabel sx={{
            color: "white"
          }} htmlFor="standart-adornment-password">Password</InputLabel>
          <Input
            placeholder="Secret234"
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <SubmitButton userData={values}>Sign In</SubmitButton>
        <ErrorAlert></ErrorAlert>
      </Box>
    </ThemeProvider>
  );
};

export default SignInForm;