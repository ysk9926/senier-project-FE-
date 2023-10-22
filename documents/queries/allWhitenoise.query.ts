import { gql } from "@apollo/client";

export const AllWhiteNoiseQuery = gql`
  query AllWhitenoise {
    allWhitenoise {
      id
      whitenoiseName
      requirePoints
      whitenoiseURL
      backgroundImgURL
    }
  }
`;

export interface IAllWhitenoise {
  allWhitenoise: Array<{
    id: number;
    whitenoiseName: string;
    requirePoints: number | null;
    whitenoiseURL: string;
    backgroundImgURL: string;
  }>;
}
