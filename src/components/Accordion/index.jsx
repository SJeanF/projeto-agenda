import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import AccordionItem from "../AccordionItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewEditableUserGroups } from "../../redux/userReducer/userGroupsSlice";
import { getAllGroups } from "../../services/groupsApi";

const Accordion = ({ currentContactGroups }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [allGroups, setAllGroups] = useState(null);

  const userGroups = useSelector((state) => state.userGroups);

  useEffect(() => {
    async function allGroups() {
      const currentData = await getAllGroups();
      setAllGroups(currentData);
    }
    dispatch(
      setNewEditableUserGroups(
        currentContactGroups !== false ? currentContactGroups : []
      )
    );

    allGroups();
  }, [dispatch, currentContactGroups]);

  return (
    <S.AccordionContainer>
      <S.AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        <S.AccordionHeaderInfos>
          <S.ContactIcon>
            <FontAwesomeIcon icon={faUserGroup} />
          </S.ContactIcon>
          <S.TextArea>Groups</S.TextArea>
        </S.AccordionHeaderInfos>
        <S.AccordionIcon>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </S.AccordionIcon>
      </S.AccordionHeader>
      <S.AccordionContent $isOpen={isOpen}>
        {allGroups &&
          allGroups.map((group) => (
            <AccordionItem
              key={group._id}
              currentGroup={group}
              active={userGroups.some(
                (userGroup) => userGroup._id === group._id
              )}
            />
          ))}
      </S.AccordionContent>
    </S.AccordionContainer>
  );
};

export default Accordion;
