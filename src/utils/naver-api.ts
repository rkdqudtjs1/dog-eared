import axios from "axios";

const naverAPI = axios.create({
  baseURL: `https://openapi.naver.com/v1`,
  headers:{
    "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
    "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
  }
});

export default naverAPI;
