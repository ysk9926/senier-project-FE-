"use client";

import IMute from "@/icon/IMute";
import { useState } from "react";

interface IBgMusicMuteProps {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

export default function VolMute({ audioRef }: IBgMusicMuteProps) {
  // 볼륨 조절 및 음소거 상태
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted; // 음소거 토글
      setIsMuted(!isMuted);
    }
  };
  return (
    <div
      className=" flex justify-center items-center w-9 h-9 bg-color_main_black rounded-md"
      onClick={toggleMute}
    >
      <div className={`w-[18px] fill-white ${isMuted ? null : "opacity-20"}`}>
        <IMute />
      </div>
    </div>
  );
}
