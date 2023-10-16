"use client";

import { EditBgMusicMutation } from "@/documents/mutations/BgMusic/EditBgMusic.mutation";
import { useMutation } from "@apollo/client";
import { PopoverContent } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function EditBgContent({
  bgMusicName,
  oldUrl,
  editBgMusicId,
}: {
  bgMusicName: string;
  oldUrl: string;
  editBgMusicId: number;
}) {
  // 첨부파일 placeholder
  const [fileName, setFileName] = useState(oldUrl || "");
  // 첨부파일 파일명으로 변경
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
  };

  // 수정 뮤테이션
  const [editBgMusicMutation, { loading: editBgMusicLoading }] =
    useMutation(EditBgMusicMutation);
  const onSubmitValid: SubmitHandler<IEditBgMusicForm> = async (data) => {
    if (editBgMusicLoading) {
      return;
    }
    const { bgMusicName, bgMusicUrl } = getValues();
    try {
      const result = await editBgMusicMutation({
        variables: {
          editBgMusicId,
          bgMusicName,
          bgMusicUrl: bgMusicUrl[0],
        },
      });
      console.log("수정 결과", result);
      window.location.reload();
      // 클라이언트 캐시 업데이트 로직
    } catch (error) {
      // 오류 처리 로직
      console.log("수정 결과", error);
    }
  };

  // 파일 선택 폼
  interface IEditBgMusicForm {
    bgMusicName: string;
    bgMusicUrl: FileList;
  }
  const { register, handleSubmit, getValues } = useForm<IEditBgMusicForm>({
    defaultValues: {
      bgMusicName,
    },
  });

  const onclick = () => {
    const { bgMusicName, bgMusicUrl } = getValues();
    console.log(bgMusicUrl);
  };

  return (
    <PopoverContent className="rounded-md w-[250px]">
      <div className="px-1 py-2">
        <div className="text-sm font-bold">수정하기</div>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          {/* 파일 이름 */}
          <input
            {...register("bgMusicName")}
            className="border border-gray-300 w-[218px] h-7 placeholder:pl-2 text-xs placeholder:text-gray-300 mt-2 outline-none pl-2"
            type="text"
            placeholder="파일명"
          />
          {/* 파일 선택 */}
          <div className="relative flex items-center mt-2">
            <input
              className=" text-xs px-2 h-7 border border-gray-300 w-[170px] text-gray-300 outline-none"
              value={fileName}
              placeholder="첨부파일"
              readOnly
            />
            <label
              htmlFor="file"
              className=" flex justify-center items-center w-12 h-7 text-white bg-gray-600 cursor-pointer text-xs "
            >
              찾기
            </label>
            <input
              {...register("bgMusicUrl")}
              type="file"
              accept="audio/*"
              id="file"
              className="absolute w-0 h-0 p-0 overflow-hidden border-0"
              onChange={handleFileChange}
            />
          </div>
          <button
            type="submit"
            className=" flex justify-center items-center text-xs bg-gray-600 text-white px-2 h-7 "
          >
            수정하기
          </button>
          <div onClick={onclick}>눌러</div>
        </form>
      </div>
    </PopoverContent>
  );
}
