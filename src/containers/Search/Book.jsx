import * as S from "./bookStyle";

const Book = ({ bookData: book }) => {
  return (
    <S.BookSection>
      <S.BookImage src={book.thumbnail} alt="도서 미리보기" />
      <S.RightSection>
        <section>
          <S.BookInfoLabel>제목</S.BookInfoLabel>
          <S.BookInfoText>{book.title}</S.BookInfoText>
        </section>
        <section>
          <S.BookInfoLabel>저자</S.BookInfoLabel>
          <div>
            {book.authors.map((name) => (
              <S.BookInfoText key={name}>{name}</S.BookInfoText>
            ))}
          </div>
        </section>
        <section>
          <S.BookInfoLabel>설명</S.BookInfoLabel>
          <S.BookInfoText>{book.contents}</S.BookInfoText>
        </section>
      </S.RightSection>
    </S.BookSection>
  );
};

export default Book;
