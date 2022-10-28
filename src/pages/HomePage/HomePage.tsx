import { FC } from 'react';
import toast from 'react-hot-toast';
import { Button } from '../../components/Button';
import decor from '../../images/Decor.svg';
import peopleImage from '../../images/Image.png';
import classes from './HomePage.module.scss';
import { useAuth } from '../../components/AuthContext';
import { logoutUser } from '../../api/auth';

export const HomePage: FC = () => {
  const { setToken } = useAuth();

  const handleLogout = () => {
    logoutUser()
      .then(() => setToken(''))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      })
      .finally(() => {
        toast.success('Successfully logged out');
        setToken('');
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.congratulationsWrapper}>
        <h2 className={classes.title}>
          Congratulations
        </h2>

        <img
          className={classes.decorImg}
          src={decor}
          alt="congratulations"
        />
      </div>

      <p className={classes.description}>
        Now you are on the main page.
        Soon we will provide you with detailed feedback on the result of your work
      </p>

      <Button
        width="99px"
        onClick={handleLogout}
      >
        Log Out
      </Button>

      <img
        src={peopleImage}
        alt="people"
        className={classes.peopleImg}
      />
    </div>
  );
};
