import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import HighlightContactName from "../HighlightContactName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ContactItem = ({ _id, name, phone, groups, favorite, query }) => {
  const navigate = useNavigate();

  return (
    <S.ItemContainer onClick={() => navigate(`/contact/${_id}`)}>
      <S.ContactImage
        src={`https://placehold.co/50?text=${name[0].toUpperCase()}`}
      />
      <S.ContactMainInfos>
        <HighlightContactName query={query}>{name}</HighlightContactName>
        <S.StarFavorite>
          {favorite && <FontAwesomeIcon icon={faStar} />}
        </S.StarFavorite>
      </S.ContactMainInfos>
    </S.ItemContainer>
  );
};

export default ContactItem;
