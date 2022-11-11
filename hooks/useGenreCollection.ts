import { useQuery } from "@tanstack/react-query";
import { getGenreCollection } from "../fetchers/getGenreCollection";

export const useGenreCollection = () => {
  return useQuery(["genre-list"], getGenreCollection);
};
