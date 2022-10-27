import { useTheme } from "next-themes";
import React, { MouseEventHandler, useState } from "react";
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from "react-select";
import { GenreOptions } from "../../types/GenreOptions";

// const Control = ({ children, ...props }: ControlProps) => {
//   const style = { cursor: "pointer" };

//   return <components.Control {...props}>{children}</components.Control>;
// };

export default function SimpleSelector({
  options,
  setOption,
}: {
  options: GenreOptions[];
  setOption: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const { theme } = useTheme();
  const styles: StylesConfig = {
    control: (css) => ({
      ...css,
      outline: "none",
      background: "#737373",
      boxShadow: "0px 1px 5px #666666",
      color: "red",
    }),
    singleValue: (css) => ({
      ...css,
      color: "white",
    }),
    option: (css) => ({
      ...css,
      background: "#707070",
      ":hover": { background: "#888" },
      transition: ".3s",
    }),
    menuList: (css) => ({
      ...css,
    }),
    input: (css) => ({
      ...css,
      color: "white",
    }),
  };

  return (
    <Select
      closeMenuOnSelect={true}
      onChange={(e) => {
        setOption(e === null ? null : (e as GenreOptions).value);
      }}
      options={options}
      styles={styles}
      isClearable
      placeholder="Any"
    />
  );
}
