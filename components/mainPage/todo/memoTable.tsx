import { TodoTagValue } from "@/atom";
import { useMutation, useQuery } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { TodoStateBtn } from "./todoStateBtn";
import TodoDeleteBtn from "./todoDeleteBtn";
import {
  ISeeMyMemoData,
  SeeMyMemoQuery,
} from "@/documents/query/seeMyMemo.query";
import { AddMemoMutation } from "@/documents/mutation/memo/addMemo.mutation";
import MemoDeleteBtn from "./memoDeleteBtn";

export default function MemoTable() {
  const { data: seeMyMemoData } = useQuery<ISeeMyMemoData>(SeeMyMemoQuery);
  const seeMyMemoList = seeMyMemoData?.seeMyMemo || [];

  // 투두리스트 추가하기
  const [addMemoMutation, { loading: addMemoLoading }] = useMutation(
    AddMemoMutation,
    {
      refetchQueries: [{ query: SeeMyMemoQuery }],
    }
  );

  // 폼
  interface IAddMemo {
    content: string;
  }
  const {
    register,
    formState: { isValid },
    handleSubmit,
    getValues,
    reset,
  } = useForm<IAddMemo>({});
  const onSubmitValid: SubmitHandler<IAddMemo> = async (data) => {
    if (addMemoLoading) {
      return;
    }
    const { content } = getValues();
    try {
      const result = await addMemoMutation({
        variables: {
          content,
        },
      });
      reset();
      console.log("메모 추가 결과", result);
    } catch (error) {
      console.log("메모 추가 에러", error);
    }
  };

  // 메모 배경색상
  const memoBgCol = ["#FCE4E4", "#FEF7CD", "#E9F9DD", "#DEF1FF", "#E9DFF5"];

  return (
    <div className="flex flex-wrap justify-center">
      {/* 추가 버튼 */}
      <div className=" w-32 px-1 min-[820px]:w-56 h-44 bg-[#DEF1FF] rounded-md m-5 flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmitValid)}
          className=" flex flex-col items-center"
        >
          <textarea
            {...register("content", {
              required: "내용을 입력해주세요",
              minLength: { value: 2, message: "2글자 이상 입력하세요" },
            })}
            placeholder="메모를 작성해 주세요"
            className=" w-full h-28 m-2 bg-inherit overflow-auto scrollbar-none resize-none outline-none 
            "
          />
          <button
            type="submit"
            className={` bg-white py-[2px] px-2 rounded-md mt-3 outline-none ${
              isValid ? "" : "pointer-events-none opacity-50"
            }`}
          >
            추가하기
          </button>
        </form>
      </div>
      {seeMyMemoList.map((memoItem, index) => {
        const colorIndex = index % memoBgCol.length;
        const backgroundColor = memoBgCol[colorIndex];

        return (
          <div
            className={` w-32 min-[820px]:w-56 h-44 rounded-md m-5 px-2`}
            style={{ backgroundColor: `${backgroundColor}` }}
            key={index}
          >
            {/* content */}
            <div className=" h-28 m-2 overflow-auto scrollbar-none">
              {memoItem.content}
            </div>
            {/* button wrapper */}
            <div className=" flex justify-center items-center space-x-10 mt-6">
              {/* 삭제하기 */}
              <MemoDeleteBtn memoId={memoItem.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
