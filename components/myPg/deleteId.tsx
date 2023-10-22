"use client";

import { logUserOut } from "@/apollo";
import { DeleteIdMutation } from "@/documents/mutations/User/DeleteAccount";
import { useMutation } from "@apollo/client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function DeleteId() {
  // next ui
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const router = useRouter();
  // 삭제 뮤테이션
  const [deleteIdMutation, { loading: deleteIdLoading }] =
    useMutation(DeleteIdMutation);
  const deleteIdtHandler = async () => {
    if (deleteIdLoading) {
      return;
    }
    try {
      const result = await deleteIdMutation();
      logUserOut();
      router.push("/");
      console.log("계정 삭제 결과", result);
    } catch (error) {
      console.log("계정 삭제 에러", error);
    }
  };
  return (
    <>
      <Button onPress={onOpen} size="sm" className=" bg-white font-semibold">
        탈퇴하기
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <span className="px-2">계정 탈퇴</span>
              </ModalHeader>
              <ModalBody className=" -mt-3">
                <div className=" flex flex-col items-center">
                  <span>계정을 탈퇴하시겠습니까?</span>
                  <div className=" flex justify-center items-center space-x-10 my-5">
                    <Button
                      size="sm"
                      className=" font-semibold"
                      onPress={onClose}
                    >
                      취소
                    </Button>
                    <Button
                      size="sm"
                      className=" font-semibold"
                      onClick={deleteIdtHandler}
                    >
                      탈퇴하기
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
