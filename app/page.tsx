import BgImg from "@/components/mainPg/bgImg";
import LoginPg from "@/components/mainPg/Auth/loginPg";
import HeaderGroup from "@/components/mainPg/headerGroup";
import ControlbarGroup from "@/components/mainPg/controlbarGroup";
import BgImgBtn from "@/components/mainPg/btnFunction/bgImgBtn";

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
