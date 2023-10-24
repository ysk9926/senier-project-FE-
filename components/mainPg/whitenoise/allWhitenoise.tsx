"use client";

import { useMyWhitenoise } from "@/components/hook/useWhitenoise";
import IVolCustom from "@/icon/IVolCustom";
import MainPgWhitenoiseTable from "./mainPgWhitenoiseTable";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AllWhitenoise() {
  const whitenoise = useMyWhitenoise();
  const whitenoiseList = whitenoise?.seeMyWhitenoise || [];

  const [modalOpen, setModalOpen] = useState(false);
  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

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
            {whitenoiseList.map((whitenoiseItem, index) => (
              <MainPgWhitenoiseTable
                whitenoise={whitenoiseItem.whiteNoise}
                index={index}
                isLocked={whitenoiseItem.isLocked}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
