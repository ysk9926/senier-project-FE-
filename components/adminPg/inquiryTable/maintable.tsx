import InquiryTableData from "./tableData";

export default function InquiryMainT() {
  return (
    <div className="flex flex-col border-b-1 w-[600px]">
      {/* 문의 번호 - 문의 타이틀 - 문의 유저 - 문의 상태 */}
      <div className="grid grid-cols-[100px_1fr_100px_70px]  h-10">
        <div className=" bg-slate-500  flex justify-center items-center ">
          문의 번호
        </div>
        <div className=" bg-blue-400  flex justify-center items-center ">
          제목
        </div>
        <div className=" bg-yellow-300  flex justify-center items-center ">
          문의 유저
        </div>
        <div className=" bg-green-400  flex justify-center items-center ">
          문의 상태
        </div>
      </div>
      {/* 데이터 wrapper */}
      <div className=" h-[200px] overflow-auto scrollbar-none">
        <InquiryTableData />
      </div>
    </div>
  );
}
