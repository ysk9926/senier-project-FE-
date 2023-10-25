import LoginPg from "@/components/mainPage/auth/loginPg";
import BgImg from "@/components/mainPage/bgImg";
import BgImgBtn from "@/components/mainPage/btnFunction/bgImgBtn";
import ControlbarGroup from "@/components/mainPage/controlbarGroup";
import HeaderGroup from "@/components/mainPage/headerGroup";

export default function Home() {
  return (
    <div className=" relative  w-full h-screen ">
      {/* header */}
      <HeaderGroup />
      {/* control - bar */}
      <ControlbarGroup />
      {/* background - img */}
      <BgImg />
      {/* background */}
      <div className=" absolute w-full h-full top-0 -z-[99999] bg-[#B87D54]">
        {/* bg-top */}
        <div className=" bg-[#BCC7B2] w-full h-[90%]"></div>
      </div>
      {/* login */}
      <LoginPg />
      {/* whitenoise - btn */}
      <BgImgBtn />
    </div>
  );
}
