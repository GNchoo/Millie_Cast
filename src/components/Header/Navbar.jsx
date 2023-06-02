import React from "react";
import NavbarForm from "./NavbarForm";

export const MainItems = [
  {
    title: "투데이",
    to: "/main",
    subitems: [
      {
        name: "NOW",
        idx: 1,
      },
      {
        name: "스토리",
        idx: 2,
      },
      {
        name: "밀리로드",
        idx: 3,
      },
    ],
  },
  {
    title: "피드",
    to: "/main",
    subitems: [
      {
        name: "추천",
        idx: 1,
      },
      {
        name: "팔로잉",
        idx: 2,
      },
    ],
  },
  {
    title: "검색",
    to: "/search",
    subitems: [],
  },
  {
    title: "내서재",
    to: "/main",
    subitems: [],
  },
  {
    title: "관리",
    to: "/main",
    subitems: [],
  },
];

const Navbar = () => {
  return <NavbarForm></NavbarForm>;
};

export default Navbar;
