import styled from "styled-components";

export const ContactIcon = styled.span`
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textTransparent};
`;

export const TextArea = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccordionContainer = styled.div`
  display: block;
  width: 100%;
  min-height: 64px;
  background-color: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.textTransparent};
  border-radius: 16px;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const AccordionHeader = styled(AccordionContainer)`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionHeaderInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
`;

export const AccordionIcon = styled.span`
  font-size: 16px;
  margin-right: 32px;
  color: ${(props) => props.theme.text};
`;

export const AccordionContent = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? "160px" : "0")};
  overflow-y: scroll;
  transition: max-height 0.3s ease;
`;
