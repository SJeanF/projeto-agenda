import styled from "styled-components";
import { InputMask } from "primereact/inputmask";

export const GeralContainer = styled.div`
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 128px;
  background-color: ${(props) => props.theme.profileCardColor};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const AuxDivRelative = styled.div`
  position: relative;
`;

export const ContactImage = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
`;

export const EditButton = styled.button`
  border-radius: 50%;
  position: absolute;
  border: none;
  padding: 2px;
  font-size: 16px;
  right: -5px;
  bottom: 0;
  background-color: ${(props) => props.theme.editContacImageBackground};
  color: ${(props) => props.theme.text};

  &:active {
    color: ${(props) => props.theme.editContacImageBackground};
    background-color: ${(props) => props.theme.background};
  }
`;

export const ContactInfoContainer = styled.div`
  width: 100%;
  min-height: 64px;
  background-color: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.text};
  border-radius: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const ContactIcon = styled.span`
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.glowText};
`;

export const ContactName = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  min-height: 32px;
  width: 70%;
  font-size: 20px;
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
`;

export const ContactPhoneContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const PhoneTittle = styled.p`
  margin-bottom: 8px;
  color: ${(props) => props.theme.glowText};
`;

export const Phone = styled(InputMask)`
  background-color: transparent;
  min-height: 32px;
  width: 100%;
  font-size: 20px;
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
`;

export const SaveCancelButtonContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  align-self: flex-end;
`;

export const Button = styled.button`
  width: 100%;
  height: 32px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.glowText};
  font-size: 24px;
  margin-bottom: 16px;
`;
