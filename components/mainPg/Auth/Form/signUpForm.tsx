"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "./ErrorForm";

interface ISignupForm {
  Email: string;
  username: string;
  password: string;
  passwordCheck: string;
}

export default function SignUpForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<ISignupForm>({
    mode: "onChange",
  });
  const onSubmitValid: SubmitHandler<ISignupForm> = () => {
    return null;
  };
  const watchPassword = watch("password", "");
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitValid)}
        className=" flex flex-col mt-5"
      >
        <input
          {...register("Email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
              message: "이메일 형식을 지켜서 입력해주세요",
            },
          })}
          type="text"
          placeholder="이메일"
          className=" focus:outline-0 focus:border-color_accent_text w-LoginInput h-LoginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm "
        />
        <input
          {...register("username", {
            required: "유저명을 입력해주세요",
          })}
          type="text"
          placeholder="유저명"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
        />
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          type="password"
          placeholder="비밀번호"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
        />
        <input
          {...register("passwordCheck", {
            required: "비밀번호를 확인 해주세요",
            validate: (value) =>
              value === watchPassword || "비밀번호가 일치하지 않습니다",
          })}
          type="password"
          placeholder="비밀번호 확인"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
        />
        {/* 에러 Form */}
        <div className={` mt-3 flex flex-col items-center `}>
          <ErrorForm message={errors.Email?.message} />
          <ErrorForm message={errors.username?.message} />
          <ErrorForm message={errors.password?.message} />
          <ErrorForm message={errors.passwordCheck?.message} />
        </div>
        <button
          type="submit"
          className=" w-LoginInput h-LoginInput p-1 mt-2 rounded-md text-white bg-color_main_text"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}