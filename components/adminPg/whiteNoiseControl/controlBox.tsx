import AddWhitenoise from "./addWhitenoise";
import AllWhitenoiseData from "./allWhitenoise";

export default function WhitenoiseControlBox() {
  return (
    <div className=" bg-blue-200 w-[270px]">
      {/* header */}
      <div className=" flex justify-between items-center border-b-1 border-black">
        {/* 타이틀 */}
        <h2>백색소음</h2>
        {/* 추가 및 삭제 */}
        <AddWhitenoise />
      </div>
      <div className=" divide-y-1 overflow-auto scrollbar-none">
        <AllWhitenoiseData />
      </div>
    </div>
  );
}
