import { Cover, Title } from "./Anime";
import { AnimeDate } from "./AnimeDetails";

export type AnimeSearch = {
  id: number;
  title: Title;
  coverImage: Cover;
  format: string;
  startDate: AnimeDate;
  endDate: AnimeDate;
  averageScore: number;
  status: string;
};

export type PageSearch = {
  pageInfo: {
    currentPage: number;
    hasNextPage: boolean;
  };
  media: AnimeSearch[];
};
