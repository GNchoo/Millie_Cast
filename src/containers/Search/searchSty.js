import styled from "styled-components";

export const Fixed = styled.div`
  position: fixed;
  border-bottom: 1px solid #dfdfdf;
  top: 65px;
  width: 100vw;
  height: 85px;
  background-color: white;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  max-width: 1450px;
  height: 100%;
  margin: 0 auto;
  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 800;
    color: #242424;
    outline: none;
    letter-spacing: -1px;
  }
  button {
    width: 110px;
    height: max-content;
    background-color: transparent;
    color: #6f6f6f;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    .material-symbols-outlined {
      font-size: 16px;
    }
    .material-icons {
      font-size: 28px;
    }
  }
`;

export const BookGrid = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 300px;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 7px;
  width: 360px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  h2 {
    font-size: 20px;
    font-weight: 800;
    color: #242424;
    margin: 28px 0 20px;
    letter-spacing: -1px;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 24px 22px 24px;
    li {
      border: 1px solid #dfdfdf;
      width: 149px;
      height: 47px;
      margin-bottom: 8px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #8b8b8b;
      font-size: 13px;
      font-weight: 800;
      box-sizing: border-box;
      &:hover {
        border: 3px solid #ffeb60;
        text-decoration: underline;
      }
    }
  }
  button {
    background-color: #c1c1c1;
    color: #242424;
    border: none;
    width: 100%;
    height: 58px;
    cursor: pointer;
  }
`;