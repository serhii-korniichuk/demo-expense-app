import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  padding: 48px;
  min-height: 500px;
  height: 100vh;
  max-width: 424px;
  width: 100%;
  background: #1d283a;
`;

export const Header = styled.header``;

export const HeaderText = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 36px;
`;

export const SubHeader = styled.h4`
  margin: 0;
  color: #539713;
  font-weight: 600;
`;

export const Form = styled.form`
  margin-top: 72px;
`;

export const FormTitle = styled.h1`
  margin: 0 0 48px;
  font-size: 56px;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  margin: 0 0 24px;
  font-size: 14px;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  margin: 5.5px 0 0;
  padding: 0 0 6.5px;
  height: 25px;
  color: #bbbec4;
  background: none;
  border: none;
  border-bottom: 1px solid ${({ isValid }) => (isValid ? "#fff" : "#ff0400")};
  &:focus {
    outline: none;
  }
  user-select: ${({ isHidden }) => (isHidden ? "none" : "text")};
  -webkit-user-select: ${({ isHidden }) => (isHidden ? "none" : "text")};
  -moz-user-select: ${({ isHidden }) => (isHidden ? "none" : "text")};
  -ms-user-select: ${({ isHidden }) => (isHidden ? "none" : "text")};

  font-size: 16px;
  z-index: 1;
`;
export const HiddenPassword = styled.span`
  position: absolute;
  left: 0;
  bottom: 5px;
  color: #bbbec4;
  padding-right: 12px;
  background: #1d283a;
  font-size: 20px;
  z-index: 1;
`;

export const ShowButton = styled.button`
  position: absolute;
  height: 22px;
  width: 22px;
  padding: 0;
  right: 0;
  bottom: 7.5px;
  background: none;
  border: none;

  img {
    margin-top: 0px;
  }

  i {
    margin-top: 4px;
    color: #fff;
    font-size: 18px;
  }
  z-index: 1;
`;

export const Button = styled.button`
  margin: 18px 0 0;
  height: 44px;
  width: 100%;
  border: none;
  color: #fff;
  background: #539713;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  font-weight: 600;
  font-size: 16px;
`;

export const BottomText = styled.p`
  margin: 24px auto 0;
  color: #c7cacc;
  text-align: center;
  font-weight: 400;
  font-size: 12px;

  a {
    margin: 0 0 0 5px;
    color: #6b90cc;
    text-decoration: none;
  }
`;

export const InvalidMessage = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #ff0400;
  position: absolute;
  min-width: 150px;
  bottom: -16px;
  left: 0;
`;
