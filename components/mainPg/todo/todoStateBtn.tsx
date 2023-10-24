import { ChangeTodoStatusMutation } from "@/documents/mutations/todo/editTodoState";
import { MeQuery } from "@/documents/queries/me.query";
import { SeeMyTodoQuery } from "@/documents/queries/seeMyTodo.query";
import IDone from "@/icon/IDone";
import { useMutation } from "@apollo/client";
import { Button } from "@nextui-org/react";

export function TodoStateBtn({ todoId }: { todoId: number }) {
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
    <Button isIconOnly color="success" onClick={todoStateHandler}>
      <div className=" fill-white">
        <IDone />
      </div>
    </Button>
  );
}
