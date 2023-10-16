"use client";

import { PopoverContent } from "@nextui-org/react";
import { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";

export default function EditBgContent({
  filename,
  fileURL,
}: {
  filename: string;
  fileURL: string;
}) {
  // 첨부파일 placeholder
  const [fileName, setFileName] = useState(fileURL || "");
  // 첨부파일 파일명으로 변경
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
  };
  const onSubmitValid = () => {};

  // 파일 선택 폼
  interface IEditBgMusicForm {
    filename: string;
    file: File;
  }
  const { register, handleSubmit, getValues } = useForm<IEditBgMusicForm>({
    defaultValues: {
      filename,
    },
  });

  return (
    <PopoverContent className="rounded-md w-[250px]">
      <div className="px-1 py-2">
        <div className="text-sm font-bold">수정하기</div>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          {/* 파일 이름 */}
          <input
            {...register("filename")}
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
              {...register("file")}
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
        </form>
      </div>
    </PopoverContent>
  );
}
