import { gql } from "@apollo/client";

export const EditWhitenoiseMutation = gql`
  mutation EditWhitenoise(
    $editWhitenoiseId: Int!
    $requirePoints: Int
    $backgroundImgUrl: Upload
    $whitenoiseUrl: Upload
    $whitenoiseName: String
  ) {
    editWhitenoise(
      id: $editWhitenoiseId
      requirePoints: $requirePoints
      backgroundImgURL: $backgroundImgUrl
      whitenoiseURL: $whitenoiseUrl
      whitenoiseName: $whitenoiseName
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
