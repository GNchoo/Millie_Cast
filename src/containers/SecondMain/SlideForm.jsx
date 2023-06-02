import React from "react";
import {
  Boxes,
  ImgBox,
  SlideContainer,
  SlideImg,
  TextBox,
} from "./SlideFormSty";

const SlideForm = () => {
  return (
    <SlideContainer>
      <SlideImg>
        <Boxes>
          <ImgBox>
            <img
              src="https://d2j6uvfek9vas1.cloudfront.net/hero_banner/6476aeb20ef90.jpg"
              alt="서울국제도서전"
            />
          </ImgBox>
          <TextBox></TextBox>
        </Boxes>
      </SlideImg>
    </SlideContainer>
  );
};

export default SlideForm;
