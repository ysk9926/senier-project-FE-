import Logo from "@/icon/logo";
import BgMusicController from "./bgMusic/bgMusicControler";

export default function HeaderGroup() {
  return (
    <div className="flex justify-between pt-3">
      {/* logo - wrapper */}
      <div className=" flex justify-center items-center w-titleSize min-w-[220px] h-[70px] bg-[#292929]">
        {/* logo */}
        <div className=" w-52 h-10 flex justify-center items-center">
          <Logo />
        </div>
      </div>
      {/* 유저 & 시계 */}
      <div className=" w-titleSize flex justify-center items-start"></div>
      {/* 음량조절 및 메뉴 */}
      <BgMusicController />
    </div>
  );
}
