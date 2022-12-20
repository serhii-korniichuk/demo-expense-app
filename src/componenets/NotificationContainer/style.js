import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(110%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Notification = styled.div`
  gap: 30px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 400px;
  background: ${({ type }) => (type === "error" ? "#f5c2c1" : "#7db24b")};
  color: ${({ type }) => (type === "error" ? "#d00704" : "#497023")};
  position: fixed;
  right: 25px;
  top: ${({ top }) => (top ? `${top * 60 + 15}px` : "15px")};
  font-weight: 600;
  animation: ${slideIn} 0.5s linear;
  z-index: 2;

  @media screen and (max-width: 426px) {
    width: 80%;
    right: 5%;
  }

  @media screen and (max-width: 281px) {
    right: 3%;
  }
`;

export const CloseButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: ${({ type }) => (type === "error" ? "#d00704" : "#497023")};
  font-size: 18px;
`;
