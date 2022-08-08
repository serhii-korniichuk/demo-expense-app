import React from 'react';
import title from '../../img/title.svg';
import footer from '../../img/footer.svg';
import './Home.scss';
import { logout } from '../../api/api';
import { useNavigate } from 'react-router-dom';

// type ContextType = {
//   setIsAuthorized: Dispatch<SetStateAction<boolean>>;
// };

// const navigate = useNavigate();

const Home: React.FC = () => {
  // const { setIsAuthorized } = useOutletContext<ContextType>();

  const handleLogout = () => {
    // navigate('/auth');
    console.log('Logout!');
  };

  return (
    <div className='Home'>
      <img src={title} className='Home__title' />

      <p className='Home__text'>
        Now you are on the main page. Soon we will provide <br/>
        you with detailed feedback on the result of your work
      </p>

      <button 
        className='Home__button'
        onClick={handleLogout}
      >
        See You
      </button>

      <img src={footer} className='Home__footer' />
    </div>
  );
};

export default Home;