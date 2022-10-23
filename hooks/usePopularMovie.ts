import React from "react";
import { useQuery } from "react-query";
import { getMoviePopular } from "../fetchers/getMoviePopular";

export const usePopularMovie = (perPage: number) => {
  return useQuery(["popular-movie"], () => getMoviePopular(perPage));
};
