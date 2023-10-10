"use client";

import { useState } from "react";
import LoginForm from "./Form/LoginForm";
import SignUpForm from "./Form/signUpForm";
import { useRecoilState } from "recoil";
import { AuthFormValue } from "@/atom";

export default function LoginPg() {
  const [authValue, setAuthValue] = useRecoilState(AuthFormValue);
  const [state, setState] = useState("login");

  const CLickHandler = () => {
    setState((prevState) => (prevState === "login" ? "signup" : "login"));
  };

  const AuthFormValueHandler = () => {
    setAuthValue((pre) => !pre);
  };

  return (
    authValue && (
      <div className=" flex justify-center items-center absolute bg-black z-50 bg-opacity-60 w-full h-full top-0">
        {/* login-form */}
        <div className=" flex flex-col items-center w-[600px] h-[350px] bg-opacity-90 bg-[#32352f] rounded-md">
          <span className=" mt-10 text-xl font-semibold text-white ">
            {state === "login" ? "로그인" : "회원가입"}
          </span>
          {state === "login" ? <LoginForm /> : <SignUpForm />}
        </div>
        <div onClick={CLickHandler}>변경</div>
        <div onClick={AuthFormValueHandler}>X</div>
      </div>
    )
  );
}
