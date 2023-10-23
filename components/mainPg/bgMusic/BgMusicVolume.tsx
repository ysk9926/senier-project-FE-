import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";

interface IBgMusicVolumeProps {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  bgName: string;
  value: number;
  setValue: (newValue: number) => void;
}

export default function BgMusicVolume({
  audioRef,
  bgName,
  value,
  setValue,
}: IBgMusicVolumeProps) {
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const volume = Number(e.target.value);
    setValue(volume);

    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: -5 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.8 }}
      className={` flex justify-center items-center absolute w-40 pb-3 bg-color_main_black rounded-b-md right-0 
        }`}
    >
      <div>
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
        <span className=" text-xs pt-2 text-white flex justify-center items-center">
          {bgName}
        </span>
      </div>
    </motion.div>
  );
}
