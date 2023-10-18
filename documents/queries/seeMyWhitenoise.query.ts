import { gql } from "@apollo/client";

export const SeeMyWhitenosieQuery = gql`
  query SeeMyWhitenoise {
    seeMyWhitenoise {
      whiteNoise {
        whitenoiseName
      }
    }
  }
`;

export interface ISeeMyWhitenoiseData {
  seeMyWhitenoise: Array<{
    whiteNoise: {
      whitenoiseName: string;
    };
  }>;
}
