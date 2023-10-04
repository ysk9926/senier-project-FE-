"use client";

import { useState } from "react";

export default function LoginPg() {
  const [state, setState] = useState("login");

  const CLickHandler = () => {
    setState((prevState) => (prevState === "login" ? "signup" : "login"));
  };

  return (
    <div className=" flex justify-center items-center absolute bg-black z-50 bg-opacity-40 w-full h-full top-0">
      {/* login-form */}
      <div className=" flex flex-col items-center w-[600px] h-[400px] bg-white">
        <span className=" mt-5 text-xl font-semibold ">
          {state === "login" ? "로그인" : "회원가입"}
        </span>
        <div className=" text-sm py-1 px-2 bg-blue-400" onClick={CLickHandler}>
          회원가입
        </div>
      </div>
    </div>
  );
}
