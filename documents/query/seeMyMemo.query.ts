import { gql } from "@apollo/client";

export const SeeMyMemoQuery = gql`
  query SeeMyMemo {
    seeMyMemo {
      id
      content
    }
  }
`;

export interface ISeeMyMemoData {
  seeMyMemo: Array<{
    id: number;
    content: string;
  }>;
}
