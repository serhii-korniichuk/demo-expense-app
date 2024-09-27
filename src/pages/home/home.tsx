import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LoginedIcon from '../../assets/images/logined.png';
import { FireworkIcon } from '../../assets/svg/firework-icon';
import { Button } from '../../components/button';
import { Text } from '../../components/text';
import { AppDispatch } from '../../core/store';
import { logout } from '../../core/user/user.slice';

// todo: aligin center

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <HomeRoot>
      <Title>
        <FireworkIcon />
        <Text weight='bold' size='big' uppercase>
          Congratulations
        </Text>
      </Title>

      <Text weight='medium'>
        Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work
      </Text>
      <Link to='/auth/logout' onClick={() => dispatch(logout())}>
        <Button>Log Out</Button>
      </Link>

      <img src={LoginedIcon} />
    </HomeRoot>
  );
};

const HomeRoot = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  img {
    width: 340px;
    height: 284px;
  }
`;

const Title = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: -120px;
    right: -120px;
  }
`;
