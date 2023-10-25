import { gql } from "@apollo/client";

export const DeleteInquiryMutation = gql`
  mutation DeleteInquiry($deleteInquiryId: Int!) {
    deleteInquiry(id: $deleteInquiryId) {
      ok
      error
    }
  }
`;

export interface IDeleteInquiryData {
  deleteInquiry: {
    ok: boolean;
    error: string;
  };
}
