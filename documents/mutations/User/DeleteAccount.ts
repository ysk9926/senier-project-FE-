import { gql } from "@apollo/client";

export const DeleteIdMutation = gql`
  mutation DeleteId {
    deleteId {
      ok
      error
    }
  }
`;

export interface IDeleteIdData {
  deleteId: {
    ok: boolean;
    error: string;
  };
}
