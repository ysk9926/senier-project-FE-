import { gql } from "@apollo/client";

export const AddTodoMutation = gql`
  mutation AddTodo($content: String!) {
    addTodo(content: $content) {
      ok
      error
    }
  }
`;

export interface IAddTodoMutation {
  addTodo: {
    ok: boolean;
    error: string;
  };
}
