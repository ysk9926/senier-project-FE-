import { gql } from "@apollo/client";

export const AddWhitenoiseMutation = gql`
  mutation CreateWhitenoise(
    $whitenoiseName: String!
    $requirePoints: Int
    $whitenoiseUrl: Upload
  ) {
    createWhitenoise(
      whitenoiseName: $whitenoiseName
      requirePoints: $requirePoints
      whitenoiseURL: $whitenoiseUrl
    ) {
      ok
      error
    }
  }
`;

export interface IAddWhitenoiseData {
  createWhitenoise: {
    ok: boolean;
    error: string;
  };
}
