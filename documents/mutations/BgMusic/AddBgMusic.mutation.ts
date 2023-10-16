import { gql } from "@apollo/client";

export const AddBgMusicMutation = gql`
  mutation AddBgMusic($bgMusicName: String!, $bgMusicUrl: String!) {
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
