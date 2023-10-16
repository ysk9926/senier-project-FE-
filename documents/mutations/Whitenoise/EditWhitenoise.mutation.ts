import { gql } from "@apollo/client";

export const EditWhitenoiseMutation = gql`
  mutation EditWhitenoise(
    $editWhitenoiseId: Int!
    $whitenoiseName: String
    $whitenoiseUrl: String
  ) {
    editWhitenoise(
      id: $editWhitenoiseId
      whitenoiseName: $whitenoiseName
      whitenoiseURL: $whitenoiseUrl
    ) {
      ok
      error
    }
  }
`;

export interface IEditWhitenoiseData {
  editWhitenoise: {
    ok: boolean;
    error: string;
  };
}
