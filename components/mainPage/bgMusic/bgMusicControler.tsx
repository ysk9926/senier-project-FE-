"use client";

import IForward from "@/icon/iForward";
import IPlay from "@/icon/iPlay";
import IRewind from "@/icon/iRewind";
import IVolume from "@/icon/iVolume";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useAllBgMusic } from "@/components/hook/useBgMusic";
import IPause from "@/icon/iPause";
import VolMute from "./volMute";
import BgMusicVolume from "./bgMusicVolume";

export default function BgMusicController() {
  // 볼륨조절 창 상태
  const [isOpen, setIsOpen] = useState(false);
  const bgVolHandler = () => {
    setIsOpen((pre) => !pre);
  };

  // 볼륨조절
  const [value, setValue] = useState(0.5);

  // 오디오 플레이어
  interface BgMusic {
    bgMusicURL: string;
    bgMusicName: string;
  }
  const bgMusic = useAllBgMusic();
  const [bgMusicArr, setBgMusicArr] = useState<BgMusic[]>([]);
  useEffect(() => {
    if (bgMusic?.allBgMusic) {
      const musicArray = bgMusic.allBgMusic.map((bgmusic) => ({
        bgMusicURL: bgmusic.bgMusicURL,
        bgMusicName: bgmusic.bgMusicName,
      }));
      setBgMusicArr(musicArray);
    }
  }, [bgMusic]);

  // 현제 플레중인 곡
  const [nowPlaying, setNowPlaying] = useState(0);
  const nextBtn = () => {
    const musicNum = nowPlaying + 1;
    if (bgMusicArr.length === musicNum) {
      setNowPlaying(0);
    } else {
      setNowPlaying(musicNum);
    }
    setIsPlaying(false);
  };
  const preBtn = () => {
    const musicNum = nowPlaying - 1;
    if (musicNum < 0) {
      setNowPlaying(bgMusicArr.length - 1);
    } else {
      setNowPlaying(musicNum);
    }
    setIsPlaying(false);
  };
  // 오디오 재생 버튼
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 재생 설정
  const [isPlaying, setIsPlaying] = useState(false); // 버튼 상태를 추적하는 상태
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

  return (
    <div className=" space-x-3 flex justify-between items-center px-3 min-[820px]:px-8 ">
      <div className=" relative">
        <div className=" flex justify-around items-center w-40 h-9 bg-color_main_black rounded-md ">
          <div className=" w-[18px] fill-white" onClick={preBtn}>
            <IRewind />
          </div>
          <div className=" w-[18px] fill-white" onClick={play}>
            {isPlaying ? <IPause /> : <IPlay />}
          </div>
          <div className=" w-[18px] fill-white" onClick={nextBtn}>
            <IForward />
          </div>
          <div className=" w-[18px] fill-white  z-10 " onClick={bgVolHandler}>
            <IVolume />
          </div>
        </div>
        <audio
          ref={audioRef}
          src={bgMusicArr.length > 0 ? bgMusicArr[nowPlaying].bgMusicURL : ""}
          loop={true}
        ></audio>
        <AnimatePresence>
          {isOpen && (
            <BgMusicVolume
              audioRef={audioRef}
              bgName={bgMusicArr[nowPlaying].bgMusicName}
              value={value}
              setValue={setValue}
            />
          )}
        </AnimatePresence>
      </div>
      {/* 음소거 */}
      <VolMute audioRef={audioRef} />
    </div>
  );
}
