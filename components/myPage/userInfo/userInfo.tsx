"use client";

import useUser from "@/components/hook/useMe";
import { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";
import EditProfile from "../editProfile/editProfile";
import ISetting from "@/icon/iSetting";

export default function UserInfo() {
  const user = useUser();
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    if (user && user.me) {
      setAvatar(user.me.avatar);
    }
  }, [user]);

  return (
    <div className=" flex items-center bg-white p-5 w-full rounded-md">
      <div>
        {/* 아바타 */}
        <Avatar
          name={user?.me.username}
          src={avatar}
          className="md:w-24 md:h-24 text-base font-semibold
         w-[80px] h-[80px]
        "
        />
      </div>
      {/* content wrapper */}
      <div className=" ml-10 w-52 space-y-2  flex flex-col">
        {/* 유저명 */}
        <div className=" flex justify-start items-center">
          <span className=" max-w-[130px] overflow-hidden text-lg font-semibold">
            {user?.me.username}
          </span>
        </div>
        {/* 수정하기 */}
        <label className=" flex items-center">
          <div className=" w-[18px] stroke-black -mr-1">
            <ISetting />
          </div>
          <EditProfile />
        </label>
      </div>
    </div>
  );
}
