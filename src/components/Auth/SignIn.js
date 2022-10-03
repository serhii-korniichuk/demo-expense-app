import React from "react";
import { observer } from "mobx-react";
import { useForm, Controller } from "react-hook-form";
import {
  IconButton,
  InputAdornment,
  TextField,
  CssBaseline,
  Button,
  Typography,
  Container,
  Box,
} from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import store from "../../stores/store";
import messageStore from "../../stores/messageStore";
import errorStore from "../../stores/errorStore";
import { errorFormatter } from "../../utils/errorFormatter";

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const isValidateError = !!Object.keys(errors).length > 0;
  const isServerError = !!errorStore.errors.length;
  const isAnyError = isValidateError || isServerError;
  const isMessage = !!messageStore.messages.length;
  // useEffect(() => messageStore.clearAllMessages(), [isMessage && isAnyError]);
  const { isPassVisible } = store;
  const isMultipleError = Object.keys(errors).length > 1;
  const onSubmit = (data) => {
    store.login(data);
  };
  return (
    <Container component="main" maxWidth="xs" onClick={() => messageStore.clearAllMessages()}>
      <CssBaseline />
      <Box
        position="relative"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h1" fontSize="56px" sx={{ alignSelf: "baseline" }}>
          SIGN IN
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <Controller
            id="username"
            name="username"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="User Name"
                autoComplete="username"
                autoFocus
                variant="standard"
                color="secondary"
              />
            )}
          />

          <Controller
            name="password"
            id="password"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type={isPassVisible ? "text" : "password"}
                margin="normal"
                fullWidth
                label="Password"
                autoComplete="current-password"
                variant="standard"
                color="secondary"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => store.setIsPassVisible(!isPassVisible)}
                        edge="end"
                      >
                        {isPassVisible ? (
                          <VisibilityOutlinedIcon sx={{ mr: "3px", mb: "1px" }} />
                        ) : (
                          <VisibilityOffOutlinedIcon sx={{ mr: "3px", mb: "1px" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {isAnyError &&
            [
              isValidateError && `${errorFormatter(errors, isMultipleError)}`,
              errors.confirmPassword && " Password's must match",
              isServerError && errorStore.errorToShow,
            ].map(
              (textError, index) =>
                textError && (
                  <Typography
                    key={`error-${index}`}
                    variant="body2"
                    fontStyle="normal"
                    fontSize="14px"
                    fontWeight="400"
                    color="error.main"
                    align="center"
                    alignSelf="center"
                    sx={{ mt: 2 }}
                  >
                    {textError + " "}
                  </Typography>
                )
            )}
          {isMessage &&
            messageStore.messages.map((message, index) => (
              <Typography
                key={`message-${index}`}
                variant="body2"
                fontStyle="normal"
                fontSize="14px"
                fontWeight="400"
                color="primary.main"
                align="center"
                alignSelf="center"
                sx={{ mt: 2 }}
              >
                {message}
              </Typography>
            ))}

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 3 }}>
            Sign In
          </Button>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="body2"
              fontStyle="normal"
              fontSize="12px"
              fontWeight="400"
              align="center"
            >
              {"Don't have account yet?"}
            </Typography>
            <Typography
              variant="body2"
              fontStyle="normal"
              fontSize="12px"
              fontWeight="400"
              align="center"
              color="link.main"
              cursor="clicker"
              sx={{
                marginLeft: "5px",
                cursor: "pointer",
              }}
              onClick={() => store.setIsSignIn(false)}
            >
              New Account
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default observer(SignIn);
