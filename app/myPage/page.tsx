import useUser from "@/components/hook/useMe";
import UserPoints from "@/components/myPg/Points/userPoints";
import BackHome from "@/components/myPg/backHome";
import DeleteId from "@/components/myPg/deleteId";
import UserInfo from "@/components/myPg/userInfo/userInfo";
import UserInquiry from "@/components/myPg/userInquiry/userInquiry";
import UserWhitenoise from "@/components/myPg/userWhitenoise/userWhitenoise";

export default function MyPage() {
  return (
    <div className=" flex justify-center h-screen bg-gray-200">
      <div className=" flex flex-col items-center w-4/6 max-w-[700px] min-w-80 py-10">
        {/* 유저 정보 */}
        <UserInfo />
        {/* 보유 포인트 */}
        <UserPoints />
        {/* 문의 백색소음 wrapper */}
        <div className="flex justify-between items-center mt-2 w-full space-x-2">
          {/* 보유 백색소음 리스트 */}
          <UserWhitenoise />
          {/* 나의 문의 */}
          <UserInquiry />
        </div>
        <div className=" w-full flex justify-between items-center mt-3">
          {/* 홈으로 돌아가기 */}
          <BackHome />
          {/* 탈퇴하기 */}
          <DeleteId />
        </div>
      </div>
    </div>
  );
}
