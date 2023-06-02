import React, { useState } from "react";
import { Inner, ReviewContainer } from "./ReviewSty";
import ReviewImg from "../../../images/review.png";
import ReactPlayer from "react-player";
import { TextBox } from "../../../components/Common/TextBoxes";

const ReviewStory = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlay = () => {
    setPlayVideo(!playVideo);
  };
  return (
    <ReviewContainer>
      <Inner>
        {playVideo ? (
          <div className="img">
            <div className="video">
              <ReactPlayer
                className="player"
                url={"https://youtube.com/shorts/c-XG8k_w1LM?feature=share"}
                width="450px"
                height="450px"
                position="absolute"
                playing={true}
                muted={true}
                controls={false}
              />
            </div>
          </div>
        ) : (
          <div className="img">
            <img className="poster" src={ReviewImg} alt={ReviewImg} />
            <img
              className="playbutton"
              src="https://d3udu241ivsax2.cloudfront.net/v3/images/home/btn-video-play.e80115f69b4cc27b96f0f789f1514203.svg"
              alt="재생버튼"
              onClick={handlePlay}
            />
          </div>
        )}

        <TextBox>
          <div className="text1">
            내돈내산
            <br />
            밀리 구독 이야기
          </div>
          <div className="text2">
            패션 브랜드 대표부터 <br /> 고등학교 교사까지!
          </div>
        </TextBox>
      </Inner>
    </ReviewContainer>
  );
};

export default ReviewStory;
