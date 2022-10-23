import React from "react";
import { useQuery } from "react-query";
import { getAnimePopular } from "../fetchers/getAnimePopular";

export const usePopularAnime = (perPage: number) => {
  return useQuery(["popular-anime"], () => getAnimePopular(perPage));
};
