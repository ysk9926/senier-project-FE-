import { gql } from "@apollo/client";

export const SeeAnswerInquiryMutation = gql`
  mutation SeeAnswerInquiry {
    seeAnswerInquiry {
      ok
      error
      inquiry {
        id
        title
        contents
        isClosed
        user {
          username
        }
      }
    }
  }
`;

export interface ISeeAnswerInquiryData {
  seeAnswerInquiry: {
    ok: boolean;
    error: string;
    inquiry: {
      id: number;
      title: string;
      contents: string;
      isClosed: boolean;
      user: {
        username: string;
      };
    };
  };
}
