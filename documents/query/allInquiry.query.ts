import { gql } from "@apollo/client";

export const AllInquiryQuery = gql`
  query AllInquery {
    allInquiry {
      id
      title
      contents
      isClosed
      answer
      user {
        username
      }
    }
  }
`;

export interface IAllInquiryData {
  allInquiry: Array<{
    id: number;
    title: string;
    contents: string;
    isClosed: boolean;
    answer: string;
    user: {
      username: string;
    };
  }>;
}
