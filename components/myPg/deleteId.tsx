"use client";

import { logUserOut } from "@/apollo";
import { DeleteIdMutation } from "@/documents/mutations/User/DeleteAccount";
import { useMutation } from "@apollo/client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function DeleteId() {
  const router = useRouter();
  // 삭제 뮤테이션
  const [deleteIdMutation, { loading: deleteIdLoading }] =
    useMutation(DeleteIdMutation);
  const deleteIdtHandler = async () => {
    if (deleteIdLoading) {
      return;
    }
    try {
      const result = await deleteIdMutation();
      logUserOut();
      router.push("/");
      console.log("계정 삭제 결과", result);
    } catch (error) {
      console.log("계정 삭제 에러", error);
    }
  };
  return (
    <>
      <Button size="sm" className="" onClick={deleteIdtHandler}>
        탈퇴하기
      </Button>
    </>
  );
}
