import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";
import {
  faLessThan,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import CategorySection from "../../components/CategorySection";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { queryContactByName } from "../../services/contactsApi";

const SearchArea = () => {
  const navigate = useNavigate();

  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  const filterContactsByInitial = (contacts, initial) => {
    return contacts.filter(
      (contact) => contact.name[0].toLowerCase() === initial
    );
  };

  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState(null);

  const handleBack = () => {
    navigate("/");
  };

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    const currentData = await queryContactByName(value);
    setQueryResults(currentData);
  };

  return (
    <S.Container>
      <S.Header>
        <div>
          <S.BackButton onClick={handleBack} type="button">
            <FontAwesomeIcon icon={faLessThan} />
          </S.BackButton>
          <S.SearchBar
            placeholder="Search"
            value={query}
            onChange={handleSearch}
          />
        </div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </S.Header>
      <S.ResultsContainer>
        {queryResults &&
          query !== "" &&
          alphabet.map((letter) => {
            const categoryResult = filterContactsByInitial(
              queryResults,
              letter
            );
            if (categoryResult.length !== 0)
              return (
                <CategorySection
                  query={query}
                  key={`query-category-${letter}`}
                  tittle={letter}
                  contactsList={categoryResult}
                />
              );
            return null;
          })}
      </S.ResultsContainer>
    </S.Container>
  );
};

export default SearchArea;
