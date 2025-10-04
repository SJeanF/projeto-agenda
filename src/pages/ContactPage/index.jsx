import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";
import ContactInfos from "../../components/ContactViewInfos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import ContactOptions from "../../components/ContactOptions";
import { useEffect, useState } from "react";
import { getContactById } from "../../services/contactsApi";
import ConfirmPopUp from "../../components/ConfirmPopUp";
import { useDispatch } from "react-redux";
import { deactiveConfirmPopUp } from "../../redux/confirmPopUpReducer/confirmPopUpSlice";
import { deactiveNotification } from "../../redux/notificationPopUpReducer/notificationPopUpSlice";

const ContactPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchContact() {
      const currentContact = await getContactById(id);
      setCurrentData(currentContact);
    }
    dispatch(deactiveNotification());
    dispatch(deactiveConfirmPopUp());
    fetchContact();
  }, [id, dispatch]);

  return (
    <S.Container>
      <ConfirmPopUp />
      <S.Top>
        <S.BackButton onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faLessThan} />
        </S.BackButton>
        {currentData && <ContactInfos {...currentData} />}
      </S.Top>
      {currentData && <ContactOptions currentId={currentData._id} />}
    </S.Container>
  );
};

export default ContactPage;
