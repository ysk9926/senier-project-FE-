import { gql } from "@apollo/client";

export const EditBgMusicMutation = gql`
  mutation EditBgMusic(
    $editBgMusicId: Int!
    $bgMusicName: String
    $bgMusicUrl: Upload
  ) {
    editBgMusic(
      id: $editBgMusicId
      bgMusicName: $bgMusicName
      bgMusicURL: $bgMusicUrl
    ) {
      ok
      error
    }
  }
`;

export interface IEditBgMusicData {
  editBgMusic: {
    ok: boolean;
    error: string;
  };
}
