import { gql } from "@apollo/client";

export const AnswerInquiryMutation = gql`
  mutation AnswerInquiry(
    $answerInquiryId: Int!
    $answer: String!
    $isClosed: Boolean
  ) {
    answerInquiry(id: $answerInquiryId, answer: $answer, isClosed: $isClosed) {
      ok
      error
    }
  }
`;

export interface IAnswerInquiryMutation {
  answerInquiry: {
    ok: boolean;
    error: string;
  };
}
