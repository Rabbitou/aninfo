export type Title = {
  romaji: string;
  english: string;
  native: string;
};

export type Cover = {
  extraLarge: string;
};

export type Anime = {
  id: number;
  averageScore: number;
  title: Title;
  coverImage: Cover;
  episodes: number;
  duration: number;
  description: string;
  studios: { nodes: [{ name: string }] };
  format: string;
  status: string;
  genres: string[];
  nextAiringEpisode: { episode: number; timeUntilAiring: number };
};
