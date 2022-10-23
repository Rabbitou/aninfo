import request, { gql } from "graphql-request";
import React from "react";
import { endpoint } from "../endpoint/endpoint";
import { Anime } from "../types/Anime";

export const getAnimeTrendingNow = async (
  perPage: number
): Promise<Anime[]> => {
  const {
    Page: { media },
  } = await request(
    endpoint,
    gql`
      query {
        Page(page: 1, perPage: ${perPage}) {
          media(sort: TRENDING_DESC, type: ANIME, format: TV) {
            id
            averageScore
            title {
              romaji
            }
            coverImage {
              extraLarge
            }
            episodes
            duration
            description
            studios(isMain: true) {
              nodes {
                name
              }
            }
            format
            status
            genres
          }
        }
      }
    `
  );
  return media;
};
