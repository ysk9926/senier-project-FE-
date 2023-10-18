import ISuffle from "@/icon/ISuffle";
import IVolCustom from "@/icon/IVolCustom";

import ISetting from "@/icon/ISetting";
import LoginBtn from "./btnFunction/loginBtn";

export default function ControlbarGroup() {
  return (
    <div className=" absolute top-[120px] right-8">
      <div className=" flex flex-col justify-around items-center w-9 h-40 bg-color_main_black rounded-md">
        <div className=" w-[18px] fill-white">
          <ISuffle />
        </div>
        <div className=" w-[18px] fill-white">
          <IVolCustom />
        </div>
        {/* user */}
        <LoginBtn />
        <div className=" w-[18px] fill-white">
          <ISetting />
        </div>
      </div>
    </div>
  );
}
