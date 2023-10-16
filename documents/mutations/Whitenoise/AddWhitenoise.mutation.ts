import { gql } from "@apollo/client";

export const AddWhitenoiseMutation = gql`
  mutation CreateWhitenoise(
    $whitenoiseName: String!
    $whitenoiseUrl: String!
    $requirePoints: Int
  ) {
    createWhitenoise(
      whitenoiseName: $whitenoiseName
      whitenoiseURL: $whitenoiseUrl
      requirePoints: $requirePoints
    ) {
      error
      ok
    }
  }
`;

export interface IAddWhitenoiseData {
  createWhitenoise: {
    ok: boolean;
    error: string;
  };
}
