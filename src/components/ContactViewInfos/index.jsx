import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

const ContactInfos = ({ _id, name, phone, groups, favorite }) => {
  return (
    <S.Contact>
      <S.ContactHeader>
        <S.ContactInfos>
          <S.ContactName>{name}</S.ContactName>
          <S.ContactPhone>{phone}</S.ContactPhone>
        </S.ContactInfos>
        <S.ContactImg
          src={`https://placehold.co/50?text=${name[0].toUpperCase()}`}
        />
      </S.ContactHeader>
      <S.ContactFooter>
        <S.CallButton
          type="button"
          onClick={() =>
            alert("demonstração acaba por aqui filho, vai arrumar o que fazer")
          }
        >
          <FontAwesomeIcon icon={faPhone} />
        </S.CallButton>
      </S.ContactFooter>
    </S.Contact>
  );
};

export default ContactInfos;
