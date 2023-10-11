"use client";

import { AuthFormValue } from "@/atom";
import IPeople from "@/icon/IPeople";
import { useRecoilState } from "recoil";
import { useReactiveVar } from "@apollo/client";
import { LoggedInVar } from "@/apollo";
import useUser from "@/components/hook/useMe";
import { useEffect, useState } from "react";

export default function LoginBtn() {
  // 로그인창 상태 관리
  const [authValue, setAuthValue] = useRecoilState(AuthFormValue);
  const AuthCheck = useReactiveVar(LoggedInVar);

  const LoginFormValueHandler = () => {
    setAuthValue((pre) => !pre);
  };
  const MyPageValueHandler = () => {};

  // 유저 아바타 설정
  const userData = useUser();
  console.log(userData);
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    if (userData && userData.me) {
      setAvatar(userData.me.avatar);
    }
  }, [userData]);
  if (!userData) {
    console.log("데이터가 없음");
  }

  return AuthCheck ? (
    // 로그인 상태 -> 유저 프로필
    <div
      className=" w-[18px] h-[18px] rounded-full"
      onClick={MyPageValueHandler}
    >
      <img src={avatar} alt="유저 아바타" />
      {userData.me.admin ? (
        // 관리자페이지로 이동
        <div>관리자</div>
      ) : (
        // 마이페이지로 이동
        <span>마이 페이지</span>
      )}
    </div>
  ) : (
    // 비로그인 상태 -> 유저 아이콘
    <div
      className=" w-[18px] h-[18px] fill-white stroke-white"
      onClick={LoginFormValueHandler}
    >
      <IPeople />
    </div>
  );
}
