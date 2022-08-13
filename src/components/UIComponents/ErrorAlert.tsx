import { Snackbar, Alert } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";

interface AlertProps {
  show: boolean;
  message?: string;
}

const ErrorAlert = () => {
  const { store } = useContext(Context);
  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    message: "",
  });

  const handleClose = () => {
    setAlert({
      show: false,
    });
    store.errorResponse = null;
  };

  useEffect(() => {
    if (store.errorResponse?.statusCode === 409) {
      setAlert({
        show: true,
        message: "Username already exist"
      });
    } else if (store.errorResponse?.statusCode === 404) {
      setAlert({
        show: true,
        message: "User with this username not found"
      });
    } else if (store.errorResponse) {
      setAlert({
        show: true,
        message: store.errorResponse.message
      });
    }
  }, [store.errorResponse]);


  return (
    <Snackbar open={alert.show} onClose={handleClose}>
      <Alert variant="filled" severity='error'>
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default observer(ErrorAlert); 