"use client";

import { AnswerInquiryMutation } from "@/documents/mutations/Inquiry/answerInquiry.mutation";
import { AllInquiryQuery } from "@/documents/queries/allInquiry.query";
import { SeeAnswerInquiryQuery } from "@/documents/queries/seeAnswerInquiry.query";
import { SeeUnAnswerInquiryQuery } from "@/documents/queries/seeUnAnswerInquiry.mutation";
import ITrashCan from "@/icon/ITrashCan";
import { useMutation } from "@apollo/client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IAnswerInquiryModal {
  title: string;
  inquiryId: number;
  content: string;
  state: boolean;
  oldAnswer: string | null;
}

export default function AnswerInquiryModal({
  title,
  inquiryId,
  content,
  state,
  oldAnswer,
}: IAnswerInquiryModal) {
  const [inquiryState, SetInquiryState] = useState(state);
  const inquiryStateHandler = () => {
    SetInquiryState((pre) => !pre);
  };
  // next ui
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // 폼
  interface IInquiryModal {
    answer: string;
  }
  const { register, handleSubmit, getValues } = useForm<IInquiryModal>({
    defaultValues: {
      answer: oldAnswer !== null ? oldAnswer : "",
    },
  });

  // 답변 뮤테이션
  const [answerInquiryMutation, { loading: answerInquiryLoading }] =
    useMutation(AnswerInquiryMutation, {
      refetchQueries: [
        { query: AllInquiryQuery },
        { query: SeeAnswerInquiryQuery },
        { query: SeeUnAnswerInquiryQuery },
      ],
    });
  const onSubmitValid: SubmitHandler<IInquiryModal> = async (data) => {
    if (answerInquiryLoading) {
      return;
    }
    const { answer } = getValues();
    try {
      const result = await answerInquiryMutation({
        variables: {
          answerInquiryId: inquiryId,
          answer,
          isClosed: inquiryState,
        },
      });
      console.log("문의답변 결과", result);
    } catch (error) {
      console.log("문의답변 에러", error);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="default"
        className=" bg-inherit rounded-none"
      >
        {title}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>No.{inquiryId}</ModalHeader>
              <ModalBody>
                {/* seperate */}
                <div className=" w-full px-3 h-[1px] bg-gray-300"></div>
                <div>
                  <div className=" flex justify-start items-center">
                    <span className=" font-semibold mr-2">문의 내용</span>
                    {state ? (
                      <div className=" rounded-full bg-[#f5a524] w-3 h-3"></div>
                    ) : (
                      <div className=" rounded-full bg-[#17c964] w-3 h-3"></div>
                    )}
                  </div>
                  <div className="text-sm mt-2 h-20 overflow-auto scrollbar-none">
                    {content}
                  </div>
                </div>
                {/* seperate */}
                <div className=" w-full px-3 h-[1px] bg-gray-300"></div>
                <form onSubmit={handleSubmit(onSubmitValid)}>
                  <textarea
                    {...register("answer")}
                    placeholder="답변을 입력하세요"
                    className=" overflow-auto scrollbar-none w-full h-64 resize-none outline-none text-sm"
                  />
                  {/* seperate */}
                  <div className=" w-full px-3 h-[1px] bg-gray-300"></div>
                  {/* 답변 버튼 */}
                  <div className=" w-full flex justify-between items-center mt-2">
                    {/* 문의 삭제 */}
                    <Button>
                      <ITrashCan />
                    </Button>
                    {/* 문의 상태 변경 */}
                    <Button
                      onClick={inquiryStateHandler}
                      color={`${inquiryState ? "warning" : "success"}`}
                    >
                      {inquiryState ? "close" : "open"}
                    </Button>
                    {/* 답변하기 버튼 */}
                    <Button type="submit" className=" w-52" onPress={onClose}>
                      답변하기
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
