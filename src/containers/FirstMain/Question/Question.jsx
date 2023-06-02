import React, { useState } from "react";
import {
  Inner,
  QuestionBox,
  QuestionContainer,
  Questions,
  Title,
} from "./QuestionSty";

const QuestionItem = [
  {
    question: "안쓰면 정말 환불해주나요?",
    answer:
      "물론입니다. 결제 후 콘텐츠 다운로드 및 열람을 하지 않으셨다면 전액 환불해 드리고 있어요.<br/> [밀리>관리>구독관리>결제 내역 확인]에서 직접 환불이 가능하며,<br/> 해결이 어려운 경우 고객센터로 문의해 주세요.",
  },
  {
    question: "구독 중 해지 할 수 있나요? 수수료는 없나요?",
    answer:
      "다음달 부터 결제되지 않도록 수수료 없이 언제든지 해지하실 수 있습니다. <br/> [밀리>관리>구독관리>자동결제 해지] 메뉴를 통해 기간에 상관없이 직접 가능해요.",
  },
  {
    question: "무료 혜택은 누구나 받을 수 있나요?",
    answer:
      "네, 밀리 회원이라면 누구나 첫 정기구독 신청 시 1회 첫 달 무료 혜택이 제공됩니다.<br/> 단, 종이책+전자책 정기구독의 경우 첫 주 무료 혜택만 제공됩니다.<br/> 아직 신청하지 않으셨다면 바로 구독신청으로 혜택을 받아보세요.",
  },
  {
    question: "어떤 기기에서 사용할 수 있나요?",
    answer:
      "아래 기기와 버전에서 밀리를 사용할 수 있습니다.<br/><br/><br/>-휴대폰/태블릿: iOS13, Android 6 이상 지원<br/>-PC: MacYosemite, Window 10 이상 지원<br/>-E ink: Android 4.4 이상 지원<br/>(크레마 그랑데, 크레마 카르타G, 이노스페이스원 공식 판매 기기, 교보 Sam 7.8 등)",
  },
];

const Question = () => {
  const [targetId, setTargetId] = useState(null);
  const [clickButton, setClickButton] = useState({});

  const handleClick = (question) => {
    setClickButton((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
    setTargetId(question);
  };

  return (
    <QuestionContainer>
      <Inner>
        <Title>자주 묻는 질문</Title>
        <QuestionBox>
          {QuestionItem.map((item) => (
            <Questions
              key={item.question}
              onClick={() => handleClick(item.question)}
              selected={clickButton[item.question]}
            >
              <div className="text">
                <p>{item.question}</p>
                <span class="material-symbols-outlined">
                  {!clickButton[item.question]
                    ? "keyboard_arrow_down"
                    : "keyboard_arrow_up"}
                </span>
              </div>
              <div
                style={{
                  borderBottom: "1px solid #626161",
                  marginBottom: "10px",
                }}
              ></div>
              <p dangerouslySetInnerHTML={{ __html: item.answer }} />
            </Questions>
          ))}
        </QuestionBox>
      </Inner>
    </QuestionContainer>
  );
};

export default Question;
