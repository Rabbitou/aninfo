import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAnimeSearchName } from "../fetchers/getAnimeSearchName";

export const useAnimeSearchName = (animeName: string) => {
  return useInfiniteQuery(
    ["search-anime", animeName],
    ({ pageParam = 1 }) => getAnimeSearchName(animeName, pageParam),
    {
      getNextPageParam: (page) => {
        if (page.pageInfo.hasNextPage) {
          return page.pageInfo.currentPage + 1;
        } else return undefined;
      },
    }
  );
};
