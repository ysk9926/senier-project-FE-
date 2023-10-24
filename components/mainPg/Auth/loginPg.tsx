"use client";

import LoginForm from "./Form/LoginForm";
import SignUpForm from "./Form/signUpForm";
import { useRecoilState } from "recoil";
import { AuthFormValue, AuthPgValue } from "@/atom";
import IDelete from "@/icon/IDelete";

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
        <div className=" py-8 flex flex-col items-center w-[500px]  bg-opacity-90 bg-[#32352f] rounded-md">
          <div className=" flex justify-between w-full px-10">
            <div></div>
            <span className=" text-xl font-semibold text-white ">
              {pgState === "login" ? "로그인" : "회원가입"}
            </span>
            <div
              onClick={AuthFormValueHandler}
              className="w-5 fill-white cursor-pointer"
            >
              <IDelete />
            </div>
          </div>
          {pgState === "login" ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    )
  );
}
