import { gql } from "@apollo/client";

export const DeleteTodoMutation = gql`
  mutation DeleteTodo($deleteTodoId: Int!) {
    deleteTodo(id: $deleteTodoId) {
      ok
      error
    }
  }
`;

export interface IDeleteTodoData {
  deleteTodo: {
    ok: boolean;
    error: string;
  };
}
