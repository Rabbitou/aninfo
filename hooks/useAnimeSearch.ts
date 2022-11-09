import { useInfiniteQuery, useQuery } from "react-query";
import { getAnimeSearch } from "../fetchers/getAnimeSearch";
import { AnimeSearchProps } from "../types/interfaces/AnimeSearch";

export const useAnimeSearch = (searchOptions: AnimeSearchProps) => {
  return useInfiniteQuery(
    ["search-anime", searchOptions],
    ({ pageParam = 1 }) => getAnimeSearch(searchOptions, pageParam),
    {
      getNextPageParam: (page) => {
        if (page.pageInfo.hasNextPage) {
          return page.pageInfo.currentPage + 1;
        } else return undefined;
      },
    }
  );
};
