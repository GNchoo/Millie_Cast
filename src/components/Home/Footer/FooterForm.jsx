import React, { useState } from "react";
import {
  FBody1,
  FBody2,
  FFooter,
  FHeader,
  FooterContainer,
  Inner,
  Links,
} from "./FooterSty";
import Instagram from "../../../images/instagram.png";
import Youtube from "../../../images/youtube.png";
import Kakao from "../../../images/kakao.png";
import { Link } from "react-router-dom";
import { FooterItem } from "../../../containers/Home/Footer";

const FooterForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FooterContainer>
      <Inner>
        <FHeader>
          <p>(주) 밀리의 서재</p>
          <div>
            <Link to="https://www.instagram.com/millie_bookclub/">
              <img src={Instagram} alt="instagram" />
            </Link>
            <Link to="https://www.youtube.com/channel/UC6bk8AaEXA1hBnGXcLyj1QQ">
              <img src={Youtube} alt="youtube" />
            </Link>
            <Link to="https://pf.kakao.com/_MhGhC">
              <img src={Kakao} alt="kakao" />
            </Link>
          </div>
        </FHeader>
        <FBody1>
          <div className="click" onClick={handleClick}>
            <p>{!isOpen ? "사업자 정보 펼쳐 보기" : "사업자 정보 닫기"}</p>
            <span class="material-symbols-outlined">
              {!isOpen ? "keyboard_arrow_down" : "keyboard_arrow_up"}
            </span>
          </div>
          {isOpen && (
            <div className="open" selected={isOpen}>
              <p>
                대표이사 : 서영택&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                사업자등록번호 : 423-88-00370
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;호스팅 제공자 : (주)밀리의
                서재
              </p>
              <p>통신판매업 신고번호 : 2016-서울마포-2012호</p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;주소 : 서울특별시 마포구
                양화로 45, 16층 (메세나폴리스 세아타워)
              </p>
              <p className="Kim">
                고객정보보호 책임자 : 김태형(beiron@millie.town)
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;마케팅 제휴 문의 :
                business@millie.town
              </p>
            </div>
          )}
        </FBody1>
        <FBody2>
          {FooterItem.map((item) => (
            <Links to={item.to}>{item.title}</Links>
          ))}
        </FBody2>
        <FFooter>Copyright © 2022 밀리의 서재 All Rights Reserved.</FFooter>
      </Inner>
    </FooterContainer>
  );
};

export default FooterForm;
