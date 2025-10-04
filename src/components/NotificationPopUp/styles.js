import { styled } from "styled-components";

export const Notification = styled.div`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  min-height: 64px;
  min-width: 280px;
  background-color: ${(props) => props.theme.profileCardColor};
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  visibility: ${(props) => (props.$isActive ? "visible" : "hidden")};
  opacity: ${(props) => (props.$isActive ? "1" : "0")};
`;

export const Message = styled.p`
  color: ${(props) => props.theme.text};
`;
