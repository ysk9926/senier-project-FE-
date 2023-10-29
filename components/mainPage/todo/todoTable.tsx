import { TodoTagValue } from "@/atom";
import { useMutation, useQuery } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { TodoStateBtn } from "./todoStateBtn";
import TodoDeleteBtn from "./todoDeleteBtn";
import {
  ISeeMyTodoData,
  SeeMyTodoQuery,
} from "@/documents/query/seeMyTodo.query";
import { AddTodoMutation } from "@/documents/mutation/todo/addTodo.mutation";

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

  return (
    <div className=" w-full flex flex-col items-center justify-start ">
      {/* 추가버튼 */}
      <form
        onSubmit={handleSubmit(onSubmitValid)}
        className=" flex justify-between items-center bg-slate-200 w-[90%] h-10 rounded-lg py-1 pl-1"
      >
        <input
          {...register("content", {
            required: "내용을 입력해주세요",
            minLength: { value: 2, message: "2글자 이상 입력하세요" },
          })}
          placeholder="투두를 추가해주세요"
          type="text"
          className="  w-full bg-white h-full outline-none rounded-l-md pl-2"
        />
        <button
          type="submit"
          className={` w-24 ${isValid ? "" : "pointer-events-none opacity-50"}`}
        >
          추가하기
        </button>
      </form>
      {/* 투두 내용 */}
      <div className=" w-[90%] space-y-2 overflow-auto scrollbar-none">
        {seeMyTodoList.map((todoItem, index) => {
          const colorIndex = index % todoBgCol.length;
          const backgroundColor = todoBgCol[colorIndex];
          return (
            <div
              className={`flex justify-between items-center rounded-md mt-2 px-2 h-10 ${
                todoItem.status ? "bg-opacity-50" : null
              }`}
              style={{ backgroundColor: `${backgroundColor}` }}
              key={index}
            >
              {/* 완료하기 */}
              <TodoStateBtn todoId={todoItem.id} state={todoItem.status} />
              {/* 내용 */}
              <div className={`${todoItem.status && "opacity-50"}`}>
                {todoItem.content}
              </div>
              {/* 삭제하기 */}
              <TodoDeleteBtn todoId={todoItem.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
