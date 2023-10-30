"use client";

import {
  Button,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import EditBgContent from "./editBgMusic";

/* 인터페이스 구성 */

interface IAllBgMusicPopover {
  bgMusic: {
    id: number;
    bgMusicName: string;
    bgMusicURL: string;
  };
}

export default function AllBgMusicPopover({ bgMusic }: IAllBgMusicPopover) {
  /* 기본 설정 */
  const { isOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <Popover placement="bottom-end" isOpen={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger>
        <Button
          variant="flat"
          className="capitalize bg-inherit border-cyan-950 border text-xs text-cyan-950"
          size="sm"
          aria-label="수정"
        >
          수정
        </Button>
      </PopoverTrigger>
      <EditBgContent
        editBgMusicId={bgMusic.id}
        bgMusicName={bgMusic.bgMusicName}
        oldUrl={bgMusic.bgMusicURL}
        onClose={onClose}
      />
    </Popover>
  );
}
