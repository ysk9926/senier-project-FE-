import { gql } from "@apollo/client";

export const SeeAnswerInquiryQuery = gql`
  query SeeAnswerInquiry {
    seeAnswerInquiry {
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

export interface ISeeAnswerInquiryData {
  seeAnswerInquiry: Array<{
    id: number;
    title: string;
    contents: string;
    isClosed: boolean;
    user: {
      username: string;
    };
  }>;
}
