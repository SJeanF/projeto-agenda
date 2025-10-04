import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import * as S from "./styles";
import Accordion from "../../components/Accordion";
import {
  getContactById,
  patchContact,
  postNewContact,
} from "../../services/contactsApi";
import { useSelector } from "react-redux";

const EditCreateContact = ({ isCreate }) => {
  const navigate = useNavigate();
  const [currentContact, setCurrentContact] = useState(null);
  const [updateContactName, setUpdateContactName] = useState(null);
  const [updateContactPhone, setUpdateContactPhone] = useState(null);
  const userGroups = useSelector((state) => state.userGroups);

  const { id } = useParams();

  useEffect(() => {
    if (!isCreate) {
      async function fetchContact() {
        const currentData = await getContactById(id);
        setUpdateContactName(currentData.name);
        setUpdateContactPhone(currentData.phone);
        setCurrentContact(currentData);
      }

      fetchContact();
    } else {
      setCurrentContact(false);
      setUpdateContactName("");
      setUpdateContactPhone("");
    }
  }, [id, isCreate]);

  const textImageDefiner = () => {
    if (currentContact === false || currentContact == null) {
      return "NaN";
    } else {
      return currentContact.name[0].toUpperCase();
    }
  };

  const accordionTypeDefiner = () => {
    if (currentContact === false || currentContact == null) {
      return false;
    } else {
      return currentContact.groups;
    }
  };

  const handleCancel = () => {
    isCreate ? navigate("/") : navigate(`/contact/${currentContact._id}`);
  };

  const handleSubmit = () => {
    const updadedContactInfos = {
      ...currentContact,
      name: updateContactName,
      phone: updateContactPhone,
      groups: userGroups,
    };

    if (isCreate) {
      postNewContact(updadedContactInfos);
      navigate(`/`);
    } else {
      patchContact(id, updadedContactInfos);
      navigate(`/contact/${id}`);
    }
  };

  return (
    <S.GeralContainer>
      <div>
        <S.ImageContainer>
          <S.AuxDivRelative>
            <S.ContactImage
              src={`https://placehold.co/50?text=${textImageDefiner()}`}
            />
            <S.EditButton>
              <FontAwesomeIcon icon={faPen} />
            </S.EditButton>
          </S.AuxDivRelative>
        </S.ImageContainer>
        <S.ContactInfoContainer>
          <S.ContactIcon>
            <FontAwesomeIcon icon={faUser} />
          </S.ContactIcon>
          {updateContactName !== null && (
            <S.ContactName
              onChange={(e) => setUpdateContactName(e.target.value)}
              value={updateContactName}
              placeholder="Name"
            />
          )}
        </S.ContactInfoContainer>
        <S.ContactInfoContainer>
          <S.ContactIcon>
            <FontAwesomeIcon icon={faPhone} />
          </S.ContactIcon>
          <S.ContactPhoneContainer>
            <S.PhoneTittle>Phone</S.PhoneTittle>
            {updateContactPhone !== null && (
              <S.Phone
                mask="+99 99 999999-9999"
                onChange={(e) => setUpdateContactPhone(e.target.value)}
                value={updateContactPhone}
                placeholder="Cellphone"
              />
            )}
          </S.ContactPhoneContainer>
        </S.ContactInfoContainer>
        <Accordion currentContactGroups={accordionTypeDefiner()} />
      </div>
      <S.SaveCancelButtonContainer>
        <S.Button onClick={handleCancel}>Cancel</S.Button>
        <S.Button onClick={handleSubmit}>Save</S.Button>
      </S.SaveCancelButtonContainer>
    </S.GeralContainer>
  );
};

export default EditCreateContact;
