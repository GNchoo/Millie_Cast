import { useState } from "react";
import { bookApi } from "../Book/bookApi";
import Book from "./Book";
import * as S from "./searchStyle";

const Search = () => {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);
  const [searching, setSearching] = useState(false);

  const changeInput = (e) => {
    setSearchData(e.target.value);
  };

  /*
  useEffect(() => {
    if (searchData) {
      bookApi(searchData)
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          alert('err!!');
        });
    }
  }, [searchData]);
  */

  const searchBook = () => {
    if (searchData && !searching) {
      setSearching(true);

      bookApi(searchData)
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
            <input onChange={changeInput} placeholder="책 제목을 입력하세요." />
            <button onClick={searchBook}>{searching ? "검색 중.." : "검색"}</button>
          </S.SearchBar>
        </S.Header>
      </S.Fixed>
      <S.BookGrid>
        {data.map((book) => (
          <Book key={book.isbn} bookData={book} />
        ))}
      </S.BookGrid>
    </main>
  );
};

export default Search;
