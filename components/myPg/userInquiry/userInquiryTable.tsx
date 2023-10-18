import { useSeeMyInquiry } from "@/components/hook/useInquiry";
import UseInquiryModal from "./useInquiryModal";

export default function UserInquiryTable() {
  // 문의하기 데이터 불러오기
  const myInquiry = useSeeMyInquiry();
  const myInquiryArr = myInquiry?.seeMyInquiry || [];

  return (
    <div className=" grid grid-cols-[100px_1fr_70px] auto-rows-[40px] divide-x-1 text-sm overflow-hidden">
      {myInquiryArr.map((Inquiry) => {
        return (
          <>
            {/* 문의 번호 */}
            <div className=" flex justify-center items-center border-b-1">
              no.{Inquiry.id}
            </div>
            {/* 문의 제목 & 모달 */}
            <UseInquiryModal
              title={Inquiry.title}
              content={Inquiry.contents}
              state={Inquiry.isClosed}
              inquiryId={Inquiry.id}
            />
            {/* 문의 상태 */}
            <div className=" flex justify-center items-center border-b-1">
              {Inquiry.isClosed ? (
                <div className=" rounded-full bg-[#f5a524] w-4 h-4"></div>
              ) : (
                <div className=" rounded-full bg-[#17c964] w-4 h-4"></div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}
