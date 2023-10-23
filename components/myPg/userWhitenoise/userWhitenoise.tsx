"use client";

import { useMyWhitenoise } from "@/components/hook/useWhitenoise";
import UserWhitenoiseTable from "./userWhitenoiseTable";

export default function UserWhitenoise() {
  const whitenoise = useMyWhitenoise();
  const whitenoiseList = whitenoise?.seeMyWhitenoise || [];

  return (
    // 전체 Wrapper
    <div className="max-w-[345px] h-[300px] w-full bg-white rounded-md">
      {/* 유저 백색소음 헤더 */}
      <div className="flex flex-col">
        <div className=" flex items-center p-3 text-sm">
          <span className=" flex items-center h-8">보유 백색소음</span>
        </div>
        {/* 리스트 */}
        <div className=" h-52 overflow-auto scrollbar-none px-3">
          {whitenoiseList.map((whitenoiseItem, index) => (
            <UserWhitenoiseTable
              whitenoise={whitenoiseItem.whiteNoise}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
