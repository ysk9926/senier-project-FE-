"use client";

import IForward from "@/icon/IForward";
import IPlay from "@/icon/IPlay";
import IRewind from "@/icon/IRewind";
import IVolume from "@/icon/IVolume";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BgMusicVolume from "../bgMusic/BgMusicVolume";
import { useAllBgMusic } from "@/components/hook/useBgMusic";
import IPause from "@/icon/IPause";

export default function BgMusicController() {
  // 볼륨조절 상태
  const [isOpen, setIsOpen] = useState(false);
  const bgVolHandler = () => {
    setIsOpen((pre) => !pre);
  };

  // 오디오 플레이어
  const bgMusic = useAllBgMusic();
  const [bgMusicUrl, setBgMusicUrl] = useState<string[]>([]);
  useEffect(() => {
    if (bgMusic?.allBgMusic) {
      const urls = bgMusic.allBgMusic.map((bgmusic) => bgmusic.bgMusicURL);
      setBgMusicUrl(urls);
    }
  }, [bgMusic]);

  // 현제 플레중인 곡
  const [nowPlaying, setNowPlaying] = useState(0);
  const nextBtn = () => {
    const musicNum = nowPlaying + 1;
    if (bgMusicUrl.length === musicNum) {
      setNowPlaying(0);
    } else {
      setNowPlaying(musicNum);
    }
    setIsPlaying(false);
  };
  const preBtn = () => {
    const musicNum = nowPlaying - 1;
    if (musicNum < 0) {
      setNowPlaying(bgMusicUrl.length - 1);
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
      <audio ref={audioRef} src={bgMusicUrl[nowPlaying]}></audio>
      <AnimatePresence>
        {isOpen && <BgMusicVolume audioRef={audioRef} />}
      </AnimatePresence>
    </div>
  );
}
