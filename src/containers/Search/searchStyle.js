import styled from "styled-components";

export const SearchBar = styled.section`
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
  display: grid;
  justify-items: center;
  margin-top: 300px;
`;

export const Header = styled.header`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 150px;
`;

export const Fixed = styled.div`
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
