import { gql } from "@apollo/client";

export const ChangeTodoStatusMutation = gql`
  mutation ChangeTodoStatus($changeTodoStatusId: Int!) {
    changeTodoStatus(id: $changeTodoStatusId) {
      ok
      error
    }
  }
`;

export interface IChangeTodoStatusData {
  changeTodoStatus: {
    ok: boolean;
    error: string;
  };
}
