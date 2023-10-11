"use client";

import { AuthFormValue } from "@/atom";
import IPeople from "@/icon/IPeople";
import { useRecoilState } from "recoil";

export default function LoginBtn() {
  const [authValue, setAuthValue] = useRecoilState(AuthFormValue);

  const AuthFormValueHandler = () => {
    setAuthValue((pre) => !pre);
  };

  return (
    <div
      className=" w-[18px] h-[18px] fill-white"
      onClick={AuthFormValueHandler}
    >
      <IPeople />
    </div>
  );
}
