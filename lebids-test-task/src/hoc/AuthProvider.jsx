import { createContext, useState } from "react";

const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
   const initState = localStorage.getItem("user") ? localStorage.getItem("user") : null;
   const [user, setUser] = useState(initState);


   const signin = (newUser, cb) => {
      setUser(newUser);
      cb();
   };

   const signout = (cb) => {
      setUser(null);
      cb();
   };

   const value = { user, signin, signout }


   return <AuthContext.Provider value={value}>
      {children}
   </AuthContext.Provider>
}

export { AuthProvider, AuthContext };