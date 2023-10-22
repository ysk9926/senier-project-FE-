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

  return (
    <div className="flex justify-between space-x-2">
      {/* progress */}
      <div className=" flex flex-col items-center w-64 bg-cyan-950 rounded-xl">
        <h2 className=" text-white text-sm mt-3 font-semibold">문의하기</h2>
        <Circle cnt={Number(allArr.length)} maxVal={100} />
      </div>
      <div className=" flex flex-col items-center w-64 h-36 bg-cyan-950 rounded-xl">
        <h2 className=" text-white text-sm mt-3 font-semibold">답변 대기</h2>
        <Circle cnt={Number(openArr.length)} maxVal={allArr.length} />
      </div>
      <div className=" flex flex-col items-center w-64 h-36 bg-cyan-950 rounded-xl">
        <h2 className=" text-white text-sm mt-3 font-semibold">답변 완료</h2>
        <Circle cnt={Number(closeArr.length)} maxVal={allArr.length} />
      </div>
    </div>
  );
}
