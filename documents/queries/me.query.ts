import { gql } from "@apollo/client";

export const MeQuery = gql`
  query Me {
    me {
      avatar
      userId
      username
      points
      admin
      userWhiteNoise {
        isLocked
        whiteNoise {
          whitenoiseName
        }
      }
    }
  }
`;

export interface IMeData {
  me: {
    avatar: string;
    userId: string;
    username: string;
    points: number;
    admin: boolean;
    userWhiteNoise: {
      isLocked: boolean;
      whiteNoise: {
        whitenoiseName: string;
      };
    };
  };
}
