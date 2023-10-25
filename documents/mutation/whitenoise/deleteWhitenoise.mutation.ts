import { gql } from "@apollo/client";

export const DeleteWhitenoiseMutation = gql`
  mutation DeleteWhitenoise($deleteWhitenoiseId: Int!) {
    deleteWhitenoise(id: $deleteWhitenoiseId) {
      error
      ok
    }
  }
`;

export interface IDeleteWhitenoiseData {
  deleteWhitenoise: {
    ok: boolean;
    error: string;
  };
}
