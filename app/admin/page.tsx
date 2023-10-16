import AdminTitle from "@/components/adminPg/adminTitle";
import AllInquiryDashBoard from "@/components/adminPg/dashBoard/allInquiryDashBoard";
import Inquiry from "@/components/adminPg/inquiry/inquiry";

export default function AdminPG() {
  return (
    <div>
      {/* 타이틀 */}
      <AdminTitle />
      {/* 대시보드 Wrapper */}
      {/* 문의 갯수 */}
      <AllInquiryDashBoard />
      {/* 문의 요약 */}
      <Inquiry />
      {/* 버튼 Wrapper */}
      <div>
        {/* 배경음악 관리하러 가기 Btn */}
        {/* 백색소음 관리하러 가기 Btn */}
      </div>
    </div>
  );
}
