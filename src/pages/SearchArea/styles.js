import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BackButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  font-size: 16px;
  border: none;
  color: ${(props) => props.theme.glowText};
`;

export const SearchBar = styled.input`
  height: 30px;
  font-size: 20px;
  margin-left: 10px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.glowText};
`;

export const ResultsContainer = styled.ul``;
