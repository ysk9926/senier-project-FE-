import AddBgMusic from "./addBgMusic";
import AllBgMusicData from "./allBgMusic";

export default function BgMusicControlBox() {
  return (
    <div className=" bg-green-200 w-[270px]">
      {/* header */}
      <div className=" flex justify-between items-center border-b-1 border-black">
        {/* 타이틀 */}
        <h2>배경음악</h2>
        {/* 추가 */}
        <AddBgMusic />
      </div>
      <div className=" divide-y-1 overflow-auto scrollbar-none">
        <AllBgMusicData />
      </div>
    </div>
  );
}
