import { logOut } from "../api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const handlerOnClick = async() => {
    const response = await logOut();
        if (!response.ok) {
          throw new Error (`${response.status} - ${response.statusText}`);
        } else {
          navigate("/auth/login", { replace: true });
        }
  }
  
  return (
    <section class="sign sign--congrat">
      <div class="sign__container sign__container--congrat">
        <div class="sign__logobox sign__logobox--congrat">
          <p class="sign__logomain">InCode</p>
          <p class="sign__logounder">Finance</p>
        </div>
        <img 
          alt="congratulation" 
          class="sign__congratmainimg" 
          src="./images/congrat.svg">
        </img>
          <p class="sign__congrattext">Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work</p>
        <button 
          type="button" 
          class="sign__button sign__button--congrat"
          onClick={() => {
            handlerOnClick();
          }}>
          <span class="sign__buttonname">See you</span>
        </button>
        <img 
          alt="congratulationpeople" 
          class="sign__congratpeopleimg" 
          src="./images/people.svg">
        </img>
      </div>
    </section>
  );
}