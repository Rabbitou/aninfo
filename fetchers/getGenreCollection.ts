import request, { gql } from "graphql-request";
import React from "react";
import { endpoint } from "../endpoint/endpoint";

export const getGenreCollection = async (): Promise<string[]> => {
  const { GenreCollection } = await request(
    endpoint,
    gql`
      query {
        GenreCollection
      }
    `
  );
  return GenreCollection;
};
