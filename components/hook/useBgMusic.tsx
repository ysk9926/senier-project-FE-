import {
  AllBgMusicQuery,
  IAllBgMusicData,
} from "@/documents/queries/allBgMusic.query";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export function useAllBgMusic(): IAllBgMusicData {
  const { data: allBgMusicData } = useQuery(AllBgMusicQuery);
  return allBgMusicData;
}
