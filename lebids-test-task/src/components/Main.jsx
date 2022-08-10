import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import useFormContent from "../hooks/useFormContent";
import Spinner from "./Spinner";

import "../style/main.scss";
import Vector from "../resources/img/Vector.svg";

const AppMain = () => {
   const navigate = useNavigate();
   const { logout } = useFormContent();
   const { signout } = useAuth();
   const [outError, setOutError] = useState(false);
   const [loading, setLoading] = useState(false);


   const cancelAccess = () => {
      setLoading(false);
      localStorage.removeItem("user");
      signout(() => navigate("/", { replace: true }))
   }

   const onError = () => {
      setLoading(false);
      setOutError(true)
   }

   const onLoading = () => {
      setLoading(true)
      logout(localStorage.getItem("user"))
         .then(cancelAccess)
         .catch(onError)
   }

   const errorContent = outError ?
      <div className="sign__already-reg" style={{ top: "260px", left: "140px" }}>SOMETHING GOES WRONG</div> : null;
   const spinner = loading ? <Spinner top={"189px"} left={"230px"} /> : null;

   return (
      <section className="main">
         <div className="container">
            <div className="main__wrapper">
               <div className="main__inner">
                  <h1 className="main__title">CONGRATULATIONS</h1>
                  <h2 className="main__info">Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work</h2>
                  <button className="main__log-out" style={loading ? { opacity: "0" } : null} onClick={onLoading}>See You</button>
                  {errorContent}
                  {spinner}

                  <img className="main__img" src={Vector} alt="img" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default AppMain;