import { useState } from "react";
import { bookApi } from "../../api/bookApi";
import Book from "./Book";
import * as S from "./searchSty";

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
    <>
      <S.Fixed>
        <S.Search>
          <button onClick={openModal}>
            {filter}
            <span class="material-symbols-outlined">keyboard_arrow_down</span>
          </button>
          <input onChange={changeInput} placeholder="검색어를 입력하세요" />
          <button onClick={searchBook}>
            {searching ? (
              "검색 중.."
            ) : (
              <span class="material-icons">search</span>
            )}
          </button>
        </S.Search>
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
              <li onClick={() => selectFilter("번역가명")}>번역가명</li>
            </ul>
            <button onClick={closeModal}>닫기</button>
          </S.ModalContent>
        </S.ModalWrapper>
      )}
    </>
  );
};

export default Search;
