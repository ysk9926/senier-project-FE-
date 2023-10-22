"use client";

import { useAllWhitenoise } from "@/components/hook/useWhitenoise";
import { Button } from "@nextui-org/react";
import { useMutation } from "@apollo/client";
import { DeleteWhitenoiseMutation } from "@/documents/mutations/Whitenoise/DeleteWhitenoise.mutation";
import { AllWhiteNoiseQuery } from "@/documents/queries/allWhitenoise.query";
import AllWhitenoisePopover from "./allWhitenoisePopover";

export default function AllWhitenoiseData() {
  const allWhitenoise = useAllWhitenoise();
  const allWhitenoiseArr = allWhitenoise?.allWhitenoise || [];

  // 삭제 뮤테이션
  const [deleteWhitenoiseMutation] = useMutation(DeleteWhitenoiseMutation, {
    refetchQueries: [{ query: AllWhiteNoiseQuery }],
  });

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
    } catch (error) {
      console.log("삭제 에러", error);
    }
  };

  return allWhitenoiseArr.map((whitenoise) => {
    return (
      <div key={whitenoise.id}>
        <div className=" flex justify-between items-center h-10 overflow-hidden px-2 py-2 border-b">
          {/* 배경음악 title */}
          <div className="">{whitenoise.whitenoiseName}</div>
          {/* 수정 및 삭제 버튼 wrapper */}
          <div className=" flex items-center">
            {/* 수정 버튼 */}
            <AllWhitenoisePopover whitenoise={whitenoise} />
            {/* 삭제 버튼 */}
            <Button
              size="sm"
              className=" bg-cyan-950 text-white text-xs ml-1"
              onClick={() => {
                deleteHandler(whitenoise.id);
              }}
            >
              삭제
            </Button>
          </div>
        </div>
      </div>
    );
  });
}
