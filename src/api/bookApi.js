import axios from "axios";
import getApiKey from "./restApi";

export const bookApi = (query, filter) => {
  const restApi = getApiKey();
  const filters = {
    전체: "title",
    책제목: "title",
    저자명: "authors",
    출판사명: "publisher",
    번역가명: "translators",
  };
  const target = filters[filter];

  return axios
    .request({
      method: "get",
      url: `https://dapi.kakao.com/v3/search/book?target=${target}&query=${query}&size=50`,
      headers: {
        Authorization: `KakaoAK ${restApi}`,
      },
    })
    .then((res) => {
      return res.data.documents;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export default bookApi;
