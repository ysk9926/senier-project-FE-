"use client";

import useUser from "@/components/hook/useMe";
import { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";

export default function UserInfo() {
  const user = useUser();
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    if (user && user.me) {
      setAvatar(user.me.avatar);
    }
  }, [user]);

  return (
    <div className=" flex justify-center items-center">
      {/* 아바타 */}
      <Avatar
        name={user?.me.username}
        src={avatar}
        className="w-24 h-24 text-base font-semibold"
      />
      <div className=" ml-10 w-52 space-y-2">
        {/* 유저명 */}
        <div className=" flex justify-start items-center border p-1">
          <div>유저명 :</div>
          <span className=" max-w-[130px] overflow-hidden ml-2">
            {user?.me.username}
          </span>
        </div>
        {/* 보유 포인트 */}
        <div className=" flex justify-start items-center border p-1 overflow-hidden">
          <div>보유 포인트 :</div>
          <span className=" max-w-[130px] overflow-hidden ml-2">
            {user?.me.points}P
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
}
