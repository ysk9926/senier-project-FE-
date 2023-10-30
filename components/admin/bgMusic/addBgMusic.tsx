"use client";

import {
  Button,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import AddBgMusicContent from "./addBgMusicContent";

export default function AddBgMusic() {
  const { isOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <Popover placement="bottom-end" isOpen={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger>
        <Button
          variant="solid"
          className=" bg-inherit text-base"
          size="sm"
          aria-label="추가"
        >
          추가
        </Button>
      </PopoverTrigger>
      <AddBgMusicContent onClose={onClose} />
    </Popover>
  );
}
