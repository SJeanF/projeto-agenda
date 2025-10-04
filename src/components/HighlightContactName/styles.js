import styled from "styled-components";

export const BaseText = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 18px;
`;

export const HighlightedPart = styled.span`
  color: ${(props) => props.theme.glowText};
`;
