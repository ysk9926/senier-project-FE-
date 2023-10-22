import { CreateInquiryMutation } from "@/documents/mutations/Inquiry/createInquiry.mutation";
import { SeeMyInquiryQuery } from "@/documents/queries/seeMyInquiry.query";
import { useMutation } from "@apollo/client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function UserInquiryWrite() {
  // next ui
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  // 모달 오픈
  const modatOpenHandler = () => {
    reset();
  };

  // 문의 생성 뮤테이션
  const [createInquiryMutation, { loading: createInquiryLoading }] =
    useMutation(CreateInquiryMutation, {
      refetchQueries: [{ query: SeeMyInquiryQuery }],
    });
  // 입력 폼
  interface IUserInquiryWriteForm {
    title: string;
    content: string;
  }
  const { register, handleSubmit, getValues, reset } =
    useForm<IUserInquiryWriteForm>({});
  const onSubmitValid: SubmitHandler<IUserInquiryWriteForm> = async (data) => {
    if (createInquiryLoading) {
      return;
    }
    const { title, content } = getValues();
    try {
      const result = await createInquiryMutation({
        variables: {
          title,
          contents: content,
        },
      });
      onClose();
      console.log("문의작성 결과", result);
    } catch (error) {
      console.log("문의작성 에러", error);
    }
  };
  return (
    <>
      <Button
        onPress={onOpen}
        color="default"
        size="sm"
        onClick={modatOpenHandler}
      >
        문의하기
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <span className="px-2">1:1 문의하기</span>
              </ModalHeader>
              <ModalBody className=" -mt-3">
                <form onSubmit={handleSubmit(onSubmitValid)}>
                  {/* seperate */}
                  <div className=" w-full px-3 h-[1px] bg-gray-300"></div>
                  <div>
                    <div className=" flex justify-start items-center h-10">
                      <input
                        {...register("title")}
                        type="text"
                        placeholder="제목을 입력하세요"
                        className="px-2 outline-none"
                      />
                    </div>
                  </div>
                  {/* seperate */}
                  <div className=" w-full px-3 h-[1px] bg-gray-300"></div>
                  <textarea
                    {...register("content")}
                    placeholder="내용을 입력하세요"
                    className=" overflow-auto scrollbar-none w-full h-64 resize-none outline-none text-sm mt-2 px-2"
                  />
                  {/* seperate */}
                  <div className=" w-full px-3 h-[1px] bg-gray-300"></div>
                  {/* 답변 버튼 */}
                  <div className=" w-full flex justify-center items-center mt-2">
                    {/* 답변하기 버튼 */}
                    <Button type="submit" className=" w-52">
                      저장하기
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
