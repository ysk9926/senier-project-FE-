import { gql } from "@apollo/client";

export const AddWhitenoiseMutation = gql`
  mutation CreateWhitenoise(
    $whitenoiseName: String!
    $requirePoints: Int
    $backgroundImgUrl: Upload
    $whitenoiseUrl: Upload
  ) {
    createWhitenoise(
      whitenoiseName: $whitenoiseName
      requirePoints: $requirePoints
      backgroundImgURL: $backgroundImgUrl
      whitenoiseURL: $whitenoiseUrl
    ) {
      id
      error
      ok
    }
  }
`;

export interface IAddWhitenoiseData {
  createWhitenoise: {
    ok: boolean;
    error: string;
    id: number;
  };
}
