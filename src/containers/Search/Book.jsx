import * as S from "./bookStyle";

const Book = ({ bookData: book }) => {
  const author = book.authors[0]; // 첫 번째 저자만 선택
  return (
    <div style={{ padding: "10px" }}>
      <S.BookSection>
        <S.BookImage src={book.thumbnail} alt="도서 미리보기" />
        <S.RightSection>
          <section>
            <S.BookTitle>{book.title}</S.BookTitle>
          </section>
          <section>
            <S.BookAuthor>{author}</S.BookAuthor> {/* 첫 번째 저자만 출력 */}
          </section>
          {/* <section>
          <S.BookInfoLabel>설명</S.BookInfoLabel>
          <S.BookInfoText>{book.contents}</S.BookInfoText>
        </section>
        <section>
          <S.BookInfoLabel>상세페이지</S.BookInfoLabel>
          <S.BookInfoText>{book.url}</S.BookInfoText>
        </section> */}
        </S.RightSection>
      </S.BookSection>
    </div>
  );
};

export default Book;
