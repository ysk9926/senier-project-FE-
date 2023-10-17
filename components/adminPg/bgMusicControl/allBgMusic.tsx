"use client";

import { useAllBgMusic } from "@/components/hook/useBgMusic";
import { useMutation } from "@apollo/client";
import { Button, Popover, PopoverTrigger } from "@nextui-org/react";
import EditBgContent from "./editBgMusic";
import { DeleteBgMusicMutation } from "@/documents/mutations/BgMusic/DeleatBgMusic.mutation";

export default function AllBgMusicData() {
  const allBgMusic = useAllBgMusic();
  const allBgMusicArr = allBgMusic?.allBgMusic || [];

  // 삭제 뮤테이션
  const [deleteBgMusicMutation, { loading: deleteBgMusicLoading }] =
    useMutation(DeleteBgMusicMutation);
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
      window.location.reload();
    } catch (error) {
      console.log("삭제 에러", error);
    }
  };

  return allBgMusicArr.map((bgMusic) => {
    return (
      <div className=" flex justify-between items-center h-8 overflow-hidden px-2">
        {/* 배경음악 title */}
        <div className="">{bgMusic.bgMusicName}</div>
        {/* 수정 및 삭제 버튼 wrapper */}
        <div className=" flex items-center">
          {/* 수정 버튼 */}
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Button
                variant="flat"
                className="capitalize bg-gray-600 text-xs text-white"
                size="sm"
              >
                수정
              </Button>
            </PopoverTrigger>
            <EditBgContent
              editBgMusicId={bgMusic.id}
              bgMusicName={bgMusic.bgMusicName}
              oldUrl={bgMusic.bgMusicURL}
            />
          </Popover>
          {/* 삭제 버튼 */}
          <Button
            size="sm"
            className=" bg-gray-600 text-white text-xs ml-1"
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
