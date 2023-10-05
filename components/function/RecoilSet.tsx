"use client";

import { RecoilRoot } from "recoil";

export default function RecoilSet({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <RecoilRoot>{children}</RecoilRoot>
    </div>
  );
}
