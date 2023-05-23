import React from "react";
import { styled } from "styled-components";
import { BookItem } from "../containers/BestSeller";

export const BestBooksContainer = styled.div`
  width: 1100px;
  height: 100%;
`;

const BestBooks = () => {
  return (
    <BestBooksContainer>
      {BookItem.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </BestBooksContainer>
  );
};

export default BestBooks;
