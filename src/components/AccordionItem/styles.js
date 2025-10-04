import styled from "styled-components";

export const ItemContainer = styled.div`
  min-height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.$isActive ? props.theme.text : props.theme.textTransparent};
`;

export const AuxDivLine = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  padding: 20px 0;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: ${(props) => props.theme.textTransparent};
  }
`;
