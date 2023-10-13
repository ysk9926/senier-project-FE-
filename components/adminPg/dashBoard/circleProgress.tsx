import React from "react";
import { CircularProgress } from "@nextui-org/react";

export default function Circle({ cnt }: { cnt: number }) {
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
        value={cntValue} // 숫자로 변환된 cnt를 전달
        strokeWidth={4}
      />
      <span className=" text-white ml-7"> {cnt}/100 </span>
    </div>
  );
}
