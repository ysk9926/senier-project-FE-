import { gql } from "@apollo/client";

export const UpdateUserWhitenoiseMutation = gql`
  mutation UpdateUserWhitenoise($whiteNoiseId: Int!) {
    updateUserWhitenoise(whiteNoiseId: $whiteNoiseId) {
      ok
      error
    }
  }
`;

export interface IUpdateUserWhitenoiseData {
  updateUserWhitenoise: {
    ok: boolean;
    error: string;
  };
}
