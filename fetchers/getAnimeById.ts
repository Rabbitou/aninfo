import request, { gql } from "graphql-request";
import { endpoint } from "../endpoint/endpoint";
import { AnimeDetails } from "../types/AnimeDetails";

export const getAnimeById = async (id: number): Promise<AnimeDetails> => {
  const { Media } = await request(
    endpoint,
    gql`
      query {
        Media(id: ${id}) {
          title {
            romaji
            english
            native
          }
          nextAiringEpisode {
              episode
              timeUntilAiring
          }
          description
          format
          duration
          status
          startDate {
            year
            month
            day
          }
          season
          seasonYear
          averageScore
          studios {
            nodes {
              name
            }
          }
          source
          genres
          coverImage {
            extraLarge
          }
          bannerImage
          externalLinks {
            site
            url
            icon
            color
          }
          relations {
            nodes {
              id
              title {
                romaji
              }
              format
              type
              coverImage {
                extraLarge
              }
              description
              genres
            }
          }
          characters(sort: ROLE) {
            nodes {
              name {
                userPreferred
                native
              }
              image {
                large
              }
            }
          }
          staff(sort: RELEVANCE) {
            nodes {
              name {
                full
              }
              image {
                large
              }
              primaryOccupations
            }
          }
          trailer {
            id
          }
          recommendations {
            nodes {
              mediaRecommendation {
                id
                title {
                  romaji
                }
                format
                type
                coverImage {
                  extraLarge
                }
                description
                genres
              }
            }
          }
        }
      }
    `
  );
  return Media;
};
