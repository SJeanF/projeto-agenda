import { styled } from "styled-components";

export const ExitArea = styled.div`
  position: fixed;
  width: 100svw;
  height: 100svh;
  background-color: rgba(0, 0, 0, 0.8);
  visibility: ${(props) => (props.$isActive ? "visible" : "hidden")};
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 16px 16px;
`;

export const PopUpContainer = styled.div`
  width: 100%;
  height: 128px;
  border-radius: 32px;
  background-color: ${(props) => props.theme.profileCardColor};
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export const PopUpMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpMessage = styled.h4`
  margin-top: 8px;
  padding: 0 8px;
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;

export const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;

  &::after {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    content: "";
    width: 1px;
    height: 25%;
    background-color: ${(props) => props.theme.textTransparent};
  }
`;

export const OptionButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.text};
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
`;
