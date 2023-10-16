import { gql } from "@apollo/client";

export const AllWhiteNoiseQuery = gql`
  query AllWhitenoise {
    allWhitenoise {
      whitenoiseName
      requirePoints
      whitenoiseURL
    }
  }
`;

export interface IAllWhitenoise {
  allWhitenoise: Array<{
    whitenoiseName: string;
    requirePoints: number | null;
    whitenoiseURL: string;
  }>;
}
