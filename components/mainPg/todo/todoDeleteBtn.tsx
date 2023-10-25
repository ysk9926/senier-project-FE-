import { DeleteTodoMutation } from "@/documents/mutations/todo/deleteTodo.mutation";
import { SeeMyTodoQuery } from "@/documents/queries/seeMyTodo.query";
import ITrashCan from "@/icon/iTrashCan";
import { useMutation } from "@apollo/client";
import { Button } from "@nextui-org/react";

export default function TodoDeleteBtn({ todoId }: { todoId: number }) {
  // 삭제 뮤테이션
  const [deleteTodoMutation, { loading: deleteTodoLoading }] = useMutation(
    DeleteTodoMutation,
    {
      refetchQueries: [{ query: SeeMyTodoQuery }],
    }
  );
  const deleteTodoHandler = async () => {
    if (deleteTodoLoading) {
      return;
    }
    try {
      const result = await deleteTodoMutation({
        variables: {
          deleteTodoId: todoId,
        },
      });
      console.log("투두 삭제 결과", result);
    } catch (error) {
      console.log("투두 삭제 에러", error);
    }
  };
  return (
    <div
      className=" w-5 stroke-red-500 hover:scale-[1.2]"
      onClick={deleteTodoHandler}
    >
      <ITrashCan />
    </div>
  );
}
