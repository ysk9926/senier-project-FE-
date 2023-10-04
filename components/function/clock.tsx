"use client";

import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();

  // AM 또는 PM 계산
  const amOrPm = hours >= 12 ? "PM" : "AM";

  // 12시간 형식으로 시간을 변환
  const formattedHours = hours % 12 || 12;

  return (
    <div>
      {/* 날짜 */}
      <span>
        {month}월{date}일
      </span>
      <span>
        {amOrPm} {formattedHours} : {minutes}
      </span>
    </div>
  );
}
