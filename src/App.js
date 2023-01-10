import {Outlet} from "react-router-dom";
import css from './app.module.scss';
import Logo from "./components/shared/art/Logo";
import {useSelector} from "react-redux";

function App() {
  const {isAuth} = useSelector(state => state.user);
  const storage = window.localStorage;
  const pageStyle = !isAuth && !storage.getItem('accessToken')
                      ? {maxWidth: 425, padding: '48px 48px'}
                      : {maxWidth: '100%', padding: '48px 60px'}
  
  return (
    <div className={css.wrapper} style={pageStyle}>
      <Logo />
      <Outlet/>
    </div>
  );
}

export default App;
