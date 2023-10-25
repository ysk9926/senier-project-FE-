import { gql } from "@apollo/client";

export const EditProfileMutation = gql`
  mutation EditProfile(
    $avatar: Upload
    $password: String
    $username: String
    $userId: String
  ) {
    editProfile(
      avatar: $avatar
      password: $password
      username: $username
      userId: $userId
    ) {
      ok
      error
    }
  }
`;

export interface IEditProfileData {
  editProfile: {
    ok: boolean;
    error: string;
  };
}
