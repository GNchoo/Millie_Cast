import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./swiper-bundle.css";

import Book1 from "../images/books/노르웨이의숲.jpg";
import Book2 from "../images/books/달러구트꿈백화점.jpg";
import Book3 from "../images/books/데미안.jpg";
import Book4 from "../images/books/멋진신세계.jpg";
import Book5 from "../images/books/어린왕자.jpg";
import Book6 from "../images/books/인간실격.jpg";

export const BooksContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 30px;
`;

export const Inner = styled.div`
  width: 97%;
  height: 700px;
  margin: 0 auto;
`;

export const TextBox = styled.div`
  width: 500px;
  height: 200px;
  margin: 0 auto;
  margin-top: 80px;
  text-align: center;
  .text1 {
    height: 50%;
    font-size: 50px;
    font-weight: 600;
    color: #333;
  }
  .text2 {
    height: 50%;
    font-size: 23px;
    color: #767676;
  }
`;

export const CanvasContainer = styled.div`
  height: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageBox = styled.div`
  height: 390px;
`;

export const Img = styled.img`
  width: 130px;
  height: 180px;
`;

const Books = () => {
  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");
  //   const images = [Book1, Book2, Book3, Book4, Book5, Book6]; // 이미지 배열
  //   const imageObjects = []; // 이미지 객체 배열

  //   let currentX = 0; // 현재 이미지의 X 좌표
  //   let imageIndex = 0; // 현재 이미지의 인덱스

  //   // 이미지 로드 및 캔버스에 그리기
  //   const loadImage = (src) => {
  //     return new Promise((resolve) => {
  //       const img = new Image();
  //       img.onload = () => {
  //         resolve(img);
  //       };
  //       img.src = src;
  //     });
  //   };

  //   const drawImageOnCanvas = async () => {
  //     const img = await loadImage(images[imageIndex]);
  //     context.clearRect(0, 0, canvas.width, canvas.height);
  //     context.drawImage(img, currentX, 0);

  //     currentX -= 1; // 왼쪽으로 1픽셀씩 이동

  //     if (currentX <= -canvas.width) {
  //       // 이미지가 왼쪽으로 벗어나면
  //       currentX = 0; // X 좌표를 초기화
  //       imageIndex = (imageIndex + 1) % images.length; // 다음 이미지로 전환
  //     }

  //     requestAnimationFrame(drawImageOnCanvas);
  //   };

  //   const loadImages = async () => {
  //     for (let i = 0; i < images.length; i++) {
  //       const img = await loadImage(images[i]);
  //       imageObjects.push(img);
  //     }

  //     requestAnimationFrame(drawImageOnCanvas);
  //   };

  //   loadImages();
  // }, []);

  return (
    <BooksContainer>
      <Inner>
        <TextBox>
          <div className="text1">책 속 세상</div>
          <div className="text2">
            여러분이 좋아하는 책들이 회전하고 있습니다.
          </div>
        </TextBox>
        {/* <CanvasContainer>
          <canvas ref={canvasRef} width="800" height="390" />
        </CanvasContainer> */}
        <ImageBox>
          <Swiper
            spaceBetween={20}
            slidesPerView="6"
            centeredSlides={true}
            loop={true}
            loopAdditionalSlides={1}
            speed={1000}
            autoplay={{
              deley: 0,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay]}
          >
            <div class="swiper-wrapper">
              <SwiperSlide class="swiper-wrapper">
                <Img src={Book1} alt="노르웨이의 숲" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book2} alt="달러구트 꿈 백화점" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book3} alt="데미안" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book4} alt="멋진 신세계" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book5} alt="어린왕자" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book6} alt="인간실격" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book1} alt="노르웨이의 숲" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book2} alt="달러구트 꿈 백화점" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book3} alt="데미안" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book4} alt="멋진 신세계" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book5} alt="어린왕자" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book6} alt="인간실격" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book1} alt="노르웨이의 숲" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book2} alt="달러구트 꿈 백화점" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book3} alt="데미안" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book4} alt="멋진 신세계" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book5} alt="어린왕자" />
              </SwiperSlide>
              <SwiperSlide>
                <Img src={Book6} alt="인간실격" />
              </SwiperSlide>
            </div>
          </Swiper>
        </ImageBox>
      </Inner>
    </BooksContainer>
  );
};

export default Books;
