import { styled } from "styled-components";

export const Inner = styled.div`
  max-width: 1450px;
  height: 590px;
  margin: auto;
`;

export const Click = styled.div`
  height: 50px;
  display: flex;
  padding: 0 20px 0 20px;
  align-items: end;
  .recommend {
    background-color: transparent;
    border: none;
    border-radius: 15px;
    outline: 1px solid #242424;
    display: flex;
    color: #242424;
    height: 32px;
    width: 120px;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    .material-icons {
      font-size: 19px;
      color: #242424;
      margin-right: 7px;
    }
  }
`;

export const CateButton = styled.button`
  width: max-content;
  height: 32px;
  padding: 0 15px 0 15px;
  margin-right: 10px;
  border: none;
  border-radius: 15px;
  color: ${(props) => (props.selected ? "#f7f7f7" : "#242424")};
  background-color: ${(props) => (props.selected ? "#242424" : "#f7f7f7")};
  align-content: center;
  justify-items: center;
  cursor: pointer;
`;

export const Follow = styled.div`
  height: 110px;
  border-radius: 15px;
  margin: 20px 25px 0 20px;
  background-color: #f7f7f7;
  display: flex;
`;
export const Image = styled.div`
  width: 115px;
  img {
    margin: 16px 15px;
    width: 78px;
  }
`;
export const NoImage = styled.div`
  width: 88%;
  .tag {
    height: 20px;
    margin: 30px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 16px;
      font-weight: 800;
      color: #555555;
    }
    .material-symbols-outlined {
      color: #8b8b8b;
      font-size: 18px;
    }
  }
  .text {
    font-weight: 700;
    font-size: 13px;
    color: #555555;
    margin-bottom: 10px;
  }
`;

export const Posts = styled.div`
  height: 295px;
  margin: auto;
  margin-top: 15px;
  padding: 0 20px 0 20px;
  display: flex;
`;

export const Post = styled.div`
  min-width: 388px;
  height: 100%;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.06), 2px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 15px;
  overflow: hidden;
  margin-right: 20px;
  .thumbnail {
    position: relative;
    height: 70%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      transform: scale(0.95);
    }
  }
  .text {
    height: 28%;
    padding: 27px 15px;
    .title {
      font-size: 15px;
      font-weight: 800;
      color: #242424;
      word-spacing: -2px;
      margin-bottom: 5px;
      height: 17px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .content {
      font-size: 13px;
      font-weight: 800;
      color: #6f6f6f;
      word-spacing: -2px;
      height: 15px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
