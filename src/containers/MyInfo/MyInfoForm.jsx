import React from "react";
import { Inner, Space, TopContainer } from "./MyInfoSty";
import { useNavigate } from "react-router-dom";

const MyInfoForm = () => {
  const navigate = useNavigate();

  const handleLeave = () => {
    navigate("/leave-user");
  };

  return (
    <>
      <TopContainer>내 정보 관리</TopContainer>
      <Inner>
        <Space>
          <p>개인정보 수정</p>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </Space>
        <Space style={{ cursor: "pointer" }} onClick={handleLeave}>
          <p>회원탈퇴</p>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </Space>
      </Inner>
    </>
  );
};

export default MyInfoForm;
