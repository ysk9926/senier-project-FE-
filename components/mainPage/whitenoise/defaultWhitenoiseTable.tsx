"use client";

import { CarSoundValue, CityRainValue, PeoplesoundValue } from "@/atom";
import IPause from "@/icon/iPause";
import IPlay from "@/icon/iPlay";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";

export default function DefaultWhitenoiseTable({
  whitenoise,
  index,
}: {
  whitenoise: {
    whitenoiseName: string;
    whitenoiseURL: string;
    backgroundImgURL: string;
  };
  index: number;
}) {
  const bgUrl = whitenoise.backgroundImgURL;
  const divStyle = {
    backgroundImage: `url(${bgUrl})`,
  };

  // 오디오 플레이어
  const [isPlaying, setIsPlaying] = useState(false); // 버튼 상태를 추적하는 상태
  const [volume, setVolume] = useState(0.5); // 초기 볼륨 설정

  // 재생 설정
  const play = () => {
    if (index === 0) {
      setCityRainPlay(!cityrainPlay);
    } else if (index === 1) {
      setCarsoundPlay(!carsoundPlay);
    } else if (index === 2) {
      setPeoplesoundPlay(!peoplesoundPlay);
    } else {
      setIsPlaying(!isPlaying);
    }
  };
  // 볼륨 설정
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  // 빗소리 핸들러
  const [cityrainPlay, setCityRainPlay] = useRecoilState(CityRainValue);
  useEffect(() => {
    if (index === 0) {
      setIsPlaying(cityrainPlay);
    }
  }, [cityrainPlay]);
  // 도시소음 핸들러
  const [carsoundPlay, setCarsoundPlay] = useRecoilState(CarSoundValue);
  useEffect(() => {
    if (index === 1) {
      setIsPlaying(carsoundPlay);
    }
  }, [carsoundPlay]);
  // 속삭이는 소리 핸들러
  const [peoplesoundPlay, setPeoplesoundPlay] =
    useRecoilState(PeoplesoundValue);
  useEffect(() => {
    if (index === 2) {
      setIsPlaying(peoplesoundPlay);
    }
  }, [peoplesoundPlay]);

  return (
    <div
      className=" h-16 text-white mb-2 rounded-md bg-cover"
      key={index}
      style={divStyle}
    >
      <div className="w-full h-full backdrop-blur-sm  flex justify-between p-2 rounded-md">
        <div className=" flex items-end pl-2">{whitenoise.whitenoiseName}</div>
        <div className=" flex justify-center items-center">
          {/* 볼륨 조절 */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            className=" w-16 cursor-pointer outline-none accent-cyan-950 bg-white"
            onChange={handleVolumeChange}
          />
          {/* 플레이 버튼 */}
          <div className="flex items-center">
            <div className=" w-8 h-8 fill-white" onClick={play}>
              {isPlaying ? <IPause /> : <IPlay />}
            </div>
            <div className="hidden">
              <ReactPlayer
                loop={true}
                url={whitenoise.whitenoiseURL}
                playing={isPlaying}
                volume={volume}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
