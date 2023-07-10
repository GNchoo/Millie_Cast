import { styled } from "styled-components";

export const ClipContainer = styled.div`
  width: 100%;
`;
export const Inner = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  height: 120px;
`;

export const Title = styled.div`
  height: 25px;
  padding: 0 20px 5px 20px;
  margin-top: 70px;
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

export const Clips = styled.div`
  padding: 5px 20px 0 20px;
  height: 100px;
  display: flex;
  .clip {
    margin: 5px 12px 0 0;
    width: 120px;
    height: 70px;
    border: 1px solid #ddd;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 30px;
      margin-bottom: 8px;
    }
    p {
      font-size: 11px;
      font-weight: 700;
      color: #8b8b8b;
    }
  }
`;
