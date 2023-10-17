import { PopoverContent } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { AddWhitenoiseMutation } from "@/documents/mutations/Whitenoise/AddWhitenoise.mutation";

export default function AddWhitenosieContent() {
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
  interface IAddWhitenoiseForm {
    whitenoiseName: string;
    whitenoiseUrl: FileList;
    requirePoints: number | null;
  }
  const { register, handleSubmit, getValues } = useForm<IAddWhitenoiseForm>({});
  // 배경음악 추가 뮤테이션
  const [addWhitenoiseMutation, { loading: addWhitenosieLoading }] =
    useMutation(AddWhitenoiseMutation);

  const onSubmitValid: SubmitHandler<IAddWhitenoiseForm> = async (data) => {
    if (addWhitenosieLoading) {
      return;
    }
    const { whitenoiseName, whitenoiseUrl, requirePoints } = getValues();
    try {
      const result = await addWhitenoiseMutation({
        variables: {
          whitenoiseName,
          whitenoiseUrl: whitenoiseUrl[0],
          requirePoints: Number(requirePoints),
        },
      });
      console.log("배경음악 추가 결과", result);
      window.location.reload();
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
            {...register("whitenoiseName")}
            className="border border-gray-300 w-[218px] h-7 text-xs placeholder:text-gray-300 mt-2 outline-none pl-2"
            type="text"
            placeholder="파일명"
          />
          {/* 파일 선택 */}
          <div className="relative flex items-center mt-2">
            <input
              className=" text-xs px-2 h-7 border border-gray-300 w-[170px] text-gray-300 outline-none placeholder:text-gray-300"
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
              {...register("whitenoiseUrl")}
              type="file"
              accept="audio/*"
              id="file"
              className="absolute w-0 h-0 p-0 overflow-hidden border-0"
              onChange={handleFileChange}
            />
          </div>
          {/* 필요 포인트 */}
          <input
            {...register("requirePoints")}
            className="border border-gray-300 w-[218px] h-7 text-xs placeholder:text-gray-300 mt-2 outline-none pl-2"
            type="number"
            step="10"
            placeholder="요구 포인트"
          />
          <div className=" w-full flex justify-center items-center">
            <button
              type="submit"
              className=" flex justify-center items-center text-xs bg-gray-600 text-white px-4 h-7 mt-2 "
            >
              추가하기
            </button>
          </div>
        </form>
      </div>
    </PopoverContent>
  );
}
