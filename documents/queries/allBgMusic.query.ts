import { gql } from "@apollo/client";

export const AllBgMusicQuery = gql`
  query AllBgMusic {
    allBgMusic {
      bgMusicName
      bgMusicURL
    }
  }
`;

export interface IAllBgMusicData {
  allBgMusic: Array<{
    bgMusicName: string;
    bgMusicURL: string;
  }>;
}
