import { toast } from 'react-toastify';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import { useLogoutUserMutation } from 'redux/auth/auth-reducer';
import decor from 'img/decor.png';
import people from 'img/people.png';

export default function Home() {
  const [logout] = useLogoutUserMutation();

  const onLogout = () => {
    logout();
    toast.success('You logged out');
  };

  return (
    <Container>
      <Title>Congratulations</Title>
      <Text>
        Now you are on the main page. Soon we will provide you with detailed
        feedback on the result of your work
      </Text>
      <Wrap>
        <Button type="submit" onClick={onLogout}>
          See You
        </Button>
      </Wrap>
      <Img src={people} alt="People" />
    </Container>
  );
}

const Container = styled.div`
  max-width: 224px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 109px;
  .button {
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: 720px) {
    max-width: 720px;
  }
`;

const Title = styled.h1`
  max-width: 224px;
  position: relative;
  text-align: center;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 48px;
  margin-left: auto;
  margin-right: auto;
  &::after {
    position: absolute;
    content: '';
    bottom: 6px;
    right: -115px;
    width: 237px;
    height: 188px;
    background-image: url(${decor});
  }

  @media screen and (min-width: 720px) {
    max-width: 508px;
    font-size: 48px;
  }
`;

const Text = styled.p`
  width: 225px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 48px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.55;
  text-align: center;
  @media screen and (min-width: 720px) {
    width: 466px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 72px;
`;

const Img = styled.img`
  margin: 0 auto;
`;
