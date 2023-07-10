import { styled } from "styled-components";

export const RoadContainer = styled.div`
  width: 100%;
`;

export const Inner = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  height: 520px;
  overflow: hidden;
`;
export const Title = styled.div`
  height: 25px;
  padding: 0 20px 5px 20px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 19px;
    font-weight: 800;
    color: #242424;
  }
  .material-symbols-outlined {
    color: #8b8b8b;
  }
`;
export const Writing = styled.p`
  padding: 0 20px;
  font-weight: 700;
  font-size: 13px;
  color: #6f6f6f;
`;

export const Roads = styled.div`
  padding: 20px;
  display: flex;
  overflow-x: hidden;
`;

export const MainRoad = styled.div`
  min-width: 250px;
  height: 365px;
  border: 1px solid #ddd;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  .image {
    width: 100%;
  }
  .title {
    position: absolute;
    left: 25px;
    top: 22px;
    width: 200px;
  }
  .text {
    position: absolute;
    left: 25px;
    top: 265px;
    width: 200px;
    color: white;
    font-size: 16px;
    font-weight: 800;
    line-height: 22px;
    letter-spacing: -0.5px;
  }
  .small {
    position: absolute;
    display: flex;
    left: 25px;
    top: 330px;
    width: 200px;
    color: white;
    font-size: 13px;
    font-weight: 800;
    .material-symbols-outlined {
      font-size: 13px;
    }
  }
`;

export const Road = styled.div`
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.06), 2px 2px 10px rgba(0, 0, 0, 0.04);
  min-width: 325px;
  height: 365px;
  border: 1px solid #ddd;
  margin-left: 15px;
  border-radius: 10px;
  overflow: hidden;
  .thumbnail {
    height: 100px;
    overflow: hidden;
    position: relative;
    .blur {
      width: 325px;
      height: 100px;
      background-position: 50%;
      background-size: cover;
      transform: scale(2);
      background-repeat: no-repeat;
      filter: blur(3px);
    }
    img {
      display: flex;
      width: 69px;
      position: absolute;
      left: 120px;
      top: 13px;
      border-radius: 0 5px 5px 0;
    }
  }
  .info {
    height: 25px;
    display: flex;
    padding: 17px 0 0 15px;
    .gray {
      background-color: #efefef;
      color: #555555;
      width: max-content;
      height: max-content;
      margin-right: 3px;
      font-size: 10px;
      font-weight: 700;
      padding: 5px 3px;
      border-radius: 5px;
    }
  }
  .titleWriter {
    height: 55px;
    padding: 0 0 0 15px;
    .title {
      font-size: 16px;
      font-weight: 800;
      color: #242424;
      margin-top: 8px;
    }
    .writer {
      font-size: 14px;
      font-weight: 700;
      color: #6f6f6f;
      margin-top: 10px;
    }
  }
  .point {
    height: 135px;
    border-top: 1px solid rgba(176, 179, 188, 0.3);
    margin: 0 15px 0 15px;
    padding: 10px 0 10px 0;
    .recPoint {
      font-size: 15px;
      font-weight: 800;
      color: #242424;
      display: flex;
      margin-top: 10px;
      .material-symbols-outlined {
        font-size: 17px;
        color: #ffd334;
      }
    }
    .points {
      font-size: 14px;
      font-weight: 700;
      color: #242424;
      margin-top: 8px;
      background-color: #fafaf6;
      padding: 10px 0 10px 10px;
      border-radius: 10px;
      p {
        line-height: 25px;
      }
    }
  }
`;
