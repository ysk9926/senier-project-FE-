import { gql } from "@apollo/client";

export const DeleteMemoMutation = gql`
  mutation DeleteMemo($deleteMemoId: Int!) {
    deleteMemo(id: $deleteMemoId) {
      ok
      error
    }
  }
`;

export interface DeleteMemooMutation {
  deleteMemo: {
    ok: boolean;
    error: string;
  };
}
