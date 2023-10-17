"use client";

import {
  Button,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import EditWhitenoise from "./editWhitenoise";

export default function AllWhitenoisePopover({
  whitenoise,
}: {
  whitenoise: {
    id: number;
    whitenoiseName: string;
    requirePoints: number | null;
    whitenoiseURL: string;
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
      <EditWhitenoise
        whitenoiseName={whitenoise.whitenoiseName}
        editWhitenoiseId={whitenoise.id}
        oldUrl={whitenoise.whitenoiseURL}
        oldRequirePoints={whitenoise.requirePoints}
        onClose={onClose}
      />
    </Popover>
  );
}
