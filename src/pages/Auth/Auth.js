import { useState } from 'react';
import styled from 'styled-components';
import SignUp from 'components/SignUp/SignUp';
import SignIn from 'components/SignIn/SignIn';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <Container>
      {isSignUp ? (
        <SignUp onClick={() => setIsSignUp(false)} />
      ) : (
        <SignIn onClick={() => setIsSignUp(true)} />
      )}
    </Container>
  );
}

const Container = styled.div`
  @media screen and (min-width: 424px) {
    max-width: 328px;
    margin: 0 auto;
  }
`;
