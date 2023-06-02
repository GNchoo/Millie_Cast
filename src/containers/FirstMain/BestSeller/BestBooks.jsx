import { BookItem } from "../../../containers/Home/BestSeller";
import { BestBooksContainer, Book, BookTitle, BookWriter, ImageContainer, Text } from "./BestBooksSty";

const BestBooks = () => {
  return (
    <BestBooksContainer>
      {BookItem.map((item) => (
        <div style={{ marginBottom: "80px" }}>
          <Text key={item.name}>{item.name}</Text>
          <ImageContainer>
            {item.contents.map((book, index) => (
              <div key={index}>
                <Book src={book.src} alt={book.alt} />
                <BookTitle>{book.text}</BookTitle>
                <BookWriter>{book.writer}</BookWriter>
              </div>
            ))}
          </ImageContainer>
        </div>
      ))}
    </BestBooksContainer>
  );
};

export default BestBooks;
