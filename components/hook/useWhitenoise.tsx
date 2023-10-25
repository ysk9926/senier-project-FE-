"use client";

import {
  AllWhiteNoiseQuery,
  IAllWhitenoise,
} from "@/documents/query/allWhitenoise.query";
import {
  ISeeDefaultWhitenoiseData,
  SeeDefaultWhitenoiseQuery,
} from "@/documents/query/defaultWhitenoise.query";
import {
  ISeeMyWhitenoiseData,
  SeeMyWhitenosieQuery,
} from "@/documents/query/seeMyWhitenoise.query";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export function useAllWhitenoise(): IAllWhitenoise {
  const { data: allWHitenoiseData } = useQuery(AllWhiteNoiseQuery);
  return allWHitenoiseData;
}

export function useMyWhitenoise(): ISeeMyWhitenoiseData {
  const { data: myWhitenoiseData } = useQuery(SeeMyWhitenosieQuery);
  return myWhitenoiseData;
}

export function useDefaultWHitenoise(): ISeeDefaultWhitenoiseData {
  const { data: defaultWhitenoiseData } = useQuery(SeeDefaultWhitenoiseQuery);
  return defaultWhitenoiseData;
}
