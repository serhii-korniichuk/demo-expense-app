import "../style/main.scss";
import Vector from "../resources/img/Vector.svg";

const AppMain = () => {
   return (
      <section className="main">
         <div className="container">
           <div className="main__wrapper">
               <div className="main__inner">
                  <h1 className="main__title">CONGRATULATIONS</h1>
                  <h2 className="main__info">Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work</h2>
                  <button className="main__log-out">See You</button>
                  <img className="main__img" src={Vector} alt="img"/>
               </div>
           </div>
         </div>
      </section> 
   )
}

export default AppMain;