import Logo from "@/icon/logo";
import VolControler from "./btnFunction/bgVolBtn";
import VolMute from "./controlers";
import MenueBtn from "./btnFunction/menueBtn";

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
      <div className=" w-titleSize flex justify-between items-center px-8 ">
        {/* 음량조절 */}
        <VolControler />
        {/* 음소거 */}
        <VolMute />
        {/* 메뉴 */}
        <MenueBtn />
      </div>
    </div>
  );
}
