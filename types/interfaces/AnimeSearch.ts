export interface AnimeSearchProps {
  perPage: number;
  searchName: string | null;
  genreList: string[] | null;
  seasonYear: string | null;
  season: string | null;
  format: string | null;
  status: string | null;
}
