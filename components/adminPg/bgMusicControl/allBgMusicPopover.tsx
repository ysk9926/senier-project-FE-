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
          className="capitalize bg-gray-600 text-xs text-white"
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
