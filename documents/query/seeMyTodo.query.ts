import { gql } from "@apollo/client";

export const SeeMyTodoQuery = gql`
  query SeeMyTodo {
    seeMyTodo {
      id
      status
      content
    }
  }
`;

export interface ISeeMyTodoData {
  seeMyTodo: Array<{
    id: number;
    status: boolean;
    content: string;
  }>;
}
