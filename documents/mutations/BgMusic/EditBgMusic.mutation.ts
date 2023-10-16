import { gql } from "@apollo/client";

export const EditBgMusicMutation = gql`
  mutation EditBgMusic(
    $editBgMusicId: Int!
    $bgMusicName: String
    $bgMusicUrl: String
  ) {
    editBgMusic(
      id: $editBgMusicId
      bgMusicName: $bgMusicName
      bgMusicURL: $bgMusicUrl
    ) {
      error
      ok
    }
  }
`;

export interface IEditBgMusicData {
  editBgMusic: {
    ok: boolean;
    error: string;
  };
}
