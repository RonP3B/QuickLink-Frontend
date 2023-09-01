import api from "./api";

const LOGIN_ENDPOINT = import.meta.env.VITE_LOGIN_ENDPOINT;
const SIGNUP_ENDPOINT = import.meta.env.VITE_SIGNUP_ENDPOINT;
const LOGOUT_ENDPOINT = import.meta.env.VITE_LOGOUT_ENDPOINT;

export const login = (values) => {
  return api.post(LOGIN_ENDPOINT, JSON.stringify(values));
};

export const signup = (values) => {
  return api.post(SIGNUP_ENDPOINT, JSON.stringify(values));
};

export const logout = () => {
  return api.get(LOGOUT_ENDPOINT);
};
