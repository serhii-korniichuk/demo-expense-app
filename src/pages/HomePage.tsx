import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import PageTitle from '../components/PageTitle';
import getSharedFontStyles from '../sharedFont';
import PageProps from './PageProps.interface';

export default function HomePage({
  authorized,
  setTokens,
}: PageProps): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) {
      navigate('/auth');
    }
  }, [authorized, navigate]);

  const handleLogout = (): void => {
    setTokens(null);
  };
  return (
    <HomeWrapper>
      <PageTitle />
      <HomeBlock>
        <TextBlock>
          <HomeHeader>
            <HeaderText>Congratulations</HeaderText>
            <StyledImage
              src={process.env.PUBLIC_URL + `/home-page-picture.png`}
            />
          </HomeHeader>
          <StyledText>
            Now you are on the main page. Soon we will provide you with detailed
            feedback on the result of your work
          </StyledText>
        </TextBlock>
        <LogOutButton onClick={handleLogout}>See You</LogOutButton>
        <FooterPicture src={process.env.PUBLIC_URL + `/footer-picture.png`} />
      </HomeBlock>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #1d283a;
  min-height: 100vh;
`;

const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 109px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeHeader = styled.div`
  position: relative;
  margin: 0 auto;
`;

const HeaderText = styled.h2`
  ${getSharedFontStyles(48, 700)}
  line-height: 150%;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  margin: 0;
`;

const StyledText = styled.h5`
  ${getSharedFontStyles(16, 600)}
  line-height: 155%;
  text-align: center;
  color: #ffffff;
  max-width: 465px;
  margin: 48px auto;
`;

const LogOutButton = styled.button`
  padding: 0px;
  width: 98px;
  height: 44px;
  border: none;
  ${getSharedFontStyles(16, 600)}
  color: #ffffff;
  background: #b2d0ad;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  margin: 0 auto;
  transition: background 0.3s ease;
  &:hover {
    background: #97c98e;
  }
`;

const FooterPicture = styled.img`
  width: 340.85px;
  height: 287.86px;
  margin: 72px auto;
`;

const animation = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
 `;

const StyledImage = styled.img`
  position: absolute;
  width: 237px;
  height: 188px;
  top: -115px;
  right: -115px;
  animation-name: ${animation};
  animation-duration: 3s;
  animation-timing-function: cubic-bezier();
  animation-iteration-count: infinite;
`;
