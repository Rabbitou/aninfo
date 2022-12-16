import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAnimeById } from "../fetchers/getAnimeById";
import { getAnimeBanner } from "../fetchers/getAnimeBanner";

export const useAnimeBanner = () => {
  const d = new Date();

  var seasonArray = [
    {
      name: "FALL",
      date: 12,
    },
    {
      name: "SUMMER",
      date: 9,
    },
    {
      name: "SPRING",
      date: 6,
    },
    {
      name: "WINTER",
      date: 3,
    },
  ];

  const season = seasonArray
    .filter(({ date }) => date >= d.getMonth())
    .slice(-1)[0] || {
    name: "WINTER",
  };
  return useQuery(["anime", season.name], () =>
    getAnimeBanner(season.name, d.getFullYear())
  );
};
