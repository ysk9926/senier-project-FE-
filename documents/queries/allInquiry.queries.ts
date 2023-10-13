import { gql } from "@apollo/client";

export const AllInquiryQuery = gql`
  query AllInquiry {
    allInquiry {
      id
      title
      contents
      isClosed
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
    user: {
      username: string;
    };
  }>;
}
