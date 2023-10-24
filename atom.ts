import { atom } from "recoil";

export const AuthFormValue = atom({
  key: "로그인 폼 상태",
  default: false,
});

export const AuthPgValue = atom({
  key: "로그인/회원가입 상태",
  default: "login",
});

export const InquiryTagValue = atom({
  key: "문의하기 태그",
  default: "all",
});

export const TodoTagValue = atom({
  key: "투두리스트 태그",
  default: "TODO",
});

export const CityRainValue = atom({
  key: "city rain 재생상태",
  default: false,
});
export const CarSoundValue = atom({
  key: "CarSound 재생상태",
  default: false,
});
export const PeoplesoundValue = atom({
  key: "Peoplesound 재생상태",
  default: false,
});
