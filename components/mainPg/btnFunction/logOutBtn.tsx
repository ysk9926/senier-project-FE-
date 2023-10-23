"use client";

import { LoggedInVar, logUserOut } from "@/apollo";
import ILogout from "@/icon/ILogout";
import { useReactiveVar } from "@apollo/client";
import { useEffect, useState } from "react";

export default function LogOutBtn() {
  // Hydration Error을 해결
  const [isWindow, setIsWindow] = useState<boolean>(false);
  useEffect(() => {
    setIsWindow(true);
  }, []);

  const Auth = useReactiveVar(LoggedInVar);
  return (
    isWindow &&
    (Auth ? (
      <div className="w-[18px] fill-white" onClick={() => logUserOut()}>
        <ILogout />
      </div>
    ) : null)
  );
}
