"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "./ErrorForm";
import { gql, useMutation } from "@apollo/client";

// 뮤테이션
const LoginMutation = gql`
  mutation login($userId: String!, $password: String!) {
    login(userId: $userId, password: $password) {
      ok
      error
      token
    }
  }
`;
interface ILoginData {
  login: {
    ok: boolean;
    error: string;
    token: string;
  };
}

// 로그인 폼
interface ILoginForm {
  userId: string;
  password: string;
  result: string;
}

export default function LoginForm() {
  // 로그인 폼
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    getValues,
  } = useForm<ILoginForm>({
    mode: "onChange",
    // defaultValues: {
    //   username: location?.state?.username || "",
    //   password: location?.state?.password || "",
    // },
  });

  // 로그인 뮤테이션
  const onCompleted = (data: ILoginData) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    if (token) {
      // 로그인 헤더로 전송
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
            pattern: {
              value: /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
              message: "이메일 형식을 지켜서 입력해주세요",
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
        </div>
        {/* 아이디 비밀번호 찾기 */}
        <div className=" flex justify-end items-center w-loginInput pr-3">
          <span className=" text-[11px] text-white">아이디 찾기</span>
        </div>
        {/* 로그인 & 회원가입 버튼 */}
        <div className=" flex justify-between items-center w-loginInput h-loginInput mt-2">
          {/* 로그인 버튼 */}
          <button
            type="submit"
            className=" w-[140px] h-loginInput bg-[#BCC7B2] text-[#32352f] rounded-md font-semibold
          flex justify-center items-center"
            // onClick={LoginHandler}
          >
            로그인
          </button>
          {/* 회원가입 버튼 */}
          <div
            //   type="submit"
            className=" w-[140px] h-loginInput bg-[#BCC7B2] text-[#32352f] rounded-md font-semibold
          flex justify-center items-center"
            // onClick={LoginHandler}
          >
            회원가입
          </div>
        </div>
      </form>
    </div>
  );
}
