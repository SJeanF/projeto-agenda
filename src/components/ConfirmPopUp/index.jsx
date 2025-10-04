import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { deactiveConfirmPopUp } from "../../redux/confirmPopUpReducer/confirmPopUpSlice";
// import { deleteContact } from "../../services/contactsApi";
import { useNavigate } from "react-router-dom";
import { activateNotification } from "../../redux/notificationPopUpReducer/notificationPopUpSlice";

const PopUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popUpInfos = useSelector((state) => state.popUp);

  const handleCancel = () => {
    dispatch(deactiveConfirmPopUp());
  };

  const handleConfirm = () => {
    dispatch(activateNotification("Contact sucessfully deleted"));
    // deleteContact(popUpInfos.currentContactId);
    navigate("/");
  };

  return (
    <S.ExitArea $isActive={popUpInfos.active}>
      <S.PopUpContainer>
        <S.PopUpMain>
          <S.PopUpMessage>Move this contact to the Trash?</S.PopUpMessage>
        </S.PopUpMain>
        <S.OptionsContainer>
          <S.OptionButton onClick={handleCancel}>Cancel</S.OptionButton>
          <S.OptionButton onClick={handleConfirm}>Confirm</S.OptionButton>
        </S.OptionsContainer>
      </S.PopUpContainer>
    </S.ExitArea>
  );
};

export default PopUp;
