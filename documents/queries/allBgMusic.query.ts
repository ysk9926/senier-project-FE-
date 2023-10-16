import { gql } from "@apollo/client";

export const AllBgMusicQuery = gql`
  query AllBgMusic {
    allBgMusic {
      id
      bgMusicName
      bgMusicURL
    }
  }
`;

export interface IAllBgMusicData {
  allBgMusic: Array<{
    id: number;
    bgMusicName: string;
    bgMusicURL: string;
  }>;
}
