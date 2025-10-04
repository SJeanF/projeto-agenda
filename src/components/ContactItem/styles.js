import styled from "styled-components";

export const ItemContainer = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.cardColor};
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 70px;
`;

export const ContactImage = styled.img`
  max-width: 50px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 50%;
`;

export const ContactMainInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 100%;
  border-bottom: 1px solid ${(props) => props.theme.textTransparent};
`;

export const StarFavorite = styled.span`
  color: ${(props) => props.theme.glowText};
`;

export const ContactName = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 18px;
`;
