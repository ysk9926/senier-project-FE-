import DeleteId from "@/components/myPg/deleteId";
import EditProfile from "@/components/myPg/editProfile/editProfile";
import UserInfo from "@/components/myPg/userInfo/userInfo";
import UserInquiry from "@/components/myPg/userInquiry/userInquiry";
import UserWhitenoise from "@/components/myPg/userWhitenoise/userWhitenoise";

export default function MyPage() {
  return (
    <div>
      {/* 유저 정보 */}
      <div>
        <UserInfo />
      </div>
      <div className="flex justify-center items-center">
        {/* 나의 문의 */}
        <UserInquiry />
        {/* 보유 백색소음 리스트 */}
        <UserWhitenoise />
      </div>
      <div className=" flex justify-center items-center">
        {/* 수정하기 */}
        <EditProfile />
        {/* 탈퇴하기 */}
        <DeleteId />
      </div>
    </div>
  );
}
