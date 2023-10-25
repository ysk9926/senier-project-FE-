"use client";

import UserInquiryTable from "./userInquiryTable";
import UserInquiryWrite from "./userInquiryWrite";

export default function UserInquiry() {
  return (
    <div className=" w-full max-w-[345px] h-[300px] bg-white rounded-md">
      <div className=" flex justify-between items-center border-b p-3">
        {/* 문의 하기 타이틀 */}
        <span className=" text-sm">나의 문의하기</span>
        {/* 문의 작성 버튼 */}
        <UserInquiryWrite />
      </div>
      {/* 문의 리스트 (문의 제목, 문의 상태) */}
      <div className=" flex flex-col ">
        <div className=" h-[200px] overflow-auto scrollbar-none">
          <UserInquiryTable />
        </div>
      </div>
    </div>
  );
}
