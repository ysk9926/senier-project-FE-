import AdminTitle from "@/components/adminPg/adminTitle";
import AllInquiryDashBoard from "@/components/adminPg/dashBoard/allInquiryDashBoard";

export default function AdminPG() {
  return (
    <div>
      {/* 타이틀 */}
      <AdminTitle />
      {/* 대시보드 Wrapper */}
      <div>
        {/* 문의 갯수 */}
        <AllInquiryDashBoard />
        {/* 처리한 문의 갯수 */}
        <div></div>
        {/* 처리 할 문의 갯수 */}
        <div></div>
      </div>
      {/* 문의 요약 */}
      <div></div>
      {/* 버튼 Wrapper */}
      <div>
        {/* 배경음악 관리하러 가기 Btn */}
        {/* 백색소음 관리하러 가기 Btn */}
      </div>
    </div>
  );
}
