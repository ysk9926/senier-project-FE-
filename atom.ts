import { atom } from "recoil";

export const AuthFormValue = atom({
  key: "로그인 폼 상태",
  default: false,
});

export const AuthPgValue = atom({
  key: "로그인/회원가입 상태",
  default: "login",
});
