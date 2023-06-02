import React from "react";
import { Button, FreeButtonContainer } from "./FreeButtonSty";
import { useNavigate } from "react-router-dom";

const FreeButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/intro");
  };
  return (
    <FreeButtonContainer>
      <Button onClick={handleClick}>첫 달 무료로 독서 시작하기</Button>
    </FreeButtonContainer>
  );
};

export default FreeButton;
