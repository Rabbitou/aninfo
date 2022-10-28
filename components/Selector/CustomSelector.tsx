import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GenreOptions } from "../../types/GenreOptions";

export default function CustomSelector({
  options,
  setOptions,
}: {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[] | null>>;
}) {
  console.log(options);
  const [optionlist, setOptionlist] = useState(options);
  useEffect(() => {
    if (options.length) {
      setOptionlist(options);
    }
  }, []);

  const handleClick = () => {
    const optionslist = document.getElementById("optionlist");
    optionslist?.classList.toggle("h-52");
    optionslist?.classList.toggle("h-0");
  };
  const handleSearchInput = (e: string) => {
    const optionDiv = document.getElementById("optionlist");
    if (!optionDiv?.classList.contains("h-52")) {
      optionDiv?.classList.toggle("h-52");
      optionDiv?.classList.toggle("h-0");
    }
    e === ""
      ? setOptionlist(options)
      : setOptionlist(
          options.filter((o) => o.toLowerCase().search(e.toLowerCase()) != -1)
        );
  };
  return (
    <div className="selector">
      <div
        className="bg-red-300 w-44 h-[38px] rounded-sm flex items-center space-x-3"
        onClick={handleClick}
      >
        <input
          className="w-32 outline-none ml-1"
          placeholder="Any"
          type="text"
          onChange={(e) => handleSearchInput(e.target.value)}
        />
        <div className="separator h-[24px] w-[1px] bg-gray-400"></div>
        <div className="w-[10px] h-[10px] border-[2px] rounded-sm border-r-green-700 border-b-green-700  border-l-transparent border-t-transparent rotate-45 -translate-y-[2px] -translate-x-[2px]"></div>
      </div>
      <div
        id="optionlist"
        className="optionslist h-0 transition-[height] duration-300 overflow-y-scroll mt-2 rounded-sm bg-red-900 w-44 absolute z-30"
      >
        {optionlist.map((value, i) => {
          return (
            <div key={i} className="option1 flex items-center relative">
              <label
                htmlFor={value}
                className="text-sm w-full text-left bg-green-400 py-2 pl-3 hover:bg-green-600 transition-colors"
              >
                {value}
              </label>
              <input
                className="hidden peer"
                type="checkbox"
                name={value}
                id={value}
              />
              <CheckCircleIcon className="invisible peer-checked:visible !absolute !right-2 !w-[18px]  !text-blue-500" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
