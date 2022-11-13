import request, { gql } from "graphql-request";
import { endpoint } from "../endpoint/endpoint";
import { AnimeBanner } from "../types/AnimeBanner";

export const getAnimeBanner = async (
  season: string,
  seasonYear: number
): Promise<AnimeBanner[]> => {
  const {
    Page: { media },
  } = await request(
    endpoint,
    gql`
      query {
        Page(page: 1, perPage: 7) {
            media(
                type: ANIME
                season: ${season}
                seasonYear: ${seasonYear}
                status: RELEASING
                isAdult: false
                sort: POPULARITY_DESC
            ) {
                id
                title {
                    romaji
                }
                bannerImage
                description
            }
        }
      }
    `
  );
  return media;
};
