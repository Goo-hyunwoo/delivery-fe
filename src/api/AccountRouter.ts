import { AxiosError, AxiosResponse } from "axios";
import axiosInstance, { Api, makeApiRequest } from "./http-commons";

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  status: string;
  address: string;
  registered_at: Date;
  unregistered_at?: Date;
  lastLogin_at?: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserRegisterRequest {
  name: string;
  email: string;
  password: string;
  address: string;
}

export interface TokenResponse {
  access_token: string;
  access_token_expired_at: Date;
  refresh_token: string;
  refresh_token_expired_at: Date;
}

export interface AccountRouter {
  signIn: (
    loginRequest: LoginRequest
  ) => Promise<AxiosResponse<Api<TokenResponse>, AxiosError>>;

  signUp: (
    userRegisterRequest: UserRegisterRequest
  ) => Promise<AxiosResponse<Api<UserResponse>, AxiosError>>;
}

class AccountRouterImpl implements AccountRouter {
  signIn = (loginRequest: LoginRequest) =>
    axiosInstance.post("/open-api/user/login", makeApiRequest(loginRequest));

  signUp = (userRegisterRequest: UserRegisterRequest) =>
    axiosInstance.post(
      "/open-api/user/register",
      makeApiRequest(userRegisterRequest)
    );
}
const accountRouter = new AccountRouterImpl();
export default accountRouter;
