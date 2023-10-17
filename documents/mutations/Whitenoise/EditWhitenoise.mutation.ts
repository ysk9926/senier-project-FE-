import { gql } from "@apollo/client";

export const EditWhitenoiseMutation = gql`
  mutation EditWhitenoise(
    $editWhitenoiseId: Int!
    $whitenoiseName: String
    $whitenoiseUrl: Upload
    $requirePoints: Int
  ) {
    editWhitenoise(
      id: $editWhitenoiseId
      whitenoiseName: $whitenoiseName
      whitenoiseURL: $whitenoiseUrl
      requirePoints: $requirePoints
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
