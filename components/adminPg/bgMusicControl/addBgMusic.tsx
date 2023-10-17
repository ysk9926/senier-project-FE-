"use client";

import { Button, Popover, PopoverTrigger } from "@nextui-org/react";
import AddBgMusicContent from "./addBgMusicContent";

export default function AddBgMusic() {
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
      <AddBgMusicContent />
    </Popover>
  );
}
