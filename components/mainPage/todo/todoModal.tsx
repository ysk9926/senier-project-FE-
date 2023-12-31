"use client";

import ITodo from "@/icon/iTodo";
import {
  Modal,
  ModalContent,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import TodoTable from "./todoTable";
import { useRecoilState } from "recoil";
import { TodoTagValue } from "@/atom";
import { useReactiveVar } from "@apollo/client";
import { LoggedInVar } from "@/apollo";
import { useEffect, useState } from "react";
import MemoTable from "./memoTable";

export default function TodoModal() {
  // next ui
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  // 로그인 벨류
  const Auth = useReactiveVar(LoggedInVar);
  const [AuthV, setAuthV] = useState(false);
  useEffect(() => {
    setAuthV(Auth);
  }, [Auth]);

  // 태그 벨류
  const [tag, setTag] = useRecoilState(TodoTagValue);

  return (
    <>
      <div
        className={` w-[18px] fill-white ${
          AuthV ? null : "pointer-events-none opacity-50"
        }`}
        onClick={onOpen}
      >
        <ITodo />
      </div>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {tag === "TODO" ? (
                  <div className=" flex flex-col justify-center items-center space-y-1">
                    <span className=" text-xl">투두리스트</span>
                    <p className=" text-xs opacity-60">
                      한개를 완료할 때마다 5포인트씩 획득이 가능합니다
                    </p>
                  </div>
                ) : (
                  <div className=" flex flex-col justify-center items-center space-y-1">
                    <span className=" text-xl">메모장</span>
                    <p className=" text-xs opacity-60">
                      간단한 메모 공간입니다
                    </p>
                  </div>
                )}

                <div className="flex justify-end">
                  <Tabs
                    selectedKey={tag}
                    onSelectionChange={(key) => setTag(key as string)}
                    variant="underlined"
                    color={`${tag === "TODO" ? "warning" : "success"}`}
                  >
                    <Tab key="TODO" title="TODO" />
                    <Tab key="Done" title="MEMO" />
                  </Tabs>
                </div>
              </ModalHeader>
              <div className=" flex justify-center h-64 min-[450px]:h-[450px] overflow-auto scrollbar-none mb-3">
                {tag === "TODO" ? <TodoTable /> : <MemoTable />}
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
