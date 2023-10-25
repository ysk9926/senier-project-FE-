import BackHome from "@/components/myPage/backHome";
import DeleteId from "@/components/myPage/deleteId";
import UserPoints from "@/components/myPage/points/userPoints";
import UserInfo from "@/components/myPage/userInfo/userInfo";
import UserInquiry from "@/components/myPage/userInquiry/userInquiry";
import UserWhitenoise from "@/components/myPage/userWhitenoise/userWhitenoise";

export default function MyPage() {
  return (
    <div className=" flex justify-center min-h-screen h-full bg-gray-200">
      <div className=" flex flex-col items-center w-4/6 max-w-[700px] min-w-80 py-10">
        {/* 유저 정보 */}
        <UserInfo />
        {/* 보유 포인트 */}
        <UserPoints />
        {/* 문의 백색소음 wrapper */}
        <div
          className="
        flex md:justify-between md:flex-row  items-center mt-2 w-full md:space-x-2
        flex-col justify-center space-y-2
        "
        >
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
