"use client";

import { useAllInquiry } from "@/components/hook/useInquiry";

export default function InquiryTableData() {
  // 문의하기 데이터 불러오기
  const InquiryD = useAllInquiry();
  const InquiryDArr = InquiryD?.allInquiry || [];

  return (
    <div className="grid grid-cols-[100px_1fr_100px_70px] auto-rows-[40px] divide-y-1 divide-x-1 text-sm overflow-hidden">
      {InquiryDArr.map((Inquiry) => (
        <>
          <div className=" flex justify-center items-center">
            no.{Inquiry.id}
          </div>
          <div className=" flex justify-center items-center">
            {Inquiry.title}
          </div>
          <div className=" flex justify-center items-center">
            {Inquiry.user.username}
          </div>
          <div className=" flex justify-center items-center">
            {Inquiry.isClosed ? "open" : "close"}
          </div>
        </>
      ))}
    </div>
  );
}
