import { request } from "../api/apihandler";

// export const base_url = "http://localhost:8080/api/";
export const base_url = "http://localhost:8000/api/";

export const API = {
  signup: (registerdata) =>
    request.post(base_url + "users/signup", registerdata),
  login: (loginData) => request.post(base_url + "users/login", loginData),

  //
  deposit: (body) => request.post(base_url + "deposit/deposit", body),
  withdraw: (body) => request.post(base_url + "withdraw/withdraw", body),
};
