"use client";

import { useRecoilValue } from "recoil";
import AnswerInquiryModal from "./answerModal";
import { IInquiryDArr } from "./maintable";
import { InquiryTagValue } from "@/atom";
import { useAllInquiry } from "@/components/hook/useInquiry";
import React, { useEffect, useState } from "react";

export default function InquiryTableData() {
  const tagv = useRecoilValue(InquiryTagValue);
  // 문의하기 데이터 불러오기
  const InquiryD = useAllInquiry();
  const InquiryDArr = InquiryD?.allInquiry || [];

  const [array, setArray] = useState(InquiryDArr);

  useEffect(() => {
    if (tagv === "all") {
      setArray(InquiryDArr);
    } else if (tagv === "close") {
      setArray(InquiryDArr.filter((item) => item.isClosed === true));
    } else {
      setArray(InquiryDArr.filter((item) => item.isClosed === false));
    }
  }, [tagv, InquiryD]);

  return (
    <div className="grid grid-cols-[100px_1fr_100px_100px] auto-rows-[40px] text-sm overflow-hidden">
      {array.map((Inquiry, index) => (
        <React.Fragment key={index}>
          {/* 문의 넘버 */}
          <div className=" flex justify-center items-center border-r border-b">
            no.{Inquiry.id}
          </div>
          {/* 문의 타이틀 */}
          <AnswerInquiryModal
            title={Inquiry.title}
            inquiryId={Inquiry.id}
            content={Inquiry.contents}
            state={Inquiry.isClosed}
            oldAnswer={Inquiry.answer}
          />
          {/* 문의 작성자 */}
          <div className=" flex justify-center items-start overflow-auto scrollbar-none py-2 px-3 cursor-pointer border-r border-b">
            <span>{Inquiry.user.username}</span>
          </div>
          {/* 문의 상태 */}
          <div className=" flex justify-center items-center border-b">
            {Inquiry.isClosed ? (
              <div className=" flex justify-center items-center">
                <div className=" rounded-full bg-[#17c964]  w-[10px] h-[10px]"></div>
                <span className=" pl-1 text-sm">답변완료</span>
              </div>
            ) : (
              <div className=" flex justify-center items-center">
                <div className=" rounded-full bg-[#f5a524]  w-[10px] h-[10px]"></div>
                <span className=" pl-1 text-sm">답변대기</span>
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
