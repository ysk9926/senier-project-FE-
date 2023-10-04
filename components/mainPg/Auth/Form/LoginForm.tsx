"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import ErrorForm from "./ErrorForm";

interface ILoginForm {
  ID: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>({
    mode: "onChange",
  });
  // const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginValue);
  // const LoginHandler = () => {
  //   setIsLoggedIn(true);
  // };
  const onSubmitValid: SubmitHandler<ILoginForm> = () => {
    return null;
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
          {...register("ID", {
            required: "아이디를 입력해주세요",
            pattern: {
              value: /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/,
              message: "이메일 형식을 지켜서 입력해주세요",
            },
          })}
          type="text"
          className=" focus:outline-0 focus:border-color_accent_text w-LoginInput h-LoginInput border border-color_sub_text rounded-md  p-1 pl-4 placeholder:text-sm "
          placeholder="아이디"
        />
        {/* 비밀번호 */}
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          type="password"
          className=" focus:outline-0  focus:border-color_accent_text  w-LoginInput h-LoginInput border border-color_sub_text rounded-md mt-5 p-1 pl-4 placeholder:text-sm"
          placeholder="비밀번호"
        />
        {/* 에러 Form */}
        <div className={` mt-3 flex flex-col items-center `}>
          <ErrorForm message={errors.ID?.message} />
          <ErrorForm message={errors.password?.message} />
        </div>
        {/* 로그인 버튼 */}
        <div
          //   type="submit"
          className=" w-LoginInput h-LoginInput p-1 mt-2 rounded-md text-black bg-color_main_text
           flex justify-center items-center"
          // onClick={LoginHandler}
        >
          로그인
        </div>
      </form>
    </div>
  );
}
