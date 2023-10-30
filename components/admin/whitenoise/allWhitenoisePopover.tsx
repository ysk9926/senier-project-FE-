"use client";

import {
  Button,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import EditWhitenoise from "./editWhitenoise";

interface IAllWhitenoisePopover {
  whitenoise: {
    id: number;
    whitenoiseName: string;
    requirePoints: number | null;
    whitenoiseURL: string;
    backgroundImgURL: string;
  };
}

export default function AllWhitenoisePopover({
  whitenoise,
}: IAllWhitenoisePopover) {
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
      <EditWhitenoise
        whitenoiseName={whitenoise.whitenoiseName}
        editWhitenoiseId={whitenoise.id}
        oldUrl={whitenoise.whitenoiseURL}
        oldBgUrl={whitenoise.backgroundImgURL}
        oldRequirePoints={whitenoise.requirePoints}
        onClose={onClose}
      />
    </Popover>
  );
}
