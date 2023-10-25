import AdminTitle from "@/components/admin/adminTitle";
import BgMusicControlBox from "@/components/admin/bgMusic/controlBox";
import AllInquiryDashBoard from "@/components/admin/dashBoard/allInquiryDashBoard";
import InquiryTags from "@/components/admin/inquiry/inquiryTags";
import InquiryMainT from "@/components/admin/inquiry/maintable";
import WhitenoiseControlBox from "@/components/admin/whitenoise/controlBox";
import BackHome from "@/components/myPage/backHome";
import Seperator from "@/components/util/seperator";

export default function AdminPG() {
  return (
    <div className=" flex flex-col items-center bg-gray-200 h-screen ">
      <div className=" w-[800px] space-y-3">
        <div className=" h-20 text-white w-full rounded-md flex justify-between items-center">
          {/* 타이틀 */}
          <AdminTitle />
          <div className=" pr-3">
            <BackHome />
          </div>
        </div>
        {/* 대시보드 Wrapper */}
        <AllInquiryDashBoard />
        {/* 문의하기 */}
        <div className=" bg-white rounded-md px-2 py-1">
          <div className=" flex justify-between items-center w-full">
            {/* 타이틀 */}
            <span className=" font-semibold p-3">문의하기</span>
            {/* 태그 */}
            <InquiryTags />
          </div>
          <div className=" mb-5 mt-2">
            <Seperator />
          </div>
          <InquiryMainT />
        </div>
        {/* 버튼 Wrapper */}
        <div className=" w-full flex justify-between h-64 space-x-2">
          {/* 배경음악 관리하러 가기 Btn */}
          <BgMusicControlBox />
          {/* 백색소음 관리하러 가기 Btn */}
          <WhitenoiseControlBox />
        </div>
      </div>
      <div className=" absolute w-screen bg-cyan-950 h-20 left-0 top-0 z-0"></div>
    </div>
  );
}
