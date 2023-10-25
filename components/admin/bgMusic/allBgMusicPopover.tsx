"use client";

import {
  Button,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import EditBgContent from "./editBgMusic";

export default function AllBgMusicPopover({
  bgMusic,
}: {
  bgMusic: {
    id: number;
    bgMusicName: string;
    bgMusicURL: string;
  };
}) {
  // next ui
  const { isOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <Popover placement="bottom-end" isOpen={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger>
        <Button
          variant="flat"
          className="capitalize bg-inherit border-cyan-950 border text-xs text-cyan-950"
          size="sm"
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
