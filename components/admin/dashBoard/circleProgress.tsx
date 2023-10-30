import React from "react";
import { CircularProgress } from "@nextui-org/react";

interface ICircle {
  cnt: number;
  maxVal: number;
}

export default function Circle({ cnt, maxVal }: ICircle) {
  const cntValue = typeof cnt === "number" ? cnt : 0;

  return (
    <div className=" flex justify-center items-center w-full mt-3">
      <CircularProgress
        classNames={{
          svg: "w-20 h-20 drop-shadow-md",
          indicator: "stroke-green-500",
          track: "stroke-green-500/10",
          value: "text-xl font-semibold text-white",
        }}
        maxValue={maxVal}
        value={cntValue}
        strokeWidth={4}
        aria-label={`${cnt} out of ${maxVal}`}
      />
      <span className=" text-white ml-7">
        {cnt}/{maxVal}
      </span>
    </div>
  );
}
