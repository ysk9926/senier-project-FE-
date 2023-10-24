"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "./ErrorForm";
import { useMutation } from "@apollo/client";
import {
  ILoginData,
  LoginMutation,
} from "@/documents/mutations/Login.mutation";
import { logUserIn } from "@/apollo";
import { useRecoilState } from "recoil";
import { AuthFormValue, AuthPgValue } from "@/atom";

// 로그인 폼
interface ILoginForm {
  userId: string;
  password: string;
  result: string;
}

export default function LoginForm() {
  // 페이지 상태 관리
  const [pgState, setPgState] = useRecoilState(AuthPgValue);
  const PageStateHandler = () => {
    setPgState((prevState) => (prevState === "login" ? "signup" : "login"));
  };
  const [AuthCheck, setAuthCheck] = useRecoilState(AuthFormValue);
  const AuthCheckHandler = () => {
    setAuthCheck(false);
  };
  // 회원가입 유저 정보 불러오기
  const signupUserId = sessionStorage.getItem("userId");
  const signupUserPw = sessionStorage.getItem("password");

  // 로그인 폼
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
    getValues,
    clearErrors,
    reset,
  } = useForm<ILoginForm>({
    mode: "onChange",
    defaultValues: {
      userId: signupUserId || "",
      password: signupUserPw || "",
    },
  });

  // 로그인 뮤테이션
  const onCompleted = (data: ILoginData) => {
    const {
      login: { ok, error, token },
    } = data;
    console.log(data);
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    if (token) {
      // 로그인창 닫기
      AuthCheckHandler();
      // 로그인 헤더로 전송
      logUserIn(token);
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("password");
    }
  };
  const [loginMutation, { loading: loginLoading }] = useMutation(
    LoginMutation,
    { onCompleted }
  );
  const onSubmitValid: SubmitHandler<ILoginForm> = async (data) => {
    if (loginLoading) {
      return;
    }
    const { userId, password } = getValues();
    try {
      const result = await loginMutation({
        variables: {
          userId,
          password,
        },
      });

      // 로그인 결과를 콘솔에 출력
      console.log("로그인 결과:", result);
    } catch (error) {
      // 에러 처리
      console.error("로그인 에러:", error);
    }
  };

  // 에러 초기화
  const clearLoginError = () => {
    clearErrors("result");
  };

  return (
    <div>
      {/* 로그인 form */}
      <form
        onSubmit={handleSubmit(onSubmitValid)}
        className=" flex flex-col mt-5 items-center"
      >
        {/* id */}
        <input
          {...register("userId", {
            required: "아이디를 입력해주세요",
            // pattern: {
            //   value: /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
            //   message: "이메일 형식을 지켜서 입력해주세요",
            // },
            onChange() {
              clearErrors();
            },
          })}
          type="text"
          className={` focus:outline-0 focus:border-color_accent_text w-loginInput h-loginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm
          ${
            errors.userId?.message &&
            "border-red-600 border-[3px] placeholder:text-red-600"
          }`}
          placeholder="아이디"
        />
        {/* 비밀번호 */}
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            onChange() {
              clearErrors();
            },
          })}
          type="password"
          className={` focus:outline-0  focus:border-color_accent_text  w-loginInput h-loginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm
          ${
            errors.password?.message &&
            "border-red-600 border-[3px] placeholder:text-red-600"
          }`}
          placeholder="비밀번호"
        />
        {/* 에러 Form */}
        <div className={` mt-3 flex flex-col items-center `}>
          {errors.userId?.message && (
            <ErrorForm message={errors.userId?.message} />
          )}
          {errors.password?.message && (
            <ErrorForm message={errors.password?.message} />
          )}
          {errors.result?.message && (
            <ErrorForm message={errors.result.message} />
          )}
        </div>
        {/* 아이디 비밀번호 찾기 */}
        <div className=" flex justify-end items-center w-loginInput pr-3">
          <span className=" text-[11px] text-white opacity-60 hover:opacity-100">
            아이디 찾기
          </span>
        </div>
        {/* 로그인 & 회원가입 버튼 */}
        <div className=" flex justify-between items-center w-loginInput h-loginInput mt-1">
          {/* 로그인 버튼 */}
          <button
            type="submit"
            //   className=" w-[140px] h-loginInput bg-[#BCC7B2] text-[#32352f] rounded-md font-semibold
            // flex justify-center items-center"
            className={` w-[140px] h-[35px] p-1 rounded-md text-white bg-color_main_text ${
              isValid ? "" : "pointer-events-none opacity-50"
            }`}
            // onClick={LoginHandler}
          >
            로그인
          </button>
          {/* 회원가입 버튼 */}
          <button
            className={` w-[140px] h-[35px] p-1 rounded-md text-white opacity-60 hover:opacity-100 bg-color_main_text`}
            onClick={PageStateHandler}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
