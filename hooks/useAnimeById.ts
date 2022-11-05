import React from "react";
import { useQuery } from "react-query";
import { getAnimeById } from "../fetchers/getAnimeById";

export const useAnimeById = (id: number) => {
  return useQuery(["anime", id], () => getAnimeById(id), { enabled: !!id });
};
