import React, { useState } from "react";
import { TopContainer } from "./../MyInfo/MyInfoSty";
import {
  Agree,
  Box,
  ButtonContainer,
  Inner,
  Notice,
  OverBox,
  ShelfContent,
  Who,
} from "./LeaveUserSty";
import { LeaveNoticeItem } from "./LeaveUserList";
import { useNavigate } from "react-router-dom";
import { ShelfItem } from "./../Myshelf/MyshelfList";
import axios from "axios";
import apiServer from "./../../api/api";

const LeaveUserForm = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleLater = () => {
    navigate("/myinfo");
  };

  const handleAgree = () => {
    setAgree(!agree);
  };

  const handleLeave = async () => {
    if (!agree) {
      alert("탈퇴 유의 사항을 읽고 동의해주세요.");
      return;
    } else {
      if (window.confirm("정말 탈퇴하시겠습니까?") === true) {
        try {
          const token = localStorage.getItem("accessToken");
          const response = await axios.delete(`${apiServer}/api/delete`, {
            headers: {
              Authorization: token,
            },
          });
          // 데이터를 받아와 처리
        } catch (error) {
          console.log(`Error: ${error}`);
        }
        alert("회원 탈퇴 되었습니다.");
        localStorage.clear();
        navigate("/");
      } else {
        return;
      }
    }
  };

  const Favorite = ShelfItem.find((item) => item.name === "즐겨찾기");
  const bookCount = Favorite ? Favorite.books.length : 0;

  return (
    <>
      <TopContainer>회원 탈퇴</TopContainer>
      <Inner>
        <OverBox>서재 이용 현황</OverBox>
        <Box>
          <Who>순수한 지식인_123456의 서재</Who>
          <ShelfContent>
            <p className="gray">즐겨찾기 한 도서</p>
            <p className="black">{bookCount}권</p>
          </ShelfContent>
        </Box>
        <Notice>
          <div className="red">탈퇴 회원 유의 사항</div>
          <div className="contents">
            {LeaveNoticeItem.map((item) => (
              <p>{item.content}</p>
            ))}
          </div>
          <Agree onClick={handleAgree}>
            {!agree ? (
              <button />
            ) : (
              <button className="button2">
                <span class="material-symbols-outlined">done</span>
              </button>
            )}
            <p>
              회원탈퇴에 관한 모든 내용을 숙지하였고, 회원탈퇴를 신청합니다.
            </p>
          </Agree>
        </Notice>
        <ButtonContainer>
          <button class="later" onClick={handleLater}>
            나중에 하기
          </button>
          <button class="continue" onClick={handleLeave}>
            계속 진행하기
          </button>
        </ButtonContainer>
      </Inner>
    </>
  );
};

export default LeaveUserForm;
