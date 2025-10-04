import styled from "styled-components";

export const ContactSection = styled.div`
  padding: 4px;
`;

export const Header = styled.header`
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const Tittle = styled.h3`
  padding-left: 15px;
  color: ${(props) => props.theme.textTransparent};
  font-size: 16px;
`;

export const ItemsContainer = styled.ul`
  border-radius: 20px;
  overflow-y: hidden;

  li:last-child > div {
    border: none;
  }
`;
