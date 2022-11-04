import request, { gql } from "graphql-request";
import React from "react";
import { endpoint } from "../endpoint/endpoint";
import { TinyAnime } from "../types/TinyAnime";

export const getAnimePopular = async (
  perPage: number
): Promise<TinyAnime[]> => {
  const {
    Page: { media },
  } = await request(
    endpoint,
    gql`
      query {
        Page(page: 1, perPage: ${perPage}) {
          media(sort: POPULARITY_DESC, type: ANIME, format: TV, isAdult: false) {
            id
            title {
              romaji
            }
            coverImage {
              extraLarge
            }
            episodes
            description
            format
            genres
          }
        }
      }
    `
  );
  return media;
};
