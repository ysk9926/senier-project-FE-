import { DeleteTodoMutation } from "@/documents/mutations/todo/deleteTodo.mutation";
import { SeeMyTodoQuery } from "@/documents/queries/seeMyTodo.query";
import ITrashCan from "@/icon/ITrashCan";
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
    <Button isIconOnly color="danger" onClick={deleteTodoHandler}>
      <div className=" w-5 stroke-white">
        <ITrashCan />
      </div>
    </Button>
  );
}
