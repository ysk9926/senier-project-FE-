"use client";

import { LoggedInVar, logUserOut } from "@/apollo";
import { useReactiveVar } from "@apollo/client";

export default function Test() {
  const Auth = useReactiveVar(LoggedInVar);
  const onClick = () => {
    console.log(Auth);
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
