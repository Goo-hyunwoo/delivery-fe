import { AxiosError, AxiosResponse } from "axios";
import axiosInstance, { Api, makeApiRequest } from "./http-commons";

export type StoreStatus = "REGISTERED" | "UNREGISTERED";
export type StoreCategory =
  | "CHINESE_FOOD"
  | "WESTERN_FOOD"
  | "JAPANESE_FOOD"
  | "CHICKEN"
  | "PIZZA"
  | "HAMBURGER"
  | "COFFEE_TEA";

export interface StoreRegistRequest {
  name: string;
  address: string;
  category: StoreCategory;
  thumbnail_url: string;
  minimum_amount: number;
  minimum_delivery_amount: number;
  phone_number: string;
}

export interface StoreResonse {
  id: number;
  name: string;
  address: string;
  category: StoreCategory;
  status: StoreStatus;
  star: number;
  thumbnail_url: string;
  minimum_amount: number;
  minimum_delivery_amount: number;
  phone_number: string;
}

export interface StoreRouter {
  register: (
    storeRegistRequest: Api<StoreRegistRequest>
  ) => Promise<AxiosResponse<Api<StoreResonse>, AxiosError>>;

  searchByCategory: (
    storeRegistRequest: StoreCategory
  ) => Promise<AxiosResponse<Api<StoreResonse[]>, AxiosError>>;
}

export class StoreRouterImpl implements StoreRouter {
  register = (storeRegistRequest: Api<StoreRegistRequest>) =>
    axiosInstance.post(
      "/open-api/store/regist",
      makeApiRequest(storeRegistRequest)
    );
  searchByCategory = (storeCategory: StoreCategory) =>
    axiosInstance.get("/api/store/search?storeCategory=" + storeCategory);
}
