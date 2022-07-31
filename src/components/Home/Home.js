import { useDispatch } from 'react-redux';

import * as actions from '../../redux/actions';
import image from '../../img/Vector.png';
import congrat from '../../img/Decor.png';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <header className="header container header_section">
        <h2 className="header_title">InCode</h2>
        <p className="header_text">Finance</p>
      </header>
      <main className="container main_section">
        <div className="decore">
          <h1 className="main_section_title">CONGRATULATIONS</h1>
          <img className="decore_img" src={congrat} alt="fireworks" />
        </div>
        <p className="main_section_text">
          Now you are on the main page. Soon we will provide
          <br /> you with detailed feedback on the result of your work
        </p>
        <button
          className="btn main_section_btn"
          onClick={() => {
            dispatch(actions.clearUser());
          }}
        >
          See You
        </button>
        <img className="image" src={image} alt="image" />
      </main>
    </>
  );
};

export default Home;
