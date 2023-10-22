import AddBgMusic from "./addBgMusic";
import AllBgMusicData from "./allBgMusic";

export default function BgMusicControlBox() {
  return (
    <div className=" bg-white w-full rounded-md p-3">
      {/* header */}
      <div className=" flex justify-between items-center border-b-1 border-black">
        {/* 타이틀 */}
        <span>배경음악</span>
        {/* 추가 */}
        <AddBgMusic />
      </div>
      <div className=" overflow-auto scrollbar-none">
        <AllBgMusicData />
      </div>
    </div>
  );
}
