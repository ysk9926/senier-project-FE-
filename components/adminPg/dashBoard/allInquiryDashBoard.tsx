"use client";

import {
  useAllInquiry,
  useSeeAnswerInquiry,
  useSeeUnAnswerInquiry,
} from "@/components/hook/useInquiry";
import { CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Circle from "./test";

export default function AllInquiryDashBoard() {
  const all = useAllInquiry();
  const open = useSeeUnAnswerInquiry();
  const close = useSeeAnswerInquiry();

  const allArr = all?.allInquiry || [];
  const openArr = open?.seeUnAnswerInquiry || [];
  const closeArr = close?.seeAnswerInquiry || [];

  console.log(allArr, open, close);

  return (
    <div className=" stroke-green-500">
      {/* progress */}
      <Circle />
    </div>
  );
}
