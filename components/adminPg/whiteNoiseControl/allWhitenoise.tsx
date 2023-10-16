"use client";

import { useAllWhitenoise } from "@/components/hook/useWhitenoise";

export default function AllWhitenoiseData() {
  const allWhitenoise = useAllWhitenoise();
  const allWhitenoiseArr = allWhitenoise?.allWhitenoise || [];
  return allWhitenoiseArr.map((whitenoise) => {
    return (
      <div className=" flex justify-between items-center h-8 overflow-hidden">
        <div className="">{whitenoise.whitenoiseName}</div>
        <div>{whitenoise.requirePoints}</div>
        <div className=" flex items-center">
          <div className=" w-10">수정</div>
          <div className=" w-10">삭제</div>
        </div>
      </div>
    );
  });
}
