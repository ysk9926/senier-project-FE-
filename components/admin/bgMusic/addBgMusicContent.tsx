"use client";

import { useState, ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { AddBgMusicMutation } from "@/documents/mutation/bgMusic/addBgMusic.mutation";
import { AllBgMusicQuery } from "@/documents/query/allBgMusic.query";
import { Button, PopoverContent } from "@nextui-org/react";

/* 인터페이스 구성 */

interface IEditBgMusicForm {
  bgMusicName: string;
  bgMusicUrl: FileList;
}

interface IAddBgMusicContent {
  onClose: () => void;
}

interface IAddBgMusicForm {
  bgMusicName: string;
  bgMusicUrl: FileList;
}

export default function AddBgMusicContent({ onClose }: IAddBgMusicContent) {
  /* 기본 설정 */

  const [fileName, setFileName] = useState("");
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
  };

  /* 뮤테이션 */

  const [addBgMusicMutation, { loading: addBgMusicLoading }] = useMutation(
    AddBgMusicMutation,
    {
      refetchQueries: [{ query: AllBgMusicQuery }],
    }
  );

  /* 입력 폼 */

  const { register, handleSubmit, getValues } = useForm<IEditBgMusicForm>({});
  const onSubmitValid: SubmitHandler<IAddBgMusicForm> = async (data) => {
    console.log(data);
    if (addBgMusicLoading) {
      return;
    }
    const { bgMusicName, bgMusicUrl } = getValues();
    try {
      const result = await addBgMusicMutation({
        variables: {
          bgMusicName,
          bgMusicUrl: bgMusicUrl[0],
        },
      });
      onClose();
      console.log("배경음악 추가 결과", result);
    } catch (error) {
      console.log("배경음악 추가 에러", error);
    }
  };

  return (
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-sm font-bold">추가하기</div>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          {/* 파일 이름 */}
          <input
            {...register("bgMusicName")}
            className="border border-gray-300 w-[218px] h-7 text-xs placeholder:text-gray-300 mt-2 outline-none pl-2"
            type="text"
            placeholder="파일명"
          />
          {/* 파일 선택 */}
          <div className="relative flex items-center mt-2">
            <input
              className="border border-gray-300 px-2 h-7 outline-none w-[170px] text-xs text-gray-300 placeholder:text-gray-300 "
              value={fileName}
              placeholder="첨부파일"
              readOnly
              aria-label="첨부파일"
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
              aria-label="첨부 파일 선택"
            />
          </div>
          <div className=" w-full flex justify-center items-center">
            <Button
              type="submit"
              className=" flex justify-center items-center text-xs bg-gray-600 text-white px-4 h-7 mt-2 rounded-none "
              aria-label="추가하기"
            >
              추가하기
            </Button>
          </div>
        </form>
      </div>
    </PopoverContent>
  );
}
