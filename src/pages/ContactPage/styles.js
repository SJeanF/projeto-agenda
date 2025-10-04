import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.div`
  padding: 16px;
`;

export const BackButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  font-size: 16px;
  border: none;
  margin-bottom: 16px;
  color: ${(props) => props.theme.glowText};
`;
