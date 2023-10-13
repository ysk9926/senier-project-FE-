import { gql } from "@apollo/client";

export const SeeUnAnswerInquiryQuery = gql`
  query SeeUnAnswerInquiry {
    seeUnAnswerInquiry {
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

export interface ISeeUnAnswerInquiryData {
  seeUnAnswerInquiry: Array<{
    id: number;
    title: string;
    contents: string;
    isClosed: boolean;
    user: {
      username: string;
    };
  }>;
}
