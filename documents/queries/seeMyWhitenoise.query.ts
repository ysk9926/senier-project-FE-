import { gql } from "@apollo/client";

export const SeeMyWhitenosieQuery = gql`
  query SeeMyWhitenoise {
    seeMyWhitenoise {
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
    whiteNoise: {
      whitenoiseName: string;
      whitenoiseURL: string;
      backgroundImgURL: string;
    };
  }>;
}
