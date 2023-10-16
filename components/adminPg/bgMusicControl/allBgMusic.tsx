"use client";

import { useAllBgMusic } from "@/components/hook/useBgMusic";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import EditBgContent from "./editBgMusic";

export default function AllBgMusicData() {
  const allBgMusic = useAllBgMusic();
  const allBgMusicArr = allBgMusic?.allBgMusic || [];
  return allBgMusicArr.map((bgMusic) => {
    return (
      <div className=" flex justify-between items-center h-8 overflow-hidden">
        <div className="">{bgMusic.bgMusicName}</div>
        <div className=" flex items-center">
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Button variant="flat" className="capitalize">
                수정
              </Button>
            </PopoverTrigger>
            <EditBgContent
              filename={bgMusic.bgMusicName}
              fileURL={bgMusic.bgMusicURL}
            />
          </Popover>
          <div className=" w-10">수정</div>
          <div className=" w-10">삭제</div>
        </div>
      </div>
    );
  });
}
