import React from "react";
import { useQuery } from "react-query";
import { getAnimeTrendingNow } from "../fetchers/getAnimeTrendingNow";
import { Anime } from "../types/Anime";

export const useTrendingAnime = (perPage: number) => {
  return useQuery(["trending-anime"], () => getAnimeTrendingNow(perPage));
};
