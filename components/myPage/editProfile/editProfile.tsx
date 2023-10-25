"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import useUser from "@/components/hook/useMe";
import EditProfileForm from "./editProfileForm";

export default function EditProfile() {
  // next ui
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // 유저정보 불러오기
  const user = useUser();

  return (
    <>
      <Button onPress={onOpen} className=" bg-inherit" size="sm">
        수정하기
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>프로필 수정</ModalHeader>
              <ModalBody>
                <EditProfileForm
                  avatar={user?.me.avatar}
                  userId={user?.me.userId}
                  username={user?.me.username}
                  onClose={onClose}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
