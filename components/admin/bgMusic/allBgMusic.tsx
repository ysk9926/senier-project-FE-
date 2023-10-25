"use client";

import { useAllBgMusic } from "@/components/hook/useBgMusic";
import { useMutation } from "@apollo/client";
import { Button } from "@nextui-org/react";
import { DeleteBgMusicMutation } from "@/documents/mutations/bgMusic/deleatBgMusic.mutation";
import { AllBgMusicQuery } from "@/documents/queries/allBgMusic.query";
import AllBgMusicPopover from "./allBgMusicPopover";

export default function AllBgMusicData() {
  // 배경음악 데이터 로드
  const allBgMusic = useAllBgMusic();
  const allBgMusicArr = allBgMusic?.allBgMusic || [];

  // 삭제 뮤테이션
  const [deleteBgMusicMutation] = useMutation(DeleteBgMusicMutation, {
    refetchQueries: [{ query: AllBgMusicQuery }],
  });
  // 삭제 기능
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

  return allBgMusicArr.map((bgMusic) => {
    return (
      <div className=" flex justify-between items-center overflow-hidden h-10 px-2 py-2 border-b">
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
          >
            삭제
          </Button>
        </div>
      </div>
    );
  });
}
