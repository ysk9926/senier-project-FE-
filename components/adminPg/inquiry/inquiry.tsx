"use client";

import { useAllInquiry } from "@/components/hook/useInquiry";

export default function Inquiry() {
  const allInquiry = useAllInquiry();

  const allInquiryArr = allInquiry?.allInquiry || [];

  return (
    <div>
      {allInquiryArr.map((Inquiry) => {
        return (
          <div>
            <span>제목:{Inquiry.title}</span>
            <span>내용:{Inquiry.contents}</span>
            <span>상태:{Inquiry.isClosed ? "open" : "close"}</span>
          </div>
        );
      })}
    </div>
  );
}
