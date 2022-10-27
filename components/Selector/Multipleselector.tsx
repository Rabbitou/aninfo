import React from "react";
import Select, {
  IndicatorSeparatorProps,
  MultiValue,
  StylesConfig,
} from "react-select";
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
    boxShadow: "0px 1px 5px #666666",
    height: "30px",
    overflowY: "scroll",
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
  option: (css) => ({
    ...css,
    background: "#707070",
    ":hover": { background: "#888" },
    transition: ".3s",
  }),
  clearIndicator: (css) => ({
    ...css,
    position: "absolute",
    top: 0,
    right: "32px",
  }),
};

export default function Multipleselector({
  options,
  setOptions,
}: {
  options: GenreOptions[];
  setOptions: React.Dispatch<React.SetStateAction<string[] | null>>;
}) {
  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue={null}
      onChange={(e) => {
        const newGenreList = (e as GenreOptions[]).map(
          (option) => (option as GenreOptions).value
        );
        setOptions(newGenreList.length === 0 ? null : newGenreList);
      }}
      // components={{ IndicatorSeparator }}
      // defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={options}
      styles={styles}
      placeholder="Any"
    />
  );
}
