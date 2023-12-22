import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getStorage, removeStorage } from "../utils/useLocalStroage";
import { TokenResponse } from "./AccountRouter";

export interface Result {
  result_code: number;
  result_message: string;
  result_description: string;
}

export interface Api<T> {
  result: Result;
  body: T;
}

export function makeApiRequest<T>(body: T): Api<T> {
  return {
    result: {
      result_code: 0,
      result_message: "req",
      result_description: "req",
    },
    body,
  };
}

const logout = (message: string) => {
  alert(message);
  // removeStorage("account");
  removeStorage("token");
  window.location.href = "/";
};

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const tokenString = getStorage("token");
    if (tokenString) {
      const tokenJson = JSON.parse(tokenString) as TokenResponse;
      const token = tokenJson.access_token;
      config.headers["authorization-token"] = token;
    } else {
      if (config.url?.indexOf("login") === -1) {
        throw Error("Token이 없습니다.");
      }
    }

    return config;
  }
);

axiosInstance.interceptors.response.use(
  async (response: AxiosResponse<any, any>) => {
    try {
      return response;
    } catch (err: any) {
      console.error("[axios.interceptors.response] response : ", err.message);
    }
    return response;
  },
  async (error: any) => {
    try {
      if (error && error.response && error.response.data) {
        console.log(error);
      }
    } catch (err: any) {
      console.error("[axios.interceptors.response] error : ", err.message);
    }
  }
);

export default axiosInstance;
