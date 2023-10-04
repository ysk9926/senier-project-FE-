"use client";

import IForward from "@/icon/IForward";
import IPlay from "@/icon/IPlay";
import IRewind from "@/icon/IRewind";
import IVolume from "@/icon/IVolume";
import { ChangeEvent, useState } from "react";

export default function VolControler() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0.5); // 초기값

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(Number(e.target.value));
  };
  const bgVolHandler = () => {
    setIsOpen((pre) => !pre);
  };

  return (
    <div className=" relative flex justify-around items-center w-40 h-9 bg-color_main_black rounded-md ">
      <div className=" w-[18px] fill-white">
        <IRewind />
      </div>
      <div className=" w-[18px] fill-white">
        <IPlay />
      </div>
      <div className=" w-[18px] fill-white">
        <IForward />
      </div>
      <div className=" w-[18px] fill-white " onClick={bgVolHandler}>
        <IVolume />
      </div>
      <div
        className={` flex justify-center items-center -z-[1] absolute w-40 h-10 bg-color_main_black rounded-b-md right-0 transition ease-in duration-500 ${
          isOpen
            ? " translate-y-[75%] opacity-100  "
            : "translate-y-0 opacity-0"
        }`}
      >
        {/* 커스텀 슬라이드 */}
        <div className=" relative">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={value}
            onChange={handleSliderChange}
            className="cursor-pointer z-10 h-[6px] bg-white outline-none accent-green-600"
          />
        </div>
      </div>
    </div>
  );
}
