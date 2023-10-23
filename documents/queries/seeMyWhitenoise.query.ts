import { gql } from "@apollo/client";

export const SeeMyWhitenosieQuery = gql`
  query SeeMyWhitenoise {
    seeMyWhitenoise {
      isLocked
      whiteNoise {
        whitenoiseName
        whitenoiseURL
        backgroundImgURL
      }
    }
  }
`;

export interface ISeeMyWhitenoiseData {
  seeMyWhitenoise: Array<{
    isLocked: boolean;
    whiteNoise: {
      whitenoiseName: string;
      whitenoiseURL: string;
      backgroundImgURL: string;
    };
  }>;
}
