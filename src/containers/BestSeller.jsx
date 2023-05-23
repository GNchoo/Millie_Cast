import React from "react";
import { styled } from "styled-components";
import BestBooks from "../BestSeller/BestBooks";

import Book1 from "../images/books/노르웨이의숲.jpg";
import Book2 from "../images/books/달러구트꿈백화점.jpg";
import Book3 from "../images/books/데미안.jpg";
import Book4 from "../images/books/멋진신세계.jpg";
import Book5 from "../images/books/어린왕자.jpg";
import Book6 from "../images/books/인간실격.jpg";

export const BookItem = [
  {
    name: "지금 서점 베스트 셀러",
    contents: [
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
      {
        src: Book2,
        alt: "a",
        text: "달러구트 꿈 백화점",
      },
      {
        src: Book3,
        alt: "a",
        text: "데미안",
      },
      {
        src: Book4,
        alt: "a",
        text: "멋진 신세계",
      },
      {
        src: Book5,
        alt: "a",
        text: "어린 왕자",
      },
      {
        src: Book6,
        alt: "a",
        text: "인간 실격",
      },
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
    ],
  },

  {
    name: "한 달 이내 출간된 책",
    contents: [
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
      {
        src: Book2,
        alt: "a",
        text: "달러구트 꿈 백화점",
      },
      {
        src: Book3,
        alt: "a",
        text: "데미안",
      },
      {
        src: Book4,
        alt: "a",
        text: "멋진 신세계",
      },
      {
        src: Book5,
        alt: "a",
        text: "어린 왕자",
      },
      {
        src: Book6,
        alt: "a",
        text: "인간 실격",
      },
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
    ],
  },

  {
    name: "오디오북 BEST",
    contents: [
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
      {
        src: Book2,
        alt: "a",
        text: "달러구트 꿈 백화점",
      },
      {
        src: Book3,
        alt: "a",
        text: "데미안",
      },
      {
        src: Book4,
        alt: "a",
        text: "멋진 신세계",
      },
      {
        src: Book5,
        alt: "a",
        text: "어린 왕자",
      },
      {
        src: Book6,
        alt: "a",
        text: "인간 실격",
      },
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
    ],
  },

  {
    name: "독점 소설",
    contents: [
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
      {
        src: Book2,
        alt: "a",
        text: "달러구트 꿈 백화점",
      },
      {
        src: Book3,
        alt: "a",
        text: "데미안",
      },
      {
        src: Book4,
        alt: "a",
        text: "멋진 신세계",
      },
      {
        src: Book5,
        alt: "a",
        text: "어린 왕자",
      },
      {
        src: Book6,
        alt: "a",
        text: "인간 실격",
      },
      {
        src: Book1,
        alt: "a",
        text: "노르웨이의 숲",
      },
    ],
  },
];

export const BestSellerContainer = styled.div`
  width: 100%;
`;

export const Inner = styled.div`
  width: 1100px;
  height: 2500px;
  margin: 0 auto;
`;

export const TextBox = styled.div`
  width: 500px;
  height: 300px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 30px;
  text-align: center;
  .text1 {
    height: 50%;
    font-size: 50px;
    font-weight: 600;
    color: #333;
    p {
      margin-bottom: 8px;
    }
  }
  .text2 {
    height: 50%;
    font-size: 23px;
    color: #767676;
    p {
      margin-bottom: 8px;
    }
  }
`;

const BestSeller = () => {
  return (
    <BestSellerContainer>
      <Inner>
        <TextBox>
          <div className="text1">
            <p>모든 책이 무제한</p>
            <p>9,900원</p>
          </div>
          <div className="text2">
            <p>10년치 베스트셀러</p>
            <p>신간 오디오북 장르 소설까지</p>
          </div>
        </TextBox>
        <BestBooks />
      </Inner>
    </BestSellerContainer>
  );
};

export default BestSeller;
