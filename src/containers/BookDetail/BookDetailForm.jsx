import React, { useEffect, useState } from "react";
import {
  BookBox,
  BookContainer,
  Books,
  ButtonBox,
  Info,
  InfoBox,
  Inner,
  Intro,
  Introduction,
  LeftBox,
  ModalContent,
  ModalWrapper,
  More,
  MoreInfo,
  Options,
  ReadButton,
  RightBox,
  SameAuthor,
  Text,
} from "./BookDetailSty";
import MyshelfIcon from "../../images/icon_myshelf.png";
import DownloadIcon from "../../images/icon_download.png";
import StarIcon from "../../images/icon_star.png";
import FullStarIcon from "../../images/icon_full_star.png";
import ShareIcon from "../../images/icon_share.png";
import PostIcon from "../../images/icon_post.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import getApiKey from "../../api/restApi";
import NoImage from "../../images/이미지준비중.jpg";
import apiServer from "./../../api/api";

const BookDetailForm = () => {
  let { id } = useParams();
  const [clickMore, setClickMore] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [bookItems, setBookItems] = useState([]);
  const [otherBooks, setOtherBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState("");
  const [isIsbn, setIsIsbn] = useState("");
  const navigate = useNavigate();
  const restApi = getApiKey();

  const handleMore = () => {
    setClickMore(!clickMore);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const windowOpen = () => {
    const win = window.open(
      `/viewer/${id}`,
      "_blank",
      "width=1200, height=800"
    );
    win.currentBook = currentBook;
  };

  // 책정보 가져오기
  const getBook = async () => {
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v3/search/book?query=${id}`,
        {
          headers: {
            Authorization: `KakaoAK ${restApi}`,
          },
        }
      );
      const data = response.data.documents;
      console.log(data);
      setCurrentBook(data);
      setBookItems(data.slice(0, 1));
      // ISBN만 꺼내기
      const isbns = data.map((book) => book.isbn);
      setIsIsbn(isbns);
    } catch (error) {
      console.log(error);
    }
  };

  // 같은작가의 다른 책
  const getOtherBooks = async () => {
    const author = bookItems[0]?.authors[0] || "";
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v3/search/book?query=${author}`,
        {
          headers: {
            Authorization: `KakaoAK ${restApi}`,
          },
        }
      );
      const data = response.data.documents;
      setOtherBooks(
        data.filter((book) => book.isbn.split(" ")[0] !== id).slice(0, 7)
      ); // 최대 7권만 보여주기
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (bookItems.length > 0) {
      getOtherBooks();
    }
  }, [bookItems]);

  //즐겨찾기
  const handleFavorite = async () => {
    try {
      const response = await axios.post(`${apiServer}/bookmark/add`, {
        memberId: `${localStorage.getItem("id")}`,
        bookinfoId: isIsbn,
      });
      console.log(response.data); // 서버 응답 데이터 출력
      setFavorite(!favorite);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBookClick = (isbn) => {
    navigate(`/bookDetail/${isbn}`);
  };

  useEffect(() => {
    getBook();
  }, [id]);

  return (
    <>
      <Inner>
        {bookItems.map((item) => (
          <LeftBox key={item.isbn}>
            <BookContainer>
              {item.thumbnail === "" ? (
                <img src={NoImage} alt="책 표지" />
              ) : (
                <img src={item.thumbnail} alt="책 표지" />
              )}
              <Info>
                <div>
                  <p className="title">{item.title}</p>
                  <p className="authors">{item.authors}</p>
                </div>
                <MoreInfo>
                  <InfoBox className="lala">
                    <div className="gray">출판사</div>
                    <div className="black">{item.publisher}</div>
                  </InfoBox>
                  <InfoBox>
                    <div className="gray">출간일</div>
                    <div className="black">
                      {item.datetime.split("T").shift()}
                    </div>
                  </InfoBox>
                  <InfoBox>
                    <div className="gray">ISBN</div>
                    <div className="black">{item.isbn}</div>
                  </InfoBox>
                </MoreInfo>
              </Info>
            </BookContainer>
            <Introduction>
              <Intro>책 소개</Intro>
              <Text selected={clickMore}>{item.contents}</Text>
              <More>
                <p onClick={handleMore}>{!clickMore ? "더보기" : "접어보기"}</p>
              </More>
            </Introduction>
            <SameAuthor>
              <Intro>이 저자 역자의 다른 책</Intro>
              <Books>
                {otherBooks.map((i) => (
                  <BookBox
                    key={i.isbn}
                    onClick={() => handleBookClick(i.isbn.split(" ")[0])}
                  >
                    <div className="thumbnail">
                      {item.thumbnail === "" ? (
                        <img src={NoImage} alt="책 표지" />
                      ) : (
                        <img src={i.thumbnail} alt="책 표지" />
                      )}
                    </div>
                    <div className="title">{i.title}</div>
                    <div className="author">{i.authors}</div>
                  </BookBox>
                ))}
              </Books>
            </SameAuthor>
          </LeftBox>
        ))}
        <RightBox>
          <Options>
            <div className="option">
              <img src={MyshelfIcon} alt="아이콘" />
              <span>내 서재에 담기</span>
            </div>
            <div className="option">
              <img src={DownloadIcon} alt="아이콘" />
              <span>다운로드</span>
            </div>
            <div className="option" onClick={handleFavorite}>
              {!favorite ? (
                <img src={StarIcon} alt="아이콘" />
              ) : (
                <img src={FullStarIcon} alt="아이콘" />
              )}
              <span>My Favorite</span>
            </div>
            <div className="option">
              <img src={ShareIcon} alt="아이콘" />
              <span>공유하기</span>
            </div>
            <div className="option">
              <img src={PostIcon} alt="아이콘" />
              <span>포스트 쓰기</span>
            </div>
          </Options>
          <ReadButton>
            <button
              onClick={
                localStorage.getItem("subscribe") === "true"
                  ? windowOpen
                  : openModal
              }
            >
              바로 읽기
            </button>
          </ReadButton>
        </RightBox>
      </Inner>

      {isModalOpen && (
        <ModalWrapper>
          <ModalContent>
            <h2>아직 구독하고 있지 않아요</h2>
            <p>
              구독 시작하고 다양한 독서 콘텐츠를
              <br />
              무제한으로 만나보세요!
              <br />첫 사용이라면 무료로 시작할 수 있어요.
            </p>
            <img
              src="https://d3udu241ivsax2.cloudfront.net/v3/images/common/subscribe-illust-new.61767b1a5c96c47dcc338bb8f7351b6a.png"
              alt="밀리 이미지"
            />
            <ButtonBox>
              <button className="close" onClick={closeModal}>
                닫기
              </button>
              <button
                className="subscribe"
                onClick={() => navigate("/product")}
              >
                구독하러 가기
              </button>
            </ButtonBox>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default BookDetailForm;
