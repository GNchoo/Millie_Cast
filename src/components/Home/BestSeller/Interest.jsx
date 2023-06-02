import React, { useState } from "react";
import { BookItem2 } from "../../../containers/Home/BestSeller";
import { Books, Category, InterestContainer, LinkButton } from "./InterestSty";
import { Book, BookTitle, BookWriter } from "./BestBooksSty";

const Interest = () => {
  const [selectedCategory, setSelectedCategory] = useState("주식");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <InterestContainer>
      <Category>
        {BookItem2.map((item) => (
          <LinkButton
            key={item.name}
            onClick={() => handleCategoryClick(item.name)}
            selected={selectedCategory === item.name}
          >
            {item.name}
          </LinkButton>
        ))}
      </Category>
      <Books>
        {BookItem2.map((item) => (
          <>
            {selectedCategory === item.name &&
              item.contents.map((book, index) => (
                <div key={index}>
                  <Book src={book.src} alt={book.alt} />
                  <BookTitle>{book.text}</BookTitle>
                  <BookWriter>{book.writer}</BookWriter>
                </div>
              ))}
          </>
        ))}
      </Books>
    </InterestContainer>
  );
};

export default Interest;
