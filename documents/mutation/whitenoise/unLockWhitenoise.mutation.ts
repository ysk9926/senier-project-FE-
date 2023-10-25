import { gql } from "@apollo/client";

export const EditLockMutation = gql`
  mutation EditLock($whiteNoiseId: Int!) {
    editLock(whiteNoiseId: $whiteNoiseId) {
      ok
      error
    }
  }
`;

export interface IEditLockData {
  editLock: {
    ok: boolean;
    error: string;
  };
}
