import { Cover, Title } from "./Anime";
import { TinyAnime } from "../types/TinyAnime";
import { ExternalLinksType } from "./interfaces/ExternalLinksType";
type AnimeDate = {
  year: number;
  month: number;
  day: number;
};

export type Characters = {
  image: {
    large: string;
  };
  name: {
    userPreferred: string;
    native: string;
  };
};

export type Staff = {
  name: {
    full: string;
  };
  image: {
    large: string;
  };
  primaryOccupations: string[];
};

export type AnimeDetails = {
  title: Title;
  nextAiringEpisode: { episode: number; timeUntilAiring: number };
  description: string;
  format: string;
  duration: string;
  status: string;
  startDate: AnimeDate;
  season: string;
  seasonYear: number;
  averageScore: number;
  studios: { nodes: [{ name: string }] };
  source: string;
  genres: string[];
  coverImage: Cover;
  bannerImage: string;
  externalLinks: ExternalLinksType[];
  relations: {
    nodes: TinyAnime[];
  };
  characters: {
    nodes: Characters[];
  };
  staff: {
    nodes: Staff[];
  };
  trailer: {
    id: string;
  };
  recommendations: {
    nodes: [
      {
        mediaRecommendation: TinyAnime;
      }
    ];
  };
};
