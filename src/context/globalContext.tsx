import { createContext } from "react";

const GlobalContext = createContext<{ isAuth: boolean; setIsAuth: Function }>({
  isAuth: false,
  setIsAuth: (value: boolean) => {},
});

export default GlobalContext;
