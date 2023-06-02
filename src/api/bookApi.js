import axios from "axios";
import getApiKey from "./restApi";

export const bookApi = (title) => {
  const restApi = getApiKey();
  return axios
    .request({
      method: "get",
      url: `https://dapi.kakao.com/v3/search/book?target=title&query=${title}`,
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
