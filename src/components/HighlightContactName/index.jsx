import { useEffect } from "react";
import * as S from "./styles";

const HighlightContactName = ({ children, query }) => {
  if (!query) return <S.BaseText>{children}</S.BaseText>;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = children.split(regex);

  return (
    <S.BaseText>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <S.HighlightedPart key={index}>{part}</S.HighlightedPart>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </S.BaseText>
  );
};

export default HighlightContactName;
