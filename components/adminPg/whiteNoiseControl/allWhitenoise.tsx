"use client";

import { useAllWhitenoise } from "@/components/hook/useWhitenoise";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useMutation } from "@apollo/client";
import { DeleteWhitenoiseMutation } from "@/documents/mutations/Whitenoise/DeleteWhitenoise.mutation";
import EditWhitenoise from "./editWhitenoise";

export default function AllWhitenoiseData() {
  const allWhitenoise = useAllWhitenoise();
  const allWhitenoiseArr = allWhitenoise?.allWhitenoise || [];

  // 삭제 뮤테이션
  const [deleteWhitenoiseMutation, { loading: deleteWhitenoiseLoading }] =
    useMutation(DeleteWhitenoiseMutation);
  // 삭제 기능
  const deleteHandler = async (id: number) => {
    try {
      const result = await deleteWhitenoiseMutation({
        variables: {
          deleteWhitenoiseId: id,
        },
      });
      // 삭제 결과
      console.log("삭제 결과", result);
      window.location.reload();
    } catch (error) {
      console.log("삭제 에러", error);
    }
  };

  return allWhitenoiseArr.map((whitenoise) => {
    return (
      <div className=" flex justify-between items-center h-8 overflow-hidden px-2">
        {/* 배경음악 title */}
        <div className="">{whitenoise.whitenoiseName}</div>
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
            <EditWhitenoise
              whitenoiseName={whitenoise.whitenoiseName}
              editWhitenoiseId={whitenoise.id}
              oldUrl={whitenoise.whitenoiseURL}
              oldRequirePoints={whitenoise.requirePoints}
            />
          </Popover>
          {/* 삭제 버튼 */}
          <Button
            size="sm"
            className=" bg-gray-600 text-white text-xs ml-1"
            onClick={() => {
              deleteHandler(whitenoise.id);
            }}
          >
            삭제
          </Button>
        </div>
      </div>
    );
  });
}
