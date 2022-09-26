import React, { useState } from "react";
import GlobalContext from "./globalContext";

export default function ContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
    const [isAuth, setIsAuth] = useState<boolean>(false);

    return(
        <GlobalContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            {children}
        </GlobalContext.Provider>
    )
};
