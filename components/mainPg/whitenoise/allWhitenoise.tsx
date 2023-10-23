"use client";

import { useMyWhitenoise } from "@/components/hook/useWhitenoise";
import IVolCustom from "@/icon/IVolCustom";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import MainPgWhitenoiseTable from "./mainPgWhitenoiseTable";

export default function AllWhitenoise() {
  const whitenoise = useMyWhitenoise();
  const whitenoiseList = whitenoise?.seeMyWhitenoise || [];

  return (
    <Popover offset={10} placement="left-start" backdrop="opaque">
      <PopoverTrigger>
        <div className=" w-[18px] fill-white bg-inherit">
          <IVolCustom />
        </div>
      </PopoverTrigger>
      <PopoverContent className=" w-64 rounded-md h-56 bg-color_main_black mr-2 flex justify-start">
        {/* 타이틀 */}
        <div className=" w-full flex justify-start text-white font-semibold py-2">
          <span>백색소음</span>
        </div>
        <div className=" w-full h-48 overflow-auto scrollbar-none">
          {whitenoiseList.map((whitenoiseItem, index) => (
            <MainPgWhitenoiseTable
              whitenoise={whitenoiseItem.whiteNoise}
              index={index}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
