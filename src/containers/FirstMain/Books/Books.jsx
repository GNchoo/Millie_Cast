import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "./swiper-bundle.css";
import BookSlide1 from "../../../images/book.png";
import BookSlide2 from "../../../images/book2.png";
import BookSlide3 from "../../../images/book3.png";
import { BooksContainer, ImageBox, Inner } from "./BooksSty";
import { TextBox } from "../../../components/Common/TextBoxes";

SwiperCore.use(Autoplay);

const Books = () => {
  useEffect(() => {
    SwiperCore.use([Autoplay]); // Autoplay 를 사용하기 위해 SwiperCore 에 등록
  }, []);

  return (
    <BooksContainer>
      <Inner>
        <TextBox>
          <div className="text1">
            당신을 기다리는
            <br />
            13만권의 도서
          </div>
          <div className="text2">
            첫 달 무료 구독을 통해
            <br />
            어떤 도서가 있는지 확인해보세요
          </div>
        </TextBox>
        <ImageBox>
          <Swiper
            loop={true}
            loopAdditionalSlides={1}
            slidesPerView={1}
            speed={50000}
            simulateTouch={false}
            autoplay={{
              delay: 0, // Adjust the delay to control the speed (e.g., 3000 milliseconds)
              disableOnInteraction: false,
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <img src={BookSlide1} alt="BookSlide1" />
                <img src={BookSlide1} alt="BookSlide1" />
                <img src={BookSlide1} alt="BookSlide1" />
              </SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </div>
          </Swiper>
        </ImageBox>

        <ImageBox dir="rtl">
          <Swiper
            loop={true}
            loopAdditionalSlides={1}
            slidesPerView={1}
            speed={50000}
            simulateTouch={false}
            autoplay={{
              delay: 0, // Adjust the delay to control the speed (e.g., 3000 milliseconds)
              disableOnInteraction: false,
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <img src={BookSlide2} alt="BookSlide2" />
                <img src={BookSlide2} alt="BookSlide2" />
                <img src={BookSlide2} alt="BookSlide2" />
              </SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </div>
          </Swiper>
        </ImageBox>

        <ImageBox>
          <Swiper
            loop={true}
            loopAdditionalSlides={1}
            slidesPerView={1}
            speed={50000}
            simulateTouch={false}
            autoplay={{
              delay: 0, // Adjust the delay to control the speed (e.g., 3000 milliseconds)
              disableOnInteraction: false,
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <img src={BookSlide3} alt="BookSlide3" />
                <img src={BookSlide3} alt="BookSlide3" />
                <img src={BookSlide3} alt="BookSlide3" />
              </SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </div>
          </Swiper>
        </ImageBox>
      </Inner>
    </BooksContainer>
  );
};

export default Books;
