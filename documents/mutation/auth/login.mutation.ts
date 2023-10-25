import { gql } from "@apollo/client";

export const LoginMutation = gql`
  mutation login($userId: String!, $password: String!) {
    login(userId: $userId, password: $password) {
      ok
      error
      token
    }
  }
`;

export interface ILoginData {
  login: {
    ok: boolean;
    error: string;
    token: string;
  };
}
