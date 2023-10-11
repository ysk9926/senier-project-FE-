"use client";

import { useState } from "react";
import LoginForm from "./Form/LoginForm";
import SignUpForm from "./Form/signUpForm";
import { useRecoilState } from "recoil";
import { AuthFormValue, AuthPgValue } from "@/atom";

export default function LoginPg() {
  const [authValue, setAuthValue] = useRecoilState(AuthFormValue);
  const AuthFormValueHandler = () => {
    setAuthValue((pre) => !pre);
    setPgState("login");
  };

  const [pgState, setPgState] = useRecoilState(AuthPgValue);

  return (
    authValue && (
      <div className=" flex justify-center items-center absolute bg-black z-50 bg-opacity-60 w-full h-full top-0">
        {/* login-form */}
        <div className=" flex flex-col items-center w-[600px] h-[350px] bg-opacity-90 bg-[#32352f] rounded-md">
          <span className=" mt-10 text-xl font-semibold text-white ">
            {pgState === "login" ? "로그인" : "회원가입"}
          </span>
          {pgState === "login" ? <LoginForm /> : <SignUpForm />}
        </div>
        <div onClick={AuthFormValueHandler}>닫기</div>
      </div>
    )
  );
}
