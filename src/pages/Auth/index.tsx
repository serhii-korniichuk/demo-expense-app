import React, {useState} from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {PAGE} from "../../utils";

const Auth = () => {
    const [shodBeDisplayed, setShouldBeDisplayed] = useState<PAGE>(PAGE.SignIn);

    const pageHandler = (page: PAGE) => {
        setShouldBeDisplayed(page)
    }

    return (
        <>
            {shodBeDisplayed === PAGE.SignIn && <SignIn pageHandler={pageHandler}/>}
            {shodBeDisplayed === PAGE.SignUp  && <SignUp pageHandler={pageHandler}/>}
        </>
    );
};

export default Auth;