"use client";

import useUser from "@/components/hook/useMe";

export default function UserPoints() {
  const user = useUser();
  return (
    // 보유 포인트
    <div className=" flex justify-center items-center  w-full h-12 mt-2 bg-white p-5 rounded-md">
      <div className=" flex justify-between items-center w-full">
        <div className=" flex items-center">
          <div className=" border border-red-600 text-red-600 rounded-full w-4 h-4 flex justify-center items-center text-sm">
            P
          </div>
          <span className=" text-sm ml-2">보유 포인트</span>
        </div>
        <div className="text-2xl font-bold">
          <span className=" text-red-600">{user?.me.points}</span>
          <span>P</span>
        </div>
      </div>
    </div>
  );
}
