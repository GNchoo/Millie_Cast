import React from "react";
import { AudioBookContainer, Button, Inner } from "./ObjectBookSty";
import { TextBox } from "../../Common/TextBoxes";

const ObjectBook = () => {
  return (
    <AudioBookContainer>
      <Inner>
        <TextBox>
          <div className="text1">
            나만의 공간을 아름답게
            <br />
            채워주는 오브제북
          </div>
          <div className="text2">
            <p>
              이미지와 사운드로 극대화
              <br />
              책의 감성을 오롯이 느껴보세요.
            </p>
          </div>
        </TextBox>
        <iframe
          title="objectBook"
          src="https://d3udu241ivsax2.cloudfront.net/common/video/brand/objectbook.mp4"
          width="100%"
          height="394px"
        />
        <Button>
          <div>오브제북 보러가기</div>
          <span class="material-symbols-outlined">arrow_forward</span>
        </Button>
      </Inner>
    </AudioBookContainer>
  );
};

export default ObjectBook;
