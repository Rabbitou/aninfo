import request, { gql } from "graphql-request";
import { endpoint } from "../endpoint/endpoint";
import { PageSearch } from "../types/AnimeSearch";

export const getAnimeSearchName = async (
  animeName: string,
  pageParam: number
): Promise<PageSearch> => {
  const { Page } = await request(
    endpoint,
    gql`
      query {
        Page(page: ${pageParam}, perPage: 50) {
          pageInfo{
            currentPage
            hasNextPage
          }
          media(search: ${
            animeName === null ? animeName : `"${animeName}"`
          }, sort: TITLE_ENGLISH, isAdult: false, type: ANIME) {
            id
            title {
              romaji
            }
            coverImage {
              extraLarge
            }
            format
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
            averageScore
            status
          }
        }
      }
    `
  );
  return Page;
};
