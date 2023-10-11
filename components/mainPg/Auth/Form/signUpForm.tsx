"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "./ErrorForm";
import { useMutation } from "@apollo/client";
import {
  ISignupData,
  SignupMutation,
} from "@/documents/mutations/Signup.mutation";
import { useRecoilState } from "recoil";
import { AuthPgValue } from "@/atom";

interface ISignupForm {
  userId: string;
  username: string;
  password: string;
  passwordCheck: string;
  result: string;
}

export default function SignUpForm() {
  // 페이지 상태 관리
  const [pgState, setPgState] = useRecoilState(AuthPgValue);
  const PageStateHandler = () => {
    setPgState((prevState) => (prevState === "login" ? "signup" : "login"));
  };
  // 훅 셋팅
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
    watch,
    getValues,
    clearErrors,
  } = useForm<ISignupForm>({
    mode: "onChange",
  });

  // 뮤테이션 셋팅
  const onCompleted = (data: ISignupData) => {
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    const { userId, password } = getValues();
    // userId와 password를 sessionStorage에 저장
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("password", password);
    // 5분 후에 데이터를 삭제
    setTimeout(() => {
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("password");
    }, 5 * 60 * 1000);
    // 로그인 페이지로 이동
    setPgState("login");
  };
  const [signupMutation, { loading: signupLoading }] = useMutation(
    SignupMutation,
    { onCompleted }
  );
  const onSubmitValid: SubmitHandler<ISignupForm> = (data) => {
    if (signupLoading) {
      return;
    }
    const { userId, username, password } = getValues();
    signupMutation({
      variables: {
        userId,
        username,
        password,
      },
    });
  };

  // 에러 초기화
  const clearLoginError = () => {
    clearErrors("result");
  };
  // 비밀번호 일치 확인을 위한 password입력값 확인
  const watchPassword = watch("password", "");
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitValid)}
        className=" flex flex-col mt-5"
      >
        <input
          {...register("userId", {
            required: "아이디를 입력해주세요",
            // pattern: {
            //   value: /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
            //   message: "이메일 형식을 지켜서 입력해주세요",
            // },
            onChange() {
              clearLoginError();
            },
          })}
          type="text"
          placeholder="아이디"
          className={` focus:outline-0 focus:border-color_accent_text w-loginInput h-loginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm
          ${
            errors.userId?.message &&
            "border-red-600 border-[3px] placeholder:text-red-600"
          }`}
        />
        <input
          {...register("username", {
            required: "유저명을 입력해주세요",
            onChange() {
              clearLoginError();
            },
          })}
          type="text"
          placeholder="유저명"
          className={` mt-5 focus:outline-0 focus:border-color_accent_text w-loginInput h-loginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm
          ${
            errors.userId?.message &&
            "border-red-600 border-[3px] placeholder:text-red-600"
          }`}
        />
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          type="password"
          placeholder="비밀번호"
          className={` mt-5 focus:outline-0 focus:border-color_accent_text w-loginInput h-loginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm
          ${
            errors.userId?.message &&
            "border-red-600 border-[3px] placeholder:text-red-600"
          }`}
        />
        <input
          {...register("passwordCheck", {
            required: "비밀번호를 확인 해주세요",
            validate: (value) =>
              value === watchPassword || "비밀번호가 일치하지 않습니다",
          })}
          type="password"
          placeholder="비밀번호 확인"
          className={` mt-5 focus:outline-0 focus:border-color_accent_text w-loginInput h-loginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm
          ${
            errors.userId?.message &&
            "border-red-600 border-[3px] placeholder:text-red-600"
          }`}
        />
        {/* 에러 Form */}
        <div className={` mt-3 flex flex-col items-center `}>
          <ErrorForm message={errors.userId?.message} />
          <ErrorForm message={errors.username?.message} />
          <ErrorForm message={errors.password?.message} />
          <ErrorForm message={errors.passwordCheck?.message} />
          <ErrorForm message={errors.result?.message} />
        </div>
        <button
          type="submit"
          className={` w-LoginInput h-LoginInput p-1 mt-2 rounded-md text-white bg-color_main_text ${
            isValid ? "" : "pointer-events-none opacity-50"
          }`}
        >
          회원가입
        </button>
      </form>
      {/* 로그인으로 이동 */}
      <div className=" mt-3 flex justify-center items-center text-xs text-white">
        <span className=" opacity-60">이미 아이디가 있나요?</span>
        <span
          className=" ml-2 opacity-60 hover:opacity-100"
          onClick={PageStateHandler}
        >
          로그인하러 가기
        </span>
      </div>
    </div>
  );
}
