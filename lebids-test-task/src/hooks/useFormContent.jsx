import { useState } from "react";
import useService from "../services/Service";
import Spinner from "../components/Spinner";

import Eye from "../components/Eye";

const useFormContent = () => {
   const {loading, badResponse, logout, successResponse, globalError, reg, auth} = useService();
   const [passwordEye, setPasswordEye] = useState(false);



   const typeOfError = () => {
      let message = [];
      if (badResponse == 409) {
         message = ["THIS USERNAME IS TAKEN", 58]
      } else if (badResponse == 404) {
         message = ["USER IS NOT FOUND", 80]
      } else if (badResponse == 401) {
         message = ["WRONG PASSWORD", 80]
      } else if (globalError) {
         message = ["SOMETHING GOES WRONG", 54]
      }
      return message;
   }
   
   const setUnderFormUiParams = (clazz, text, spinTop, spinLeft, bedResTop, succResTop, succResLeft, butTop) => {
      let content;

      if (loading) {
         content = <Spinner top={spinTop} left={spinLeft}/>;
      } else if (badResponse || globalError) {
         content = <div className="sign__already-reg" style={{top: `${bedResTop}px`, left:`${typeOfError()[1]}px`}}>{typeOfError()[0]}</div>;
      } else if (successResponse) {
         content = <div className="sign__success" style={{top: `${succResTop}px`, left:`${succResLeft}px`}}>SUCCESS ✔</div>;
      } else {
         content = <button className={clazz} style={{top: `${butTop}px`}} type="submit">{text}</button>;
      }

      return content;
   }

   const onChangeEye = () => {
      setPasswordEye(!passwordEye);
   };

   const setEyeParams = (offset) => {
      const eye = <Eye props={passwordEye} onClick={onChangeEye} offset={offset}/>
      return eye;
   }

   

   return {reg, auth, logout, setEyeParams, setUnderFormUiParams, passwordEye};
   
}

export default useFormContent;