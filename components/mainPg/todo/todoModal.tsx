"use client";

import ITodo from "@/icon/ITodo";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import TodoTable from "./todoTable";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { TodoTagValue } from "@/atom";

export default function TodoModal() {
  // next ui
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  // 태그 벨류
  const [tag, setTag] = useRecoilState(TodoTagValue);
  return (
    <>
      <div className=" w-[18px] fill-white" onClick={onOpen}>
        <ITodo />
      </div>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className=" flex flex-col justify-center items-center space-y-1">
                  <span className=" text-xl">투두리스트</span>
                  <p className=" text-xs opacity-60">
                    한개를 완료할 때마다 5포인트씩 획득이 가능합니다
                  </p>
                </div>
                <div className="flex justify-end">
                  <Tabs
                    selectedKey={tag}
                    onSelectionChange={(key) => setTag(key as string)}
                    variant="underlined"
                    color={`${tag === "TODO" ? "warning" : "success"}`}
                  >
                    <Tab key="TODO" title="TODO" />
                    <Tab key="Done" title="DONE" />
                  </Tabs>
                </div>
              </ModalHeader>
              <div className=" flex justify-center max-h-[600px] overflow-auto scrollbar-none mb-3">
                <TodoTable />
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
