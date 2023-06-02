import styled from "styled-components";

export const BookSection = styled.section`
  border: red 1px solid;
  padding: 5px;
  height: 250px;
  width: 150px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column; /* 추가 */
`;

export const BookImage = styled.img`
  border: blue 1px solid;
  height: 200px;
  width: 150px;
  margin-bottom: 5px; /* 수정 */
`;

export const RightSection = styled.div`
  border: black 1px solid;
  height: 100%;
  width: 100%;
  display: flex;
  align-content: stretch;
  flex-direction: column; /* 추가 */
`;

export const BookInfoLabel = styled.label`
  border: green 1px solid;
  margin: 0;
  color: gray;
`;
export const BookInfoText = styled.p`
  border: red 1px solid;
  margin: 0;
  margin-bottom: 10px; /* 수정 */
`;
export const BookTitle = styled.section`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: bold;
`;

export const BookAuthor = styled.section`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
`;
