import {
  AllWhiteNoiseQuery,
  IAllWhitenoise,
} from "@/documents/queries/allWhitenoise.query";
import {
  ISeeDefaultWhitenoiseData,
  SeeDefaultWhitenoiseQuery,
} from "@/documents/queries/defaultWhitenoise.query";
import {
  ISeeMyWhitenoiseData,
  SeeMyWhitenosieQuery,
} from "@/documents/queries/seeMyWhitenoise.query";
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
