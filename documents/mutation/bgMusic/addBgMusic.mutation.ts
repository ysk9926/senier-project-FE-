import { gql } from "@apollo/client";

export const AddBgMusicMutation = gql`
  mutation DeleteBgMusic($bgMusicName: String!, $bgMusicUrl: Upload) {
    addBgMusic(bgMusicName: $bgMusicName, bgMusicURL: $bgMusicUrl) {
      ok
      error
    }
  }
`;

export interface IAddBgMusicData {
  addBgMusic: {
    ok: boolean;
    error: string;
  };
}
