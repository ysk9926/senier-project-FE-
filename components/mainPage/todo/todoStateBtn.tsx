import { ChangeTodoStatusMutation } from "@/documents/mutation/todo/editTodoState";
import { MeQuery } from "@/documents/query/me.query";
import { SeeMyTodoQuery } from "@/documents/query/seeMyTodo.query";
import IDone from "@/icon/iDone";
import { useMutation } from "@apollo/client";

export function TodoStateBtn({
  todoId,
  state,
}: {
  todoId: number;
  state: boolean;
}) {
  // 투두 완료 뮤테이션
  const [todoStateMutation, { loading: todoStateLoading }] = useMutation(
    ChangeTodoStatusMutation,
    {
      refetchQueries: [{ query: SeeMyTodoQuery }, { query: MeQuery }],
    }
  );
  const todoStateHandler = async () => {
    if (todoStateLoading) {
      return;
    }
    try {
      const result = await todoStateMutation({
        variables: {
          changeTodoStatusId: todoId,
        },
      });
      console.log("투두 완료 결과", result);
    } catch (error) {
      console.log("투두 완료 에러", error);
    }
  };
  return (
    // 완료버튼

    <div
      className={`w-5 hover:scale-[1.2] border border-color_todo_darkGreen rounded-full ${
        state
          ? "bg-color_todo_darkGreen fill-white pointer-events-none"
          : "fill-color_todo_darkGreen"
      }
     hover:bg-color_todo_darkGreen hover:fill-white
      `}
      onClick={todoStateHandler}
    >
      <IDone />
    </div>
  );
}
