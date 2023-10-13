"use client";

import { NextUIProvider } from "@nextui-org/react";
import { RecoilRoot } from "recoil";

export default function ProviderSet({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <RecoilRoot>
        <NextUIProvider>{children}</NextUIProvider>
      </RecoilRoot>
    </div>
  );
}
