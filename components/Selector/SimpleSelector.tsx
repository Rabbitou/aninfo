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
}: {
  options: GenreOptions[];
}) {
  const styles: StylesConfig = {
    control: (css) => ({
      ...css,
      outline: "none",
      background: "#737373",
      boxShadow: "-2px 2px 3px #fff",
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
  };

  return <Select closeMenuOnSelect={true} options={options} styles={styles} />;
}
