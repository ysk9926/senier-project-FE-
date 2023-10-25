"use client";

import { InquiryTagValue } from "@/atom";
import { Tab, Tabs } from "@nextui-org/react";
import { useRecoilState } from "recoil";

export default function InquiryTags() {
  const [tagV, setTagV] = useRecoilState(InquiryTagValue);

  return (
    <Tabs
      selectedKey={tagV}
      onSelectionChange={(key) => setTagV(key as string)}
      variant="underlined"
      color={`${
        tagV === "all" ? "default" : tagV === "close" ? "success" : "warning"
      }`}
    >
      <Tab key="all" title="ALL" />
      <Tab key="open" title="OPEN" />
      <Tab key="close" title="CLOSE" />
    </Tabs>
  );
}
