import React from "react";
import { CircularProgress } from "@nextui-org/react";

export default function Circle() {
  return (
    <CircularProgress
      classNames={{
        svg: "w-36 h-36 drop-shadow-md",
        indicator: "stroke-green-500",
        track: "stroke-green-500/10",
        value: "text-3xl font-semibold text-white",
      }}
      value={70}
      strokeWidth={4}
      showValueLabel={true}
    />
  );
}
