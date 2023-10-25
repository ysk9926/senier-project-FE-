import { gql } from "@apollo/client";

export const CreateInquiryMutation = gql`
  mutation CreateInquiry($title: String!, $contents: String!) {
    createInquiry(title: $title, contents: $contents) {
      ok
      error
    }
  }
`;

export interface ICreateInquiryData {
  createInquiry: {
    ok: boolean;
    error: string;
  };
}
