import React from "react";
import FooterForm from "../../components/Home/Footer/FooterForm";

export const FooterItem = [
  {
    title: "이용약관>",
    to: "https://corp.millie.co.kr/policy/terms/?nav_hidden=y&theme=light",
  },
  {
    title: "개인정보처리방침>",
    to: "https://corp.millie.co.kr/policy/privacy/?nav_hidden=y&theme=light",
  },
  {
    title: "청소년보호정책>",
    to: "https://corp.millie.co.kr/policy/youth/?nav_hidden=y&theme=light",
  },
  {
    title: "고객센터>",
    to: "https://www.millie.co.kr/v3/customer?nav_hidden=y",
  },
  {
    title: "B2B 문의>",
    to: "https://www.millie.co.kr/h4/b2b/",
  },
  {
    title: "콘텐츠 제휴문의>",
    to: "mailto:contents@millie.town",
  },
  {
    title: "뷰터 다운로드>",
    to: "https://www.millie.co.kr/v3/customer/download?nav_hidden=y",
  },
  {
    title: "회사 소개>",
    to: "https://www.millie.town/",
  },
];

const Footer = () => {
  return <FooterForm></FooterForm>;
};

export default Footer;
