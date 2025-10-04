import * as S from "./styles";
import { useDispatch } from "react-redux";
import {
  addNewGroup,
  removeGroup,
} from "../../redux/userReducer/userGroupsSlice";

const AccordionItem = ({ currentGroup, active }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    active
      ? dispatch(removeGroup(currentGroup))
      : dispatch(addNewGroup(currentGroup));
  };

  return (
    <S.ItemContainer onClick={handleClick} $isActive={active}>
      <S.AuxDivLine>
        <p>{currentGroup?.name}</p>
      </S.AuxDivLine>
    </S.ItemContainer>
  );
};

export default AccordionItem;
