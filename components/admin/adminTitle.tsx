"use client";

import useUser from "../hook/useMe";

export default function AdminTitle() {
  const adminData = useUser();

  return (
    <div className="flex flex-col justify-center h-full font-semibold px-5 ">
      <span className="z-50">안녕하세요</span>
      <span className="text-xl z-50">
        {adminData && adminData.me.username} 관리자님
      </span>
    </div>
  );
}
