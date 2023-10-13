"use client";

import { LoggedInVar, logUserOut } from "@/apollo";
import { useReactiveVar } from "@apollo/client";
import useUser from "../hook/useMe";

export default function Test() {
  const userData = useUser();
  const Auth = useReactiveVar(LoggedInVar);
  const onClick = () => {
    console.log(Auth);
    console.log(userData);
  };

  return (
    <div>
      <div className=" absolute w-10 h-10 bg-black" onClick={onClick}></div>
      <div
        className=" absolute left-10 w-10 h-10 bg-blue-950"
        onClick={() => {
          logUserOut();
        }}
      ></div>
    </div>
  );
}
