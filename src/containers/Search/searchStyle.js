import styled from "styled-components";

export const SearchBar = styled.section`
  border: red 1px solid;
  width: 900px;
  display: flex;
  justify-content: space-between;
  input {
    width: 750px;
    height: 60px;
    margin-right: 0 auto;
    padding: 0;
    border: 1px solid gray;
    padding-left: 30px;
    border-radius: 5px;
    font-size: 20px;
    outline: none;
  }
  button {
    padding: 0;
    height: 60px;
    width: 80px;
    background-color: #0090ff;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
  }
`;

export const BookGrid = styled.div`
  border: black 1px solid;
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 가로줄에 5개의 열(column) 생성
  grid-auto-rows: minmax(300px, auto); // 셀의 높이 자동 조정
  justify-items: center;
  gap: 20px;
  margin-top: 300px;
`;

export const Header = styled.header`
  border: blue 1px solid;
  display: grid;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 150px;
`;

export const Fixed = styled.div`
  border: yellow 1px solid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: white;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    border: 1px solid gray;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export const ShowMoreButton = styled.button`
  background-color: #f1f1f1;
  color: #333;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
