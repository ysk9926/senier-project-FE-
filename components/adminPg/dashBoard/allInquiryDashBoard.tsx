"use client";

import {
  useAllInquiry,
  useSeeAnswerInquiry,
  useSeeUnAnswerInquiry,
} from "@/components/hook/useInquiry";
import Circle from "./circleProgress";

export default function AllInquiryDashBoard() {
  const all = useAllInquiry();
  const open = useSeeUnAnswerInquiry();
  const close = useSeeAnswerInquiry();

  const allArr = all?.allInquiry || [];
  const openArr = open?.seeUnAnswerInquiry || [];
  const closeArr = close?.seeAnswerInquiry || [];

  console.log(allArr, open, close);

  return (
    <div className="flex space-x-2">
      {/* progress */}
      <div className=" flex flex-col items-center w-64 bg-[#222] rounded-xl">
        <h2 className=" text-white text-sm mt-3">문의하기</h2>
        <Circle cnt={Number(allArr.length)} />
      </div>
      <div className=" flex flex-col items-center w-64 h-36 bg-[#222] rounded-xl">
        <h2 className=" text-white text-sm mt-3">답변 전</h2>
        <Circle cnt={Number(openArr.length)} />
      </div>
      <div className=" flex flex-col items-center w-64 h-36 bg-[#222] rounded-xl">
        <h2 className=" text-white text-sm mt-3">답변 완료</h2>
        <Circle cnt={Number(closeArr.length)} />
      </div>
    </div>
  );
}
