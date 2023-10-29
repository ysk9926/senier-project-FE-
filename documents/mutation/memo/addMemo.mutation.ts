import { gql } from "@apollo/client";

export const AddMemoMutation = gql`
  mutation AddMemo($content: String!) {
    addMemo(content: $content) {
      ok
      error
    }
  }
`;

export interface IAddMemoMutation {
  addMemo: {
    ok: boolean;
    error: string;
  };
}
