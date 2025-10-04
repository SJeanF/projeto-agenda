import styled from "styled-components";

export const Container = styled.main``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-self: center;
  padding: 15px;
  color: ${(props) => props.theme.glowText};
`;

export const Tittle = styled.h1`
  font-size: 24px;
`;

export const HeaderOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 70px;
  font-size: 16px;
`;

export const Main = styled.main``;
