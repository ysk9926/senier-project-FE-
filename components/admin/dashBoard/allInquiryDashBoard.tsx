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

  const dashBoardData = [
    { title: "문의하기", count: Number(allArr.length), maxVal: 100 },
    {
      title: "답변 대기",
      count: Number(openArr.length),
      maxVal: allArr.length,
    },
    {
      title: "답변 완료",
      count: Number(closeArr.length),
      maxVal: allArr.length,
    },
  ];

  return (
    <div className="flex justify-between space-x-2">
      {dashBoardData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-64 bg-cyan-950 rounded-xl pb-3"
        >
          <h2 className="text-white text-sm mt-3 font-semibold">
            {item.title}
          </h2>
          <Circle cnt={item.count} maxVal={item.maxVal} />
        </div>
      ))}
    </div>
  );
}
