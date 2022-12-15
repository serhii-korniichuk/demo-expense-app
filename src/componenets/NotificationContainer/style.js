import styled from "styled-components";

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
  z-index: 1;
`;

export const CloseButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: ${({ type }) => (type === "error" ? "#d00704" : "#497023")};
  font-size: 18px;
`;
