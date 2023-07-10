import React, { useEffect, useState } from "react";
import {
  BtnBox,
  FreeBtn,
  Inner,
  Links,
  LogoutBtn,
  Menu,
  MenuContainer,
  PhoneUser,
  Subscription,
  UserName,
} from "./ManagementSty";
import PhoneIcon from "../../images/phoneMember.png";
import { ManageList } from "./ManageList";
import { useNavigate } from "react-router-dom";
import apiServer from "./../../api/api";
import axios from "axios";

const ManagementForm = () => {
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    alert("로그아웃 성공");
    navigate("/");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${apiServer}/api/member/${localStorage.getItem("id")}`
        );
        const userData = response.data;
        setUserData(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Inner>
        <PhoneUser>
          <img src={PhoneIcon} alt="휴대폰 아이콘" />
          <p>밀리 회원</p>
        </PhoneUser>
        <UserName>
          <p>
            {userData.name}
            <br />
            {userData.subscribe === "true" ? "" : " 독서는 배신하지 않아요!"}
          </p>
        </UserName>
        <Subscription>
          <div className="subscribe">
            <p className="text1">
              {userData.subscribe === "true"
                ? "월 정기구독 이용중"
                : "정기구독을 시작하세요"}
            </p>
            <button>
              <p>구독 관리</p>
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </button>
          </div>
          {userData.subscribe === "true" ? (
            <>
              <p className="text2">
                <p className="PBox">구독기간</p>
                <p>
                  {userData.startDate.split(" ")[0]} ~
                  {userData.endDate.split(" ")[0]}
                </p>
              </p>
              <p className="text2">
                <p className="PBox">다음 결제일</p>
                <p>{userData.endDate.split(" ")[0]}</p>
              </p>
            </>
          ) : (
            <p className="text2">어려운 독서, 시작하면 습관이 됩니다</p>
          )}
        </Subscription>
        <BtnBox>
          <Links to="/product">
            <FreeBtn>무료로 구독 시작하기</FreeBtn>
          </Links>
        </BtnBox>
        <MenuContainer>
          {ManageList.map((item) => (
            <Menu>
              <div key={item.title} className="title">
                {item.title}
              </div>
              {item.content.map((i) =>
                i.to === "" ? (
                  <div key={i.name} className="name">
                    <p>{i.name}</p>
                    <span class="material-symbols-outlined">
                      arrow_forward_ios
                    </span>
                  </div>
                ) : (
                  <Links to={i.to}>
                    <div key={i.name} className="name">
                      <p>{i.name}</p>
                      <span class="material-symbols-outlined">
                        arrow_forward_ios
                      </span>
                    </div>
                  </Links>
                )
              )}
            </Menu>
          ))}
        </MenuContainer>
        <BtnBox>
          <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
        </BtnBox>
      </Inner>
    </>
  );
};

export default ManagementForm;
