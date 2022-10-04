import { Logo } from '../../components/Logo/Logo';
import {
  Title,
  Section,
  TitleWrapper,
  Decor,
  Container,
  Text,
  Button,
  Image,
} from './Home.styled';
import decorImg from '../../images/png/decor.png';
import developersImg from '../../images/png/image.png';
import { useUser } from '../../hooks/userContext';
import React from 'react';

export const Home: React.FC = () => {
  const { logOut } = useUser();

  const onClickHandler = () => {
    logOut();
  };
  return (
    <Container>
      <Section>
        <Logo />
        <TitleWrapper>
          <Title>Congratulations</Title>
          <Decor src={decorImg} alt="fireworks" />
        </TitleWrapper>
        <Text>
          Now you are on the main page. Soon we will provide <br />
          you with detailed feedback on the result of your work
        </Text>
        <Button type="button" onClick={onClickHandler}>
          See You
        </Button>
        <Image src={developersImg} alt="developers" />
      </Section>
    </Container>
  );
};

export default Home;
