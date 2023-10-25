import { gql } from "@apollo/client";

export const DeleteBgMusicMutation = gql`
  mutation DeleteBgMusic($deleteBgMusicId: Int!) {
    deleteBgMusic(id: $deleteBgMusicId) {
      error
      ok
    }
  }
`;

export interface IDeleteBgMusicData {
  deleteBgMusic: {
    ok: boolean;
    error: string;
  };
}
