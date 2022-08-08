import React, { Dispatch, SetStateAction, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

export enum Pages {
    SignUp,
    SignIn,
}

type ContextType = {
    setIsAuthorized: Dispatch<SetStateAction<boolean>>;
};

const Auth: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Pages>(Pages.SignUp);
    const { setIsAuthorized } = useOutletContext<ContextType>();

    return (
        <>
            {
                currentPage === Pages.SignUp
                    ?
                    <SignUp setCurrentPage={setCurrentPage} />
                    :
                    <SignIn 
                      setCurrentPage={setCurrentPage}
                      setIsAuthorized={setIsAuthorized}
                    />
            }
        </>
    );
};

export default Auth;