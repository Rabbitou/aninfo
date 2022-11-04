import request, { gql } from "graphql-request";
import React from "react";
import { endpoint } from "../endpoint/endpoint";
import { Anime } from "../types/Anime";
import { TinyAnime } from "../types/TinyAnime";

export const getMoviePopular = async (
  perPage: number
): Promise<TinyAnime[]> => {
  const {
    Page: { media },
  } = await request(
    endpoint,
    gql`
      query {
        Page(page: 1, perPage: ${perPage}) {
          media(sort: POPULARITY_DESC, isAdult: false, type: ANIME, format: MOVIE) {
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
