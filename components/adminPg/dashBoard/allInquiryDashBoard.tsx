"use client";

import {
  useAllInquiry,
  useSeeAnswerInquiry,
  useSeeUnAnswerInquiry,
} from "@/components/hook/useInquiry";

export default function AllInquiryDashBoard() {
  const all = useAllInquiry();
  const open = useSeeUnAnswerInquiry();
  const close = useSeeAnswerInquiry();

  const allArr = all?.allInquiry || [];
  const openArr = open?.seeUnAnswerInquiry || [];
  const closeArr = close?.seeAnswerInquiry || [];

  console.log(allArr, open, close);

  return (
    <div>
      {allArr.length}
      {openArr.length}
      {closeArr.length}
    </div>
  );
}
