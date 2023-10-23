"use client";

import { LoggedInVar, logUserOut } from "@/apollo";
import ILogout from "@/icon/ILogout";
import { useReactiveVar } from "@apollo/client";

export default function LogOutBtn() {
  const Auth = useReactiveVar(LoggedInVar);
  return Auth ? (
    <div className="w-[18px] fill-white" onClick={() => logUserOut()}>
      <ILogout />
    </div>
  ) : (
    <div className=" hidden"></div>
  );
}
