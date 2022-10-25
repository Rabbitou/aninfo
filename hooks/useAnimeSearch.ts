import React from "react";
import { useQuery } from "react-query";
import { getAnimeSearch } from "../fetchers/getAnimeSearch";
import { AnimeSearchProps } from "../types/interfaces/AnimeSearch";

export const useAnimeSearch = (searchOptions: AnimeSearchProps) => {
  return useQuery(["search-anime", searchOptions], () =>
    getAnimeSearch(searchOptions)
  );
};
