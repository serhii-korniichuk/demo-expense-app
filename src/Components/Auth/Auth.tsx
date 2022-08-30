import {SignUp} from "./SignUp";
import {SignIn} from "./SignIn";
import {Route, Routes} from "react-router-dom";

export const Auth = () => {
    return (
        <div>
            <Routes>
                <Route path="signUp" element={<SignUp/>}/>
                <Route path="/" element={<SignIn/>}/>
            </Routes>
        </div>
    )
}