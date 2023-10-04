import VolControler from "@/components/mainPg/btnFunction/bgVolBtn";
import VolMute from "@/components/mainPg/controlers";
import MenueBtn from "@/components/mainPg/menueBtn";
import IMolla from "@/icon/IMolla";
import ISetting from "@/icon/ISetting";
import ISuffle from "@/icon/ISuffle";
import IVolCustom from "@/icon/IVolCustom";
import Logo from "@/icon/logo";

import BgImg from "@/components/mainPg/bgImg";
import LoginPg from "@/components/mainPg/Auth/loginPg";

export default function Home() {
  return (
    <div className=" relative  w-full h-screen ">
      {/* header */}
      <div className="flex justify-between pt-3">
        {/* logo - wrapper */}
        <div className=" flex justify-center items-center w-titleSize min-w-[220px] h-[70px] bg-[#292929]">
          {/* logo */}
          <div className=" w-52 h-10 flex justify-center items-center">
            <Logo />
          </div>
        </div>
        {/* 유저 & 시계 */}
        <div className=" w-titleSize flex justify-center items-start">
          {/* 유저명 */}
          <span className=" mr-3">승규님 안녕하세요</span>
        </div>
        {/* 음량조절 및 메뉴 */}
        <div className=" w-titleSize flex justify-between items-center px-8 ">
          {/* 음량조절 */}
          <VolControler />
          {/* 음소거 */}
          <VolMute />
          {/* 메뉴 */}
          <MenueBtn />
        </div>
      </div>
      {/* control - bar */}
      <div className=" absolute top-[120px] right-8">
        <div className=" flex flex-col justify-around items-center w-9 h-40 bg-color_main_black rounded-md">
          <div className=" w-[18px] fill-white">
            <ISuffle />
          </div>
          <div className=" w-[18px] fill-white">
            <IVolCustom />
          </div>
          <div className=" w-[18px] fill-white">
            <IMolla />
          </div>
          <div className=" w-[18px] fill-white">
            <ISetting />
          </div>
        </div>
      </div>
      {/* background - img */}
      <BgImg />
      {/* background */}
      <div className=" absolute w-full h-full top-0 -z-[99999] bg-[#B87D54]">
        {/* bg-top */}
        <div className=" bg-[#BCC7B2] w-full h-[90%]"></div>
      </div>
      {/* login */}
      <LoginPg />
    </div>
  );
}
