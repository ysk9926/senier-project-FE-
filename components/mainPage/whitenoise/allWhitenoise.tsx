"use client";

import {
  useDefaultWHitenoise,
  useMyWhitenoise,
} from "@/components/hook/useWhitenoise";
import IVolCustom from "@/icon/iVolCustom";
import MainPgWhitenoiseTable from "./mainPgWhitenoiseTable";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReactiveVar } from "@apollo/client";
import { LoggedInVar } from "@/apollo";
import DefaultWhitenoiseTable from "./defaultWhitenoiseTable";

export default function AllWhitenoise() {
  const whitenoise = useMyWhitenoise();
  const whitenoiseList = whitenoise?.seeMyWhitenoise || [];

  const [modalOpen, setModalOpen] = useState(false);
  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  // 비회원 백색소음
  const defaultWhitenoise = useDefaultWHitenoise();
  const defaultWhitenoiseList = defaultWhitenoise?.seeDefaultWhitenoise || [];

  // 로그인 벨류
  const Auth = useReactiveVar(LoggedInVar);

  return (
    <div className=" relative">
      <div className=" w-[18px] fill-white bg-inherit" onClick={modalHandler}>
        <IVolCustom />
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: modalOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute right-10 w-60 bg-color_main_black px-3 py-2 -top-5 rounded-md ${
            modalOpen ? null : "hidden"
          }`}
        >
          {/* 타이틀 */}
          <div className=" w-full flex justify-start text-white font-semibold py-2">
            <span>백색소음</span>
          </div>
          <div className=" w-full h-48 overflow-auto scrollbar-none">
            {Auth ? (
              <>
                {whitenoiseList.map((whitenoiseItem, index) => (
                  <MainPgWhitenoiseTable
                    whitenoise={whitenoiseItem.whiteNoise}
                    index={index}
                    isLocked={whitenoiseItem.isLocked}
                  />
                ))}
              </>
            ) : (
              <>
                {defaultWhitenoiseList.map((whitenoiseItem, index) => (
                  <DefaultWhitenoiseTable
                    whitenoise={whitenoiseItem}
                    index={index}
                  />
                ))}
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
