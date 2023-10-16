"use client";

import { LoggedInVar, logUserOut } from "@/apollo";
import { IMeData, MeQuery } from "@/documents/queries/me.query";
import { useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";

function useUser(): IMeData | undefined {
  const loggedInUser = useReactiveVar(LoggedInVar);
  const { data } = useQuery(MeQuery, {
    skip: !loggedInUser,
  });
  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);
  return data;
}

export default useUser;
