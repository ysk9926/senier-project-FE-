import { gql } from "@apollo/client";

export const SeeUnAnswerInquiryMutation = gql`
  mutation SeeUnAnswerInquiry {
    seeUnAnswerInquiry {
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

export interface ISeeUnAnswerInquiryData {
  seeUnAnswerInquiry: {
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
