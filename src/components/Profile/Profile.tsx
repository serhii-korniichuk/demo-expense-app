import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { authReset } from "../../store/slices/userSlice";
import { fetchAuthLogout, fetchCheckAuth } from "../../store/slices/userThunks";
import { authLoginToken } from "../../store/userSelectors/userSelectors";
import FormButton from "../../UI/FormButton";
import FormsWrapper from "../../UI/FormsWrapper";

import ProfileTitle from "./components/ProfileTitle";

import peopleImage from "./Image.png";

import s from "./Profile.module.scss";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useSelector(authLoginToken);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchCheckAuth());
    } else {
      navigate("/");
    }
  }, []);

  React.useEffect(() => {
    if (!token) navigate("/");
  }, [token]);

  const logOutHandler = () => dispatch(fetchAuthLogout());

  return (
    <FormsWrapper size="big">
      <main className={s.ProfileWrapper}>
        <ProfileTitle />
        <div className={s.ProfileNotification}>
          <p>
            Now you are on the main page. Soon we will provide you with detailed
            feedback on the result of your work
          </p>
        </div>
        <div className={s.ButtonWrapper}>
          <FormButton title="Log Out" onClick={logOutHandler} />
        </div>
        <div className={s.ImageWrapper}>
          <img src={peopleImage} />
        </div>
      </main>
    </FormsWrapper>
  );
};

export default Profile;
