"use client";

import { Button } from "@nextui-org/react";
import UserInquiryTable from "./userInquiryTable";
import UserInquiryWrite from "./userInquiryWrite";

export default function UserInquiry() {
  return (
    <div className=" w-96  bg-blue-200">
      <div className=" flex justify-between items-center border-b">
        {/* 문의 하기 타이틀 */}
        <span className=" text-sm pl-3">문의하기</span>
        {/* 문의 작성 버튼 */}
        <UserInquiryWrite />
      </div>
      {/* 문의 리스트 (문의 제목, 문의 상태) */}
      <div className=" flex flex-col border-b-1">
        <div className=" grid grid-cols-[100px_1fr_70px] divide-x-1 border-b-1 text-sm h-10">
          <div className="bg-blue-400 flex justify-center items-center ">
            문의 번호
          </div>
          <div className="  bg-yellow-300 flex justify-center items-center ">
            제목
          </div>
          <div className=" bg-green-400 flex justify-center items-center ">
            문의 상태
          </div>
        </div>
        <div className=" h-[200px] overflow-auto scrollbar-none">
          <UserInquiryTable />
        </div>
      </div>
    </div>
  );
}
