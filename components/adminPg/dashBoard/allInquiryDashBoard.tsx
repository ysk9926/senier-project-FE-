"use client";

import {
  useAllInquiry,
  useSeeAnswerInquiry,
  useSeeUnAnswerInquiry,
} from "@/components/hook/useInquiry";
import { IAllInquiryData } from "@/documents/queries/allInquiry.queries";

export default function AllInquiryDashBoard() {
  const all = useAllInquiry();
  const close = useSeeUnAnswerInquiry();
  const open = useSeeAnswerInquiry();

  interface ITest {
    id: number;
    title: string;
    contents: string;
    isClosed: boolean;
    user: {
      username: string;
    };
  }
  const allArr = all?.allInquiry || [];

  console.log(all, close, open);

  return (
    <div>
      {allArr.map((item) => {
        return <div> {item.title} </div>;
      })}
    </div>
  );
}
