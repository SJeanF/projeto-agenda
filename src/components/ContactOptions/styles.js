import styled from "styled-components";

export const OptionsBar = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 32px;
`;

export const OptionContainer = styled.li`
  list-style: none;
  text-align: center;
`;

export const Icon = styled.span`
  color: ${(props) => props.theme.glowText};
`;

export const Tittle = styled.p`
  color: ${(props) => props.theme.glowText};
`;
