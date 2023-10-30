"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { AnswerInquiryMutation } from "@/documents/mutation/inquiry/answerInquiry.mutation";
import { AllInquiryQuery } from "@/documents/query/allInquiry.query";
import { SeeAnswerInquiryQuery } from "@/documents/query/seeAnserInquiry.query";
import { SeeUnAnswerInquiryQuery } from "@/documents/query/seeUnAnswerInquiry.query";
import ITrashCan from "@/icon/iTrashCan";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Seperator from "@/components/util/seperator";
import { DeleteInquiryMutation } from "@/documents/mutation/inquiry/deleteInquiry.mutation";

/* 인터페이스 구성 */

interface IAnswerInquiryModal {
  title: string;
  inquiryId: number;
  content: string;
  state: boolean;
  oldAnswer: string | null;
}

interface IInquiryModal {
  answer: string;
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
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  /* 뮤테이션 */
  const [answerInquiryMutation, { loading: answerInquiryLoading }] =
    useMutation(AnswerInquiryMutation, {
      refetchQueries: [
        { query: AllInquiryQuery },
        { query: SeeAnswerInquiryQuery },
        { query: SeeUnAnswerInquiryQuery },
      ],
    });
  const [deleteInquiryMutation, { loading: deleteInquiryLoading }] =
    useMutation(DeleteInquiryMutation, {
      refetchQueries: [
        { query: AllInquiryQuery },
        { query: SeeAnswerInquiryQuery },
        { query: SeeUnAnswerInquiryQuery },
      ],
    });

  /* 폼 */
  const { register, handleSubmit, getValues } = useForm<IInquiryModal>({
    defaultValues: {
      answer: oldAnswer !== null ? oldAnswer : "",
    },
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
      onClose();
      console.log("문의답변 결과", result);
    } catch (error) {
      console.log("문의답변 에러", error);
    }
  };

  /* 기능 */

  const inquiryDeleteHandler = async () => {
    if (deleteInquiryLoading) {
      return;
    }
    try {
      const result = await deleteInquiryMutation({
        variables: {
          deleteInquiryId: inquiryId,
        },
      });
      onClose();
      console.log("문의 삭제 결과", result);
    } catch (error) {
      console.log("문의 삭제 에러", error);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="default"
        className=" bg-inherit rounded-none  border-r border-b"
        aria-label={`Open ${title} Inquiry Modal`}
      >
        {title}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>No.{inquiryId}</ModalHeader>
              <ModalBody>
                <Seperator />
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
                <Seperator />
                <form onSubmit={handleSubmit(onSubmitValid)}>
                  <textarea
                    {...register("answer")}
                    placeholder="답변을 입력하세요"
                    className=" overflow-auto scrollbar-none w-full h-64 resize-none outline-none text-sm"
                    aria-label="문의 답변"
                  />
                  <Seperator />
                  {/* 답변 버튼 */}
                  <div className=" w-full flex justify-between items-center mt-2">
                    {/* 문의 삭제 */}
                    <Button
                      onClick={inquiryDeleteHandler}
                      aria-label={`${inquiryId} 삭제 버튼`}
                      color="danger"
                    >
                      <div className=" w-5 h-5 stroke-black ">
                        <ITrashCan />
                      </div>
                    </Button>
                    {/* 문의 상태 변경 */}
                    <Button
                      onClick={inquiryStateHandler}
                      color={`${inquiryState ? "success" : "warning"}`}
                      aria-label="문의 상태 변경"
                    >
                      {inquiryState ? "완료" : "대기"}
                    </Button>
                    {/* 답변하기 버튼 */}
                    <Button
                      type="submit"
                      className=" w-52"
                      onPress={onClose}
                      aria-label="답변"
                    >
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
