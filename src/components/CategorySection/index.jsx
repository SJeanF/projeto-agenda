import ContactItem from "../ContactItem";
import * as S from "./styles";

const CategorySection = ({ tittle, contactsList, query }) => {
  return (
    <S.ContactSection>
      <S.Header>
        <S.Tittle>{tittle.toUpperCase()}</S.Tittle>
      </S.Header>
      <S.ItemsContainer>
        {contactsList.map((contact) => (
          <ContactItem query={query} key={contact._id} {...contact} />
        ))}
      </S.ItemsContainer>
    </S.ContactSection>
  );
};

export default CategorySection;
