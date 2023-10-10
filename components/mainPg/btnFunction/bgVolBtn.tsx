"use client";

import IForward from "@/icon/IForward";
import IPlay from "@/icon/IPlay";
import IRewind from "@/icon/IRewind";
import IVolume from "@/icon/IVolume";
import { AnimatePresence } from "framer-motion";
import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";

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
    <div className=" relative">
      <div className=" flex justify-around items-center w-40 h-9 bg-color_main_black rounded-md ">
        <div className=" w-[18px] fill-white">
          <IRewind />
        </div>
        <div className=" w-[18px] fill-white">
          <IPlay />
        </div>
        <div className=" w-[18px] fill-white">
          <IForward />
        </div>
        <div className=" w-[18px] fill-white  z-10 " onClick={bgVolHandler}>
          <IVolume />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: -5 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8 }}
            className={` flex justify-center items-center absolute w-40 h-10 bg-color_main_black rounded-b-md right-0 
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
                className="cursor-pointer h-[6px] bg-white outline-none accent-green-600"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
