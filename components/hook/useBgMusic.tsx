"use client";

import {
  AllBgMusicQuery,
  IAllBgMusicData,
} from "@/documents/query/allBgMusic.query";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export function useAllBgMusic(): IAllBgMusicData {
  const { data: allBgMusicData } = useQuery(AllBgMusicQuery);
  return allBgMusicData;
}
