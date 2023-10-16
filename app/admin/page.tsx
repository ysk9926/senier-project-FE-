import AdminTitle from "@/components/adminPg/adminTitle";
import BgMusicControlBox from "@/components/adminPg/bgMusicControl/controlBox";
import AllInquiryDashBoard from "@/components/adminPg/dashBoard/allInquiryDashBoard";
import InquiryMainT from "@/components/adminPg/inquiryTable/maintable";
import WhitenoiseControlBox from "@/components/adminPg/whiteNoiseControl/controlBox";

export default function AdminPG() {
  return (
    <div>
      {/* 타이틀 */}
      <AdminTitle />
      {/* 대시보드 Wrapper */}
      {/* 문의 갯수 */}
      <AllInquiryDashBoard />
      {/* 문의 요약 */}
      <div>
        <div className=" flex justify-between items-center w-[600px]">
          {/* 타이틀 */}
          <h2>문의하기</h2>
          {/* 태그 */}
          <div className=" flex items-center">
            <span className=" bg-green-200 px-2">전체</span>
            <span className=" bg-blue-200 px-2">답변 완료</span>
            <span className=" bg-red-200 px-2">답변 전</span>
          </div>
          {/* 검색 */}
          <div>검색 아이콘</div>
        </div>
        <InquiryMainT />
      </div>
      {/* 버튼 Wrapper */}
      <div className=" w-[600px] flex justify-between  h-48">
        {/* 배경음악 관리하러 가기 Btn */}
        <BgMusicControlBox />
        {/* 백색소음 관리하러 가기 Btn */}
        <WhitenoiseControlBox />
      </div>
    </div>
  );
}
