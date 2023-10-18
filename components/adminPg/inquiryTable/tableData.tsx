"use client";

import { InquiryTagValue } from "@/atom";
import { useAllInquiry } from "@/components/hook/useInquiry";
import { Button, ModalContent, useDisclosure } from "@nextui-org/react";
import { useRecoilValue } from "recoil";
import AnswerInquiryModal from "./answerModal";

export default function InquiryTableData() {
  const tagv = useRecoilValue(InquiryTagValue);
  // 문의하기 데이터 불러오기
  const InquiryD = useAllInquiry();
  const InquiryDArr = InquiryD?.allInquiry || [];

  return (
    <div className="grid grid-cols-[100px_1fr_100px_70px] auto-rows-[40px] divide-y-1 divide-x-1 text-sm overflow-hidden">
      {InquiryDArr.map((Inquiry) =>
        tagv === "all" ? (
          <>
            <div className=" flex justify-center items-center">
              no.{Inquiry.id}
            </div>
            <AnswerInquiryModal
              title={Inquiry.title}
              inquiryId={Inquiry.id}
              content={Inquiry.contents}
              state={Inquiry.isClosed}
              oldAnswer={Inquiry.answer}
            />
            <div className=" flex justify-center items-start overflow-auto scrollbar-none py-2 px-3 cursor-pointer">
              <span>{Inquiry.user.username}</span>
            </div>
            <div className=" flex justify-center items-center">
              {Inquiry.isClosed ? (
                <div className=" rounded-full bg-[#f5a524] w-4 h-4"></div>
              ) : (
                <div className=" rounded-full bg-[#17c964] w-4 h-4"></div>
              )}
            </div>
          </>
        ) : tagv === "close" ? (
          Inquiry.isClosed === false ? (
            <>
              <div className=" flex justify-center items-center">
                no.{Inquiry.id}
              </div>
              <AnswerInquiryModal
                title={Inquiry.title}
                inquiryId={Inquiry.id}
                content={Inquiry.contents}
                state={Inquiry.isClosed}
                oldAnswer={Inquiry.answer}
              />
              <div className=" flex justify-center items-start overflow-auto scrollbar-none py-2 px-3 cursor-pointer">
                <span>{Inquiry.user.username}</span>
              </div>
              <div className=" flex justify-center items-center">
                {Inquiry.isClosed ? (
                  <div className=" rounded-full bg-[#f5a524] w-4 h-4"></div>
                ) : (
                  <div className=" rounded-full bg-[#17c964] w-4 h-4"></div>
                )}
              </div>
            </>
          ) : null
        ) : Inquiry.isClosed === true ? (
          <>
            <div className=" flex justify-center items-center">
              no.{Inquiry.id}
            </div>
            <AnswerInquiryModal
              title={Inquiry.title}
              inquiryId={Inquiry.id}
              content={Inquiry.contents}
              state={Inquiry.isClosed}
              oldAnswer={Inquiry.answer}
            />
            <div className=" flex justify-center items-start overflow-auto scrollbar-none py-2 px-3 cursor-pointer">
              <span>{Inquiry.user.username}</span>
            </div>
            <div className=" flex justify-center items-center">
              {Inquiry.isClosed ? (
                <div className=" rounded-full bg-[#f5a524] w-4 h-4"></div>
              ) : (
                <div className=" rounded-full bg-[#17c964] w-4 h-4"></div>
              )}
            </div>
          </>
        ) : null
      )}
    </div>
  );
}
