import React from "react";
import ReactPlayer from "react-player";
import { styled } from "styled-components";

export const AudioBookContainer = styled.div`
  width: 100%;
  height: 900px;
  background-color: #f7f7f7;
`;

export const Inner = styled.div`
  width: 700px;
  height: 900px;
  margin: 0 auto;
  overflow: auto;
`;

export const TextBox = styled.div`
  width: 500px;
  height: 200px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 30px;
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
    p {
      margin-bottom: 8px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  margin: 0 auto;
  width: 220px;
  height: 50px;
  border: none;
  outline: 1px solid #767676;
  border-radius: 30px;
  background-color: transparent;
  margin-top: 30px;
  padding: 13px;
  font-size: 16px;
  color: #767676;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s;
  div {
    margin-top: 3px;
  }
  :hover& {
    background-color: #767676;
    color: #f7f7f7;
  }
`;

const AudioBook = () => {
  return (
    <AudioBookContainer>
      <Inner>
        <TextBox>
          <div className="text1">오디오북</div>
          <div className="text2">
            <p>소리를 통해 생명을 불어넣는</p>
            <p>말의 세계에 빠져보세요.</p>
          </div>
        </TextBox>
        <ReactPlayer
          className="player"
          url={"https://youtu.be/JJydPS3zyvo"}
          width="100%"
          height="430px"
          playing={false}
          muted={true}
          controls={false}
        />
        <Button>
          <div>오디오북 들으러가기</div>
          <span class="material-symbols-outlined">arrow_forward</span>
        </Button>
      </Inner>
    </AudioBookContainer>
  );
};

export default AudioBook;
