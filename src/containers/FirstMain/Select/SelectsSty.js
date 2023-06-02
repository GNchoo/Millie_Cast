import { styled } from "styled-components";

export const Container = styled.div``;

export const SelectBtnContainer = styled.div`
  width: 100%;
  background-color: white;
  letter-spacing: -1.2px;
`;

export const Inner = styled.div`
  width: 1100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  color: #333;
  img {
    margin-top: 22px;
    width: 30px;
  }
`;

export const CategoryDiv = styled.div`
  font-size: 15px;
  width: 50%;
  background-color: ${(props) => (props.selected ? "#f7f7f7" : "white")};
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  letter-spacing: -1.2px;
`;

export const Inner2 = styled.div`
  width: 1100px;
  height: 1000px;
  margin: 0 auto;
  display: flex;
`;

export const TextBox = styled.div`
  width: 710px;
  height: 100%;
  color: #333;
  .boxes {
    margin-top: 170px;
    height: 65%;
  }
  .icon {
    width: 7%;
    height: 8%;
    background-color: #ffed61;
    border-radius: 50px;
    margin-bottom: 25px;
    img {
      width: 25px;
      margin-left: 12px;
      margin-top: 10px;
    }
  }
  .box1 {
    height: 60%;
    .text1 {
      height: 23%;
      font-size: 50px;
      font-weight: bold;
    }
    .text2 {
      height: 77%;
      font-size: 23px;
      font-weight: 500;
      color: #505050;
      line-height: 30px;
    }
  }
  .box2 {
    height: 28%;
    .text1 {
      height: 23%;
      font-size: 23px;
      font-weight: bold;
    }
    .text2 {
      height: 40%;
      font-size: 23px;
    }
    .buttonBox {
      height: 30%;
    }
  }
`;

export const NumberBtn = styled.button`
  width: 44px;
  height: 23px;
  border-radius: 15px;
  border: 1px solid #242424;
  color: ${(props) => (props.selected ? "white" : "#242424")};
  background-color: ${(props) => (props.selected ? "#242424" : "transparent")};
  cursor: pointer;
  margin-right: 10px;
`;

export const ImageBox = styled.div`
  width: 380px;
  height: 100%;
`;

export const Images = styled.div`
  position: relative;
  overflow: hidden;
  width: 380px;
  height: 782px;
  margin-top: 80px;
  border-radius: 70px;
  object-fit: contain;
`;
