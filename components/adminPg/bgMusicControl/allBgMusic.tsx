"use client";

import { useAllBgMusic } from "@/components/hook/useBgMusic";

export default function AllBgMusicData() {
  const allBgMusic = useAllBgMusic();
  const allBgMusicArr = allBgMusic?.allBgMusic || [];
  return allBgMusicArr.map((bgMusic) => {
    return (
      <div className=" flex justify-between items-center h-8 overflow-hidden">
        <div className="">{bgMusic.bgMusicName}</div>
        <div className=" flex items-center">
          <div className=" w-10">수정</div>
          <div className=" w-10">삭제</div>
        </div>
      </div>
    );
  });
}
