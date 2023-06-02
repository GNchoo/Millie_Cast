import React from "react";
import Audio from "../../images/audio.png";
import Viewer from "../../images/viewer.png";
import Selects from "../FirstMain/Select/Selects";

export const SelectItem = [
  {
    title: "오디오북",
    src: Audio,
    text: "세상에서 가장 교양있는 수면제",
    contents: [
      {
        number: 1,
        function: "하루의 시작과 마무리를 오디오북과 함께",
        content: "지하철에서도, 잠들기 전에도 독서하세요",
        src: "https://d3udu241ivsax2.cloudfront.net/common/video/brand/audiobook-content04.png?v4",
      },
      {
        number: 2,
        function: "귀로 듣다가 눈으로도 같이 보면",
        content: "더 내용이 잘 이해돼요",
        src: "https://d3udu241ivsax2.cloudfront.net/common/video/brand/audiobook2.mp4?v1",
      },
      {
        number: 3,
        function: "30분만에 책 요약",
        content: "핵심만 쏙 골라 읽어주는 오디오북",
        src: "https://d3udu241ivsax2.cloudfront.net/common/video/brand/audiobook-content01.png?v1",
      },
      {
        number: 4,
        function: "이제훈부터 옥주현까지",
        content: "셀럽이 읽어주는 오디오북",
        src: "https://d3udu241ivsax2.cloudfront.net/common/video/brand/audiobook-content02.png?v1",
      },
    ],
  },
  {
    title: "밀리 뷰어",
    text: "독서를 위한 가장 완벽한 도구",
    src: Viewer,
    contents: [
      {
        number: 1,
        function: "시선 추적 기능",
        content: "눈동자로 페이지를 넘길 수 있어요",
        src: "https://d3udu241ivsax2.cloudfront.net/common/video/brand/sight2.mp4?v1",
      },
      {
        number: 2,
        function: "어느 기기에서도 OK",
        content: "스마트폰, 태블릿, PC, E ink 기기까지",
        src: "https://d3udu241ivsax2.cloudfront.net/common/video/brand/viewer-content01.png?v1",
      },
      {
        number: 3,
        function: "다크 모드",
        content: "저자책이 눈 아프다는 편견은 버려요",
        src: "https://d3udu241ivsax2.cloudfront.net/common/video/brand/darkmode2.mp4",
      },
      {
        number: 4,
        function: "자유로운 보기 설정",
        content: "줄간격부터 폰트까지 내 마음대로 설정하면<br/> 더욱 편한 독서를 할 수 있어요",
        src: "https://d3udu241ivsax2.cloudfront.net/common/video/brand/viewer_system2.mp4?v1",
      },
    ],
  },
];

const Select = () => {
  return (
    <div>
      <Selects />
    </div>
  );
};

export default Select;
