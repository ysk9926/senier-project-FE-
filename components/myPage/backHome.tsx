"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function BackHome() {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/");
  };
  return (
    <Button
      size="sm"
      className=" bg-white font-semibold z-10"
      onClick={onClickHandler}
    >
      홈
    </Button>
  );
}
