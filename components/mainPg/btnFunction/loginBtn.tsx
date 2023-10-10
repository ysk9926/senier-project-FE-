"use client";

import { AuthFormValue } from "@/atom";
import IMolla from "@/icon/IMolla";
import { useRecoilState } from "recoil";

export default function LoginBtn() {
  const [authValue, setAuthValue] = useRecoilState(AuthFormValue);

  const AuthFormValueHandler = () => {
    setAuthValue((pre) => !pre);
  };

  return (
    <div className=" w-[18px] fill-white" onClick={AuthFormValueHandler}>
      <IMolla />
    </div>
  );
}
