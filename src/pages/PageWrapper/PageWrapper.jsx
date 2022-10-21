import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import authSelectors from "../../redux/authSelectors";
import { resetError } from "../../redux/authSlice";

const PageWrapper = () => {
  const errorMessage = useSelector(authSelectors.getErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage !== "") {
      toast.error(errorMessage);
      dispatch(resetError());
    }
  }, [errorMessage, dispatch]);

  return (
    <>
      <Outlet />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default PageWrapper;
