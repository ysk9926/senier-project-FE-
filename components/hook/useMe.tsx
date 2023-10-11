"use client";

import { LoggedInVar, logUserOut } from "@/apollo";
import { gql, useQuery, useReactiveVar } from "@apollo/client";

import { useEffect } from "react";

const MeQuery = gql`
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

function useUser() {
  const loggedInUser = useReactiveVar(LoggedInVar);
  const { data } = useQuery(MeQuery, {
    skip: !loggedInUser,
  });
  useEffect(() => {
    console.log("useUser발동");
    console.log(data);
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);
  return data;
}

export default useUser;
