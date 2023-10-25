import { gql } from "@apollo/client";

export const SignupMutation = gql`
  mutation createAccount(
    $username: String!
    $password: String!
    $userId: String!
  ) {
    createAccount(username: $username, password: $password, userId: $userId) {
      ok
      error
    }
  }
`;

export interface ISignupData {
  createAccount: {
    ok: boolean;
    error: string;
  };
}
