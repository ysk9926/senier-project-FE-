"use client";

import UserWhitenoiseUnLockModal from "@/components/mainPage/whitenoise/whitenoiseUnlockModal";
import IPause from "@/icon/iPause";
import IPlay from "@/icon/iPlay";
import { useRef, useState } from "react";

export default function UserWhitenoiseTable({
  whitenoise,
  index,
  isLocked,
}: {
  whitenoise: {
    id: number;
    whitenoiseName: string;
    backgroundImgURL: string;
    whitenoiseURL: string;
    requirePoints: number;
  };
  index: number;
  isLocked: boolean;
}) {
  const bgUrl = whitenoise.backgroundImgURL;
  const divStyle = {
    backgroundImage: `url(${bgUrl})`,
  };

  // 오디오 플레이어
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // 버튼 상태를 추적하는 상태
  const [volume, setVolume] = useState(0.5); // 초기 볼륨 설정

  // 재생 설정
  const play = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // 이미 재생 중이라면 일시정지
      } else {
        audioRef.current.play(); // 아니라면 재생
      }
      setIsPlaying(!isPlaying); // 버튼 상태를 토글
    } else {
      console.log("에러");
    }
  };
  // 볼륨 설정
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  return isLocked ? (
    // 잠겨있는 경우
    <label className=" relative">
      <UserWhitenoiseUnLockModal
        whitenoiseName={whitenoise.whitenoiseName}
        whitenoiseId={whitenoise.id}
        requirePoints={whitenoise.requirePoints}
      />
      <div
        className="h-16 text-white mb-2 rounded-md bg-cover"
        style={divStyle}
      >
        <div className="w-full h-full backdrop-blur-sm  flex justify-between p-2 rounded-md">
          <div key={index} className=" flex items-end pl-2">
            {whitenoise.whitenoiseName}
          </div>
          <div className=" flex justify-center items-center">
            {/* 볼륨 조절 */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              className=" w-20 cursor-pointer outline-none accent-cyan-950 bg-white"
              onChange={handleVolumeChange}
            />
            {/* 플레이 버튼 */}
            <div className="flex items-center">
              <div className=" w-8 h-8 fill-white" onClick={play}>
                {isPlaying ? <IPause /> : <IPlay />}
              </div>
              <audio
                ref={audioRef}
                src={whitenoise.whitenoiseURL}
                loop={true}
              ></audio>
            </div>
          </div>
        </div>
      </div>
    </label>
  ) : (
    // 잠금 해제되어있는 경우
    <div className="h-16 text-white mb-2 rounded-md bg-cover" style={divStyle}>
      <div className="w-full h-full backdrop-blur-sm  flex justify-between p-2 rounded-md">
        <div key={index} className=" flex items-end pl-2">
          {whitenoise.whitenoiseName}
        </div>
        <div className=" flex justify-center items-center">
          {/* 볼륨 조절 */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            className=" w-20 cursor-pointer outline-none accent-cyan-950 bg-white"
            onChange={handleVolumeChange}
          />
          {/* 플레이 버튼 */}
          <div className="flex items-center">
            <div className=" w-8 h-8 fill-white" onClick={play}>
              {isPlaying ? <IPause /> : <IPlay />}
            </div>
            <audio
              ref={audioRef}
              src={whitenoise.whitenoiseURL}
              loop={true}
            ></audio>
          </div>
        </div>
      </div>
    </div>
  );
}
