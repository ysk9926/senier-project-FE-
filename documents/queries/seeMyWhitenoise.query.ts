import { gql } from "@apollo/client";

export const SeeMyWhitenosieQuery = gql`
  query SeeMyWhitenoise {
    seeMyWhitenoise {
      isLocked
      whiteNoise {
        id
        whitenoiseName
        whitenoiseURL
        backgroundImgURL
        requirePoints
      }
    }
  }
`;

export interface ISeeMyWhitenoiseData {
  seeMyWhitenoise: Array<{
    isLocked: boolean;
    whiteNoise: {
      id: number;
      whitenoiseName: string;
      whitenoiseURL: string;
      backgroundImgURL: string;
      requirePoints: number;
    };
  }>;
}
