"use client";

import useUser from "../hook/useMe";

export default function AdminTitle() {
  const adminData = useUser();

  return (
    <div>
      <span>안녕하세요 관리자 {adminData && adminData.me.username}님</span>
    </div>
  );
}
