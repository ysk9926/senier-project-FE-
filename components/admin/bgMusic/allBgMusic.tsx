"use client";

import { useMutation } from "@apollo/client";
import { useAllBgMusic } from "@/components/hook/useBgMusic";
import { AllBgMusicQuery } from "@/documents/query/allBgMusic.query";
import { DeleteBgMusicMutation } from "@/documents/mutation/bgMusic/deletBgMusic.mutation";
import { Button } from "@nextui-org/react";
import AllBgMusicPopover from "./allBgMusicPopover";

export default function AllBgMusicData() {
  /* 기본 설정 */

  const allBgMusic = useAllBgMusic();
  const allBgMusicArr = allBgMusic?.allBgMusic || [];

  /* 뮤테이션 */
  const [deleteBgMusicMutation] = useMutation(DeleteBgMusicMutation, {
    refetchQueries: [{ query: AllBgMusicQuery }],
  });

  /* 기능 */
  const deleteHandler = async (id: number) => {
    try {
      const result = await deleteBgMusicMutation({
        variables: {
          deleteBgMusicId: id,
        },
      });
      // 삭제 결과
      console.log("삭제 결과", result);
    } catch (error) {
      console.log("삭제 에러", error);
    }
  };

  return allBgMusicArr.map((bgMusic, index) => {
    return (
      <div
        className=" flex justify-between items-center overflow-hidden h-10 px-2 py-2 border-b"
        key={index}
      >
        {/* 배경음악 title */}
        <div className="">{bgMusic.bgMusicName}</div>
        {/* 수정 및 삭제 버튼 wrapper */}
        <div className=" flex items-center">
          {/* 수정 버튼 */}
          <AllBgMusicPopover bgMusic={bgMusic} />
          {/* 삭제 버튼 */}
          <Button
            size="sm"
            className=" bg-cyan-950 text-white text-xs ml-1"
            onClick={() => {
              deleteHandler(bgMusic.id);
            }}
            aria-label={`삭제 ${bgMusic.bgMusicName}`}
          >
            삭제
          </Button>
        </div>
      </div>
    );
  });
}
