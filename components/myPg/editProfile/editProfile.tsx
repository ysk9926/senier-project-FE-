"use client";

import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import useUser from "@/components/hook/useMe";
import { useForm } from "react-hook-form";

export default function EditProfile() {
  // next ui
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  // 유저정보 불러오기
  const user = useUser();

  // 입력 폼
  const { register, getValues, handleSubmit } = useForm({});

  return (
    <>
      <Button onPress={onOpen} size="sm">
        수정하기
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>프로필 수정</ModalHeader>
              <ModalBody>
                <form className=" flex justify-between items-center w-full">
                  <label>
                    <Avatar
                      name={user?.me.username}
                      src={user?.me.avatar}
                      className="w-24 h-24 text-large"
                    />
                    <input
                      {...register("avatar")}
                      type="file"
                      style={{ display: "none" }}
                    />
                  </label>
                  <div className=" flex flex-col items-end">
                    <label>
                      <span>아이디</span>
                      <input
                        {...register("username")}
                        type="text"
                        className=" border"
                      />
                    </label>
                    <label>
                      <span>비밀번호</span>
                      <input
                        {...register("passwordCheck")}
                        type="password"
                        className=" border"
                      />
                    </label>
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
