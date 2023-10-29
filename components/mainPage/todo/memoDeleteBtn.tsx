import { DeleteMemoMutation } from "@/documents/mutation/memo/deleteMemo.mutation";
import { SeeMyMemoQuery } from "@/documents/query/seeMyMemo.query";
import ITrashCan from "@/icon/iTrashCan";
import { useMutation } from "@apollo/client";

export default function MemoDeleteBtn({ memoId }: { memoId: number }) {
  // 삭제 뮤테이션
  const [deleteMemoMutation, { loading: deleteMemoLoading }] = useMutation(
    DeleteMemoMutation,
    {
      refetchQueries: [{ query: SeeMyMemoQuery }],
    }
  );
  const deleteTodoHandler = async () => {
    if (deleteMemoLoading) {
      return;
    }
    try {
      const result = await deleteMemoMutation({
        variables: {
          deleteMemoId: memoId,
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
