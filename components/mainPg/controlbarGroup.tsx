import ISuffle from "@/icon/ISuffle";
import IVolCustom from "@/icon/IVolCustom";
import LoginBtn from "./btnFunction/loginBtn";
import LogOutBtn from "./btnFunction/logOutBtn";
import AllWhitenoise from "./whitenoise/allWhitenoise";

export default function ControlbarGroup() {
  return (
    <div className=" absolute top-[120px] right-8">
      <div className=" flex flex-col justify-around items-center w-9 space-y-5 py-3 bg-color_main_black rounded-md">
        <div className=" w-[18px] fill-white">
          <ISuffle />
        </div>
        <AllWhitenoise />
        {/* user */}
        <LoginBtn />
        <LogOutBtn />
      </div>
    </div>
  );
}
