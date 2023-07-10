import { Color, Inner, Texts } from "./SliderSty";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Sliders = () => {
  return (
    <>
      <Inner>
        <Swiper
          spaceBetween={15}
          slidesPerView={2}
          pagination={false}
          autoplay={{ delay: 5000 }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Color
              style={{
                backgroundColor: "#5c88da",
              }}
            >
              <Texts>
                <p className="text1">
                  귀여워서 화제!
                  <br />
                  배경화면 받아가세요
                </p>
                <p className="text2">절찬리에 연재중! 멍디의 '애개육아' </p>
              </Texts>
              <img
                src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/647d927a25c9a.png"
                alt="슬라이드1"
              />
            </Color>
          </SwiperSlide>
          <SwiperSlide>
            <Color
              style={{
                backgroundColor: "#ca8552",
              }}
            >
              <Texts>
                <p className="text1">
                  인생 책 추천하고
                  <br />
                  선물 받아가세요!
                </p>
                <p className="text2">추첨을 통해 북레스트를 드려요</p>
              </Texts>
              <img
                src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/647861c93617c.png"
                alt="슬라이드2"
              />
            </Color>
          </SwiperSlide>
          <SwiperSlide>
            <Color
              style={{
                backgroundColor: "#eb688f",
              }}
            >
              <Texts>
                <p className="text1">
                  '떠남'을 주제로 한
                  <br />
                  독립출판물 5권
                </p>
                <p className="text2">나만 알고 싶은 특별한 책이 가득!</p>
              </Texts>
              <img
                src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/647fd5e5115ad.png"
                alt="슬라이드3"
              />
            </Color>
          </SwiperSlide>
          <SwiperSlide>
            <Color
              style={{
                backgroundColor: "#475a8e",
              }}
            >
              <Texts>
                <p className="text1">
                  열정 가득한
                  <br />
                  국민 에디터들이 모였다
                </p>
                <p className="text2">밀리 에디터 클럽을 소개할게요</p>
              </Texts>
              <img
                src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/6459eab77483a.png"
                alt="슬라이드4"
              />
            </Color>
          </SwiperSlide>
          <SwiperSlide>
            <Color
              style={{
                backgroundColor: "#dcaa03",
              }}
            >
              {" "}
              <Texts>
                <p className="text1">
                  대상 1억 원의
                  <br />
                  주인공을 찾습니다
                </p>
                <p className="text2">KT스튜디오지니 시리즈 공모전</p>
              </Texts>
              <img
                src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/6417b68a310f1.png"
                alt="슬라이드5"
              />
            </Color>
          </SwiperSlide>
          <SwiperSlide>
            <Color
              style={{
                backgroundColor: "#3684cf",
              }}
            >
              <Texts>
                <p className="text1">
                  일상을 멋있게 만드는
                  <br />
                  다섯가지 독서법
                </p>
                <p className="text2">독서로 가치있는 일상을 만들어보세요!</p>
              </Texts>
              <img
                src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/62fd954b612f7.png"
                alt="슬라이드6"
              />
            </Color>
          </SwiperSlide>
        </Swiper>
      </Inner>
    </>
  );
};
export default Sliders;
