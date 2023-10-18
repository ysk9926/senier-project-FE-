"use client";

import { useMyWhitenoise } from "@/components/hook/useWhitenoise";
import IPlay from "@/icon/IPlay";

export default function UserWhitenoise() {
  const whitenoise = useMyWhitenoise();
  const whitenoiseList = whitenoise?.seeMyWhitenoise || [];
  console.log(whitenoise);

  return (
    <div className="w-80 h-56 bg-lime-200">
      <div className="flex flex-col">
        <div className=" border-b-1">보유 백색소음</div>
        {/* 리스트 */}
        {whitenoiseList.map((whitenoiseItem, index) => (
          <div className=" flex justify-between py-2 bg-blue-200">
            <div key={index}>{whitenoiseItem.whiteNoise.whitenoiseName}</div>
            <div className=" w-6 h-6">
              <IPlay />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
