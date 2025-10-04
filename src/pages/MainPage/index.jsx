import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import CategorySection from "../../components/CategorySection";
import { getAllContacts } from "../../services/contactsApi";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const [allContacts, setAllContacts] = useState([]);

  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  useEffect(() => {
    async function fetchContacts() {
      const contacts = await getAllContacts();
      setAllContacts(contacts);
    }

    fetchContacts();
  }, []);

  const filterContactsByInitial = (contacts, initial) => {
    return contacts.filter(
      (contact) => contact.name[0].toLowerCase() === initial
    );
  };

  const handleSearch = () => {
    navigate("/search");
  };

  const handleCreate = () => {
    navigate("/create-contact");
  };

  return (
    <S.Container>
      <S.Header>
        <S.Tittle>Contacts</S.Tittle>
        <S.HeaderOptionsContainer>
          <FontAwesomeIcon onClick={handleCreate} icon={faPlus} />
          <FontAwesomeIcon onClick={handleSearch} icon={faMagnifyingGlass} />
        </S.HeaderOptionsContainer>
      </S.Header>
      <S.Main>
        {alphabet.map((letter) => (
          <CategorySection
            key={`category-${letter}`}
            tittle={letter}
            contactsList={filterContactsByInitial(allContacts, letter)}
          />
        ))}
      </S.Main>
    </S.Container>
  );
};

export default MainPage;
