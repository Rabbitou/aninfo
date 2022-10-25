import request, { gql } from "graphql-request";
import React from "react";
import { endpoint } from "../endpoint/endpoint";
import { Anime } from "../types/Anime";

export const getMoviePopular = async (perPage: number): Promise<Anime[]> => {
  const {
    Page: { media },
  } = await request(
    endpoint,
    gql`
      query {
        Page(page: 1, perPage: ${perPage}) {
          media(sort: POPULARITY_DESC, isAdult: false, type: ANIME, format: MOVIE) {
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
