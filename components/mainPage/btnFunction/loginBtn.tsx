"use client";

import { LoggedInVar } from "@/apollo";
import { AuthFormValue } from "@/atom";
import useUser from "@/components/hook/useMe";
import IAdmin from "@/icon/iAdmin";
import IPeople from "@/icon/iPeople";
import { useReactiveVar } from "@apollo/client";
import { Avatar } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function LoginBtn() {
  // Hydration Error을 해결
  const [isWindow, setIsWindow] = useState<boolean>(false);
  useEffect(() => {
    setIsWindow(true);
  }, []);

  // 로그인 상태값
  const AuthCheck = useReactiveVar(LoggedInVar);

  //   클릭 헨들러
  //   -- 변수 및 함수 선언
  const [authValue, setAuthValue] = useRecoilState(AuthFormValue);
  const router = useRouter();
  //   로그인 폼 이동 핸들러
  const LoginFormValueHandler = () => {
    setAuthValue((pre) => !pre);
  };
  //   마이페이지 / 관리자 페이지 이동 핸들러
  const MyPageValueHandler = () => {
    router.push("/myPage");
  };
  const AdminPageValueHandler = () => {
    router.push("/admin");
  };

  //   유저 정보 불러오기
  const userData = useUser();
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    if (userData && userData.me) {
      setAvatar(userData.me.avatar);
    }
  }, [userData]);

  return (
    isWindow && (
      <div>
        {/* 로그인 상태 확인 */}
        {AuthCheck ? (
          // 로그인 상태
          <div>
            {userData?.me.admin ? (
              // 관리자
              <div
                className=" w-[18px] h-[18px] fill-white stroke-white"
                onClick={AdminPageValueHandler}
              >
                <IAdmin />
              </div>
            ) : (
              // 일반 유저
              <Avatar
                src={avatar}
                name={userData?.me.username}
                className="w-[27px] h-[27px] text-large"
                onClick={MyPageValueHandler}
              />
            )}
          </div>
        ) : (
          // 비로그인 상태
          <div>
            <div
              className=" w-[18px] h-[18px] fill-white stroke-white"
              onClick={LoginFormValueHandler}
            >
              <IPeople />
            </div>
          </div>
        )}
      </div>
    )
  );
}

// 로그인 상태 확인
// -----------------------
// 로그인 상태
// -- 관지자
//  -> 관리자 페이지로 이동
// -- 유저
//  -> 마이페이지로 이동
// --------------
// 비 로그인 상태
//  -> 로그인 창으로 이동
