import { useSeeMyInquiry } from "@/components/hook/useInquiry";
import UseInquiryModal from "./useInquiryModal";

export default function UserInquiryTable() {
  // 문의하기 데이터 불러오기
  const myInquiry = useSeeMyInquiry();
  const myInquiryArr = myInquiry?.seeMyInquiry || [];

  return (
    <div className=" grid grid-cols-[40px_1fr_90px] auto-rows-[40px] divide-x-1 text-sm overflow-hidden">
      {myInquiryArr.map((Inquiry, index) => {
        return (
          <>
            {/* 문의 번호 */}
            <div className=" flex justify-center items-center border-b-1">
              <span>{index + 1}</span>
            </div>
            {/* 문의 제목 & 모달 */}
            <UseInquiryModal
              title={Inquiry.title}
              content={Inquiry.contents}
              state={Inquiry.isClosed}
              inquiryId={Inquiry.id}
              answer={Inquiry.answer}
            />
            {/* 문의 상태 */}
            <div className=" flex justify-center items-center border-b-1">
              {Inquiry.isClosed ? (
                <div className=" flex justify-center items-center">
                  <div className=" rounded-full bg-[#f5a524] w-[10px] h-[10px] mr-2"></div>
                  <span>답변대기</span>
                </div>
              ) : (
                <div className=" flex justify-center items-center">
                  <div className=" rounded-full bg-[#17c964] w-[10px] h-[10px] mr-2"></div>
                  <span>답변완료</span>
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}
