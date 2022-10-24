import React from "react";
import Select, { IndicatorSeparatorProps, StylesConfig } from "react-select";
import { GenreOptions } from "../../types/GenreOptions";

const indicatorSeparatorStyle = {
  alignSelf: "stretch",
  //   backgroundColor: colourOptions[2].color,
  marginBottom: 8,
  marginTop: 8,
  width: 1,
};

// const GenresList = [
//   { label: "Action", value: "Action" },
//   { label: "Adventure", value: "Adventure" },
//   { label: "Comedy", value: "Comedy" },
//   { label: "Drama", value: "Drama" },
//   { label: "Ecchi", value: "Ecchi" },
//   { label: "Fantasy", value: "Fantasy" },
//   { label: "Horror", value: "Horror" },
//   { label: "Mahou Shoujo", value: "Mahou Shoujo" },
//   { label: "Mecha", value: "Mecha" },
//   { label: "Music", value: "Music" },
//   { label: "Mystery", value: "Mystery" },
//   { label: "Psychological", value: "Psychological" },
//   { label: "Romance", value: "Romance" },
//   { label: "Sci-Fi", value: "Sci-Fi" },
//   { label: "Slice of Life", value: "Slice of Life" },
//   { label: "Sports", value: "Sports" },
//   { label: "Supernatural", value: "Supernatural" },
//   { label: "Thriller", value: "Thriller" },
// ];

// const IndicatorSeparator = ({
//   innerProps,
// }: IndicatorSeparatorProps<ColourOption, true>) => {
//   return <span style={indicatorSeparatorStyle} {...innerProps} />;
// };

const styles: StylesConfig = {
  control: (css) => ({
    ...css,
    outline: "none",
    background: "#737373",
    boxShadow: "-2px 2px 3px #fff",
  }),
  option: (css) => ({
    ...css,
    background: "#707070",
    ":hover": { background: "#888" },
  }),
};

export default function Multipleselector({
  options,
}: {
  options?: GenreOptions[];
}) {
  return (
    <Select
      closeMenuOnSelect={false}
      // components={{ IndicatorSeparator }}
      // defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={options}
      styles={styles}
    />
  );
}
