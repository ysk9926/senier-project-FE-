import {
  AllWhiteNoiseQuery,
  IAllWhitenoise,
} from "@/documents/queries/allWhitenoise.query";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export function useAllWhitenoise(): IAllWhitenoise {
  const { data: allWHitenoiseData } = useQuery(AllWhiteNoiseQuery);
  return allWHitenoiseData;
}
