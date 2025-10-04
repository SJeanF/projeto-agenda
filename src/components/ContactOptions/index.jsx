import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  faPen,
  faTrash,
  faStar as Star,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { getContactById, patchContact } from "../../services/contactsApi";
import { useDispatch } from "react-redux";
import {
  activeConfirmPopUp,
  setCurrentId,
} from "../../redux/confirmPopUpReducer/confirmPopUpSlice";

const ContactOptions = ({ currentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    async function fetchFavorite() {
      const currentData = await getContactById(currentId);
      setIsFavorite(currentData.favorite);
    }

    fetchFavorite();
  }, [currentId]);

  const handleFavorite = async () => {
    try {
      patchContact(currentId, { favorite: !isFavorite });
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Erro ao atualizar favorito:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-contact/${currentId}`);
  };

  const handleDelete = () => {
    dispatch(setCurrentId(currentId));
    dispatch(activeConfirmPopUp());
  };

  return (
    <>
      {isFavorite !== null && (
        <S.OptionsBar>
          <S.OptionContainer>
            <S.Icon onClick={handleFavorite}>
              <FontAwesomeIcon icon={isFavorite ? Star : faStar} />
            </S.Icon>
            <S.Tittle>Favorites</S.Tittle>
          </S.OptionContainer>
          <S.OptionContainer onClick={handleEdit}>
            <S.Icon>
              <FontAwesomeIcon icon={faPen} />
            </S.Icon>
            <S.Tittle>Edit</S.Tittle>
          </S.OptionContainer>
          <S.OptionContainer onClick={handleDelete}>
            <S.Icon>
              <FontAwesomeIcon icon={faTrash} />
            </S.Icon>
            <S.Tittle>Delete</S.Tittle>
          </S.OptionContainer>
        </S.OptionsBar>
      )}
    </>
  );
};

export default ContactOptions;
