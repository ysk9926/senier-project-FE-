import { TodoTagValue } from "@/atom";
import { AddTodoMutation } from "@/documents/mutations/todo/addTodo";
import {
  ISeeMyTodoData,
  SeeMyTodoQuery,
} from "@/documents/queries/seeMyTodo.query";
import { useMutation, useQuery } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { TodoStateBtn } from "./todoStateBtn";
import TodoDeleteBtn from "./todoDeleteBtn";

export default function TodoTable() {
  const { data: seeMyTodoData } = useQuery<ISeeMyTodoData>(SeeMyTodoQuery);
  const seeMyTodoList = seeMyTodoData?.seeMyTodo || [];

  // 투두리스트 추가하기
  const [addTodoMutation, { loading: addTodoLoading }] = useMutation(
    AddTodoMutation,
    {
      refetchQueries: [{ query: SeeMyTodoQuery }],
    }
  );

  // 폼
  interface IAddTodo {
    content: string;
  }
  const {
    register,
    formState: { isValid },
    handleSubmit,
    getValues,
    reset,
  } = useForm<IAddTodo>({});
  const onSubmitValid: SubmitHandler<IAddTodo> = async (data) => {
    if (addTodoLoading) {
      return;
    }
    const { content } = getValues();
    try {
      const result = await addTodoMutation({
        variables: {
          content,
        },
      });
      reset();
      console.log("투두리스트 추가 결과", result);
    } catch (error) {
      console.log("투두 추가 에러", error);
    }
  };

  // 태그 상태
  const tag = useRecoilValue(TodoTagValue);

  // 투두 배경색상
  const todoBgCol = ["#FCE4E4", "#FEF7CD", "#E9F9DD", "#DEF1FF", "#E9DFF5"];

  return tag === "TODO" ? (
    // 투두 상태
    <div className="flex flex-wrap justify-center">
      {/* 추가 버튼 */}
      <div className=" w-56 h-44 bg-[#DEF1FF] rounded-md m-5 flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmitValid)}
          className=" flex flex-col items-center"
        >
          <textarea
            {...register("content", {
              required: "내용을 입력해주세요",
              minLength: { value: 2, message: "2글자 이상 입력하세요" },
            })}
            placeholder="투두를 추가해주세요"
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
      {seeMyTodoList.map((todoItem, index) => {
        const colorIndex = index % todoBgCol.length;
        const backgroundColor = todoBgCol[colorIndex];

        return (
          todoItem.status === false && (
            <div
              className={` w-56 h-44 rounded-md m-5 px-2`}
              style={{ backgroundColor: `${backgroundColor}` }}
              key={index}
            >
              {/* content */}
              <div className=" h-28 m-2 overflow-auto scrollbar-none">
                {todoItem.content}
              </div>
              {/* button wrapper */}
              <div className=" flex justify-center items-center space-x-10 mt-6">
                {/* 삭제하기 */}
                <TodoDeleteBtn todoId={todoItem.id} />
                {/* 완료하기 */}
                <TodoStateBtn todoId={todoItem.id} />
              </div>
            </div>
          )
        );
      })}
    </div>
  ) : (
    // 완료 상태
    <div className="flex flex-wrap justify-center">
      {seeMyTodoList.map((todoItem, index) => {
        const colorIndex = index % todoBgCol.length;
        const backgroundColor = todoBgCol[colorIndex];
        return (
          todoItem.status === true && (
            <div
              className=" w-56 h-44 rounded-md m-5 px-2"
              style={{ backgroundColor: `${backgroundColor}` }}
              key={index}
            >
              {/* content */}
              <div className=" h-28 m-2 overflow-auto scrollbar-none">
                {todoItem.content}
              </div>
              {/* button wrapper */}
              <div className=" flex justify-center items-center space-x-10 mt-6">
                {/* 삭제하기 */}
                <TodoDeleteBtn todoId={todoItem.id} />
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}
