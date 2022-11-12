import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAnimeById } from "../fetchers/getAnimeById";
import { getAnimeBanner } from "../fetchers/getAnimeBanner";

export const useAnimeBanner = () => {
  const d = new Date();

  var seasonArray = [
    {
      name: "SPRING",
      date: new Date(
        d.getFullYear(),
        2,
        d.getFullYear() % 4 === 0 ? 19 : 20
      ).getTime(),
    },
    {
      name: "SUMMER",
      date: new Date(
        d.getFullYear(),
        5,
        d.getFullYear() % 4 === 0 ? 20 : 21
      ).getTime(),
    },
    {
      name: "FALL",
      date: new Date(
        d.getFullYear(),
        8,
        d.getFullYear() % 4 === 0 ? 22 : 23
      ).getTime(),
    },
    {
      name: "WINTER",
      date: new Date(
        d.getFullYear(),
        11,
        d.getFullYear() % 4 === 0 ? 20 : 21
      ).getTime(),
    },
  ];

  const season = seasonArray
    .filter(({ date }) => date <= d.getTime())
    .slice(-1)[0] || {
    name: "WINTER",
  };
  console.log(new Date(d).toLocaleDateString(), season.name);
  return useQuery(["anime", season.name], () =>
    getAnimeBanner(season.name, d.getFullYear())
  );
};
