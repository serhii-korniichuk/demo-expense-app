import { createContext, useState, useEffect } from "react";

const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
 
   const signin = (newUser, cb) => {
      setUser(newUser);
      cb();
   };
   const signout = (cb) => {
      setUser(null);
      cb();
   };

   const value = {user, signin, signout}


   return <AuthContext.Provider value={value}>
      {children}
   </AuthContext.Provider>
}

export {AuthProvider, AuthContext};