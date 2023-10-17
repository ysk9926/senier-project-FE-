"use client";

import { Button, Popover, PopoverTrigger } from "@nextui-org/react";
import AddWhitenosieContent from "./addWhitenoiseContent";

export default function AddWhitenoise() {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button
          variant="solid"
          className="capitalize bg-inherit text-xs"
          size="sm"
        >
          추가
        </Button>
      </PopoverTrigger>
      <AddWhitenosieContent />
    </Popover>
  );
}
