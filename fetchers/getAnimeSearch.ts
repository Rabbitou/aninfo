import { formControlClasses } from "@mui/material";
import request, { gql } from "graphql-request";
import React from "react";
import { endpoint } from "../endpoint/endpoint";
import { Anime } from "../types/Anime";
import { GenreOptions } from "../types/GenreOptions";
import { AnimeSearchProps } from "../types/interfaces/AnimeSearch";

export const getAnimeSearch = async (
  searchOptions: AnimeSearchProps
): Promise<Anime[]> => {
  const {
    Page: { media },
  } = await request(
    endpoint,
    gql`
      query {
        Page(page: 1, perPage: ${searchOptions.perPage}) {
          media(sort: POPULARITY_DESC, isAdult: false, type:ANIME, search: ${
            searchOptions.searchName === null
              ? searchOptions.searchName
              : `"${searchOptions.searchName}"`
          }, genre_in: ${
      searchOptions.genreList === null
        ? searchOptions.genreList
        : JSON.stringify(searchOptions.genreList)
    }, seasonYear: ${searchOptions.seasonYear}${
      searchOptions.season === null ? "" : `, season: ${searchOptions.season}`
    }${
      searchOptions.format === null ? "" : `, format: ${searchOptions.format}`
    }${
      searchOptions.status === null ? "" : `, status: ${searchOptions.status}`
    }) {
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
            nextAiringEpisode {
              episode
              timeUntilAiring
            }
          }
        }
      }
    `
  );
  return media;
};
