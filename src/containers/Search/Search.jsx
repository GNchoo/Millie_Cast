import { useState } from "react";
import { bookApi } from "../../api/bookApi";
import Book from "./Book";
import * as S from "./searchStyle";

const Search = () => {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);
  const [searching, setSearching] = useState(false);
  const [filter, setFilter] = useState("전체");
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  const changeInput = (e) => {
    setSearchData(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectFilter = (selectedFilter) => {
    setFilter(selectedFilter);
    closeModal();
  };

  const searchBook = () => {
    if (searchData && !searching) {
      setSearching(true);

      bookApi(searchData, filter)
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          alert("err!!");
        });

      setSearching(false);
    }
  };

  return (
    <main>
      <S.Fixed>
        <S.Header>
          <S.SearchBar>
            <button onClick={openModal}>{filter}</button>
            <input onChange={changeInput} placeholder="검색어를 입력하세요" />

            <button onClick={searchBook}>{searching ? "검색 중.." : "검색"}</button>
          </S.SearchBar>
        </S.Header>
      </S.Fixed>
      <S.BookGrid>
        {data.map((book) => (
          <Book key={book.isbn} bookData={book} />
        ))}
      </S.BookGrid>
      {isModalOpen && ( // 모달 컴포넌트
        <S.ModalWrapper>
          <S.ModalContent>
            <h2>검색 대상</h2>
            <ul>
              <li onClick={() => selectFilter("전체")}>전체</li>
              <li onClick={() => selectFilter("책 제목")}>책 제목</li>
              <li onClick={() => selectFilter("저자명")}>저자명</li>
              <li onClick={() => selectFilter("출판사명")}>출판사명</li>
              <li onClick={() => selectFilter("리더명")}>리더명</li>
            </ul>
            <button onClick={closeModal}>닫기</button>
          </S.ModalContent>
        </S.ModalWrapper>
      )}
    </main>
  );
};

export default Search;
