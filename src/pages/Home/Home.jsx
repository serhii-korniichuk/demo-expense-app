import Logo from "../../components/Logo/Logo";
import {
  Heading,
  PageContainer,
} from "../../components/SharedBlocks/SharedBlocks";
import {
  Decor,
  HeadingBlock,
  HomeContent,
  LogOutBtn,
  Paragraph,
  WelcomeImg,
} from "./Home.styled";

const Home = () => {
  const logOut = () => {
    console.log("Calling log out");
  };

  return (
    <PageContainer>
      <Logo />
      <HomeContent>
        <HeadingBlock>
          <Heading>Congratulations</Heading>
          <Decor src={require("../../images/decor.png")} alt="decor" />
        </HeadingBlock>
        <Paragraph>
          Now you are on the main page. Soon we will provide
          <br /> you with detailed feedback on the result of your work
        </Paragraph>
        <LogOutBtn type="button" onClick={logOut}>
          Log Out
        </LogOutBtn>
        <WelcomeImg src={require("../../images/home.png")} alt="welcome!" />
      </HomeContent>
    </PageContainer>
  );
};

export default Home;
