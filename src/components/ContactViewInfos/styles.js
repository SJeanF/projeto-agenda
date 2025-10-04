import styled from "styled-components";

export const BackButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  font-size: 16px;
  border: none;
  margin-top: 10px;
`;

export const Contact = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px;
  border-radius: 16px;
`;

export const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ContactInfos = styled.div`
  padding: 16px;
`;

export const ContactName = styled.h3`
  font-size: 28px;
  color: ${(props) => props.theme.text};
`;

export const ContactPhone = styled.p`
  color: ${(props) => props.theme.text};
  margin-top: 16px;
`;

export const ContactImg = styled.img`
  max-width: 50px;
  width: 100%;
  height: 100%;
  max-height: 50px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const ContactFooter = styled.div`
  text-align: center;
`;

export const CallButton = styled.button`
  font-size: 32px;
  border: none;
  border-radius: 50%;
  padding: 16px;
  background-color: ${(props) => props.theme.callBackgroundColor};
  color: ${(props) => props.theme.text};
`;
