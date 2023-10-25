import { gql } from "@apollo/client";

export const SeeMyInquiryQuery = gql`
  query SeeMyInquiry {
    seeMyInquiry {
      contents
      answer
      title
      isClosed
      id
    }
  }
`;

export interface ISeeMyInquiryData {
  seeMyInquiry: Array<{
    contents: string;
    answer: string;
    title: string;
    isClosed: boolean;
    id: number;
  }>;
}
