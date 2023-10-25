import { gql } from "@apollo/client";

export const SeeDefaultWhitenoiseQuery = gql`
  query SeeDefaultWhitenoise {
    seeDefaultWhitenoise {
      whitenoiseName
      whitenoiseURL
      backgroundImgURL
    }
  }
`;

export interface ISeeDefaultWhitenoiseData {
  seeDefaultWhitenoise: Array<{
    whitenoiseName: string;
    whitenoiseURL: string;
    backgroundImgURL: string;
  }>;
}
