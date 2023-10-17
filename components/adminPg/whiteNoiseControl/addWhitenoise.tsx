"use client";

import {
  Button,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import AddWhitenosieContent from "./addWhitenoiseContent";

export default function AddWhitenoise() {
  const { isOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <Popover placement="bottom-end" isOpen={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger>
        <Button
          variant="solid"
          className="capitalize bg-inherit text-xs"
          size="sm"
        >
          추가
        </Button>
      </PopoverTrigger>
      <AddWhitenosieContent onClose={onClose} />
    </Popover>
  );
}
