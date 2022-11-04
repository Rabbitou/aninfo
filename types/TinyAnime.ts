import { Cover, Title } from "./Anime";

export type TinyAnime = {
  id: number;
  averageScore: number;
  title: Title;
  coverImage: Cover;
  episodes: number;
  description: string;
  format: string;
  genres: string[];
};
