import { Button, PopoverContent } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { AddBgMusicMutation } from "@/documents/mutations/BgMusic/AddBgMusic.mutation";
import { AllBgMusicQuery } from "@/documents/queries/allBgMusic.query";

export default function AddBgMusicContent({
  onClose,
}: {
  onClose: () => void;
}) {
  // 첨부파일 placeholder
  const [fileName, setFileName] = useState("");
  // 첨부파일 파일명으로 변경
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
  };

  // 파일 선택 폼
  interface IEditBgMusicForm {
    bgMusicName: string;
    bgMusicUrl: FileList;
  }
  const { register, handleSubmit, getValues } = useForm<IEditBgMusicForm>({});
  // 배경음악 추가 뮤테이션
  const [addBgMusicMutation, { loading: addBgMusicLoading }] = useMutation(
    AddBgMusicMutation,
    {
      refetchQueries: [{ query: AllBgMusicQuery }],
    }
  );

  // submit 관리
  interface IAddBgMusicForm {
    bgMusicName: string;
    bgMusicUrl: FileList;
  }
  const onSubmitValid: SubmitHandler<IAddBgMusicForm> = async (data) => {
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
          <div className=" w-full flex justify-center items-center">
            <Button
              type="submit"
              className=" flex justify-center items-center text-xs bg-gray-600 text-white px-4 h-7 mt-2 rounded-none "
            >
              추가하기
            </Button>
          </div>
        </form>
      </div>
    </PopoverContent>
  );
}
