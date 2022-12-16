import { Cover, Title } from "./Anime";

export type AnimeBanner = {
  id: number;
  title: Title;
  bannerImage: string;
  coverImage: Cover;
  description: string;
};
