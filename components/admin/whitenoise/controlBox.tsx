import AddWhitenoise from "./addWhitenoise";
import AllWhitenoiseData from "./allWhitenoise";

export default function WhitenoiseControlBox() {
  return (
    <div className=" bg-white w-full rounded-md p-3">
      {/* header */}
      <div className=" flex justify-between items-center border-b-1 border-black">
        {/* 타이틀 */}
        <h2>백색소음</h2>
        {/* 추가 및 삭제 */}
        <AddWhitenoise />
      </div>
      <div className=" overflow-auto scrollbar-none h-48">
        <AllWhitenoiseData />
      </div>
    </div>
  );
}
