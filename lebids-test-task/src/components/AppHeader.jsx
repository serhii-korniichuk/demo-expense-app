import "../style/index.scss";
import Logo from "../resources/img/Logo.svg";

const AppHeader = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__inner">
               <div className="header__logo">
                  <img src={Logo} alt="Logo" />
               </div>
            </div>
         </div>
      </header>
   )
}

export default AppHeader;