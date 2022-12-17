import { useTheme } from "next-themes";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
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
  const [searchValue, setSearchValue] = useState("");
  const [optionlist, setOptionlist] = useState(options);
  const input = useRef<HTMLDivElement>(null);
  const optionList = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedbool, setSelectedbool] = useState(true);

  useEffect(() => {
    if (selectedOption === "") setOption(null);
    else setOption(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    // if (
    //   optionList &&
    //   optionList.current &&
    //   !optionList.current.classList.contains("h-auto")
    // ) {
    //   optionList.current.classList.toggle("h-auto");
    //   optionList.current.classList.toggle("max-h-52");
    //   optionList.current.classList.toggle("h-0");
    // }
    searchValue === ""
      ? setOptionlist(options)
      : setOptionlist(
          options.filter(
            (o) => o.value.toLowerCase().search(searchValue.toLowerCase()) != -1
          )
        );
  }, [searchValue]);

  const handleClickOutside = (e: any) => {
    if (input && input.current && !input.current.contains(e.target)) {
      if (
        optionList &&
        optionList.current &&
        optionList.current.classList.contains("h-auto")
      ) {
        optionList.current.classList.remove("h-auto");
        optionList.current.classList.remove("max-h-52");
        optionList.current.classList.add("h-0");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e));

    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e));
    };
  }, []);

  const handleClick = () => {
    if (optionList && optionList.current) {
      optionList.current.classList.toggle("h-auto");
      optionList.current.classList.toggle("max-h-52");
      optionList.current.classList.toggle("h-0");
    }
  };

  const handleFocus = () => {
    if (optionList && optionList.current) {
      optionList.current.classList.add("h-auto");
      optionList.current.classList.add("max-h-52");
      optionList.current.classList.remove("h-0");
      setSelectedbool(false);
    }
  };

  const handleBlur = (e: any) => {
    if (
      optionList &&
      optionList.current &&
      !optionList.current.contains(e.target)
    ) {
      setSelectedbool(true);
    }
  };

  const handleClickOption = (e: any) => {
    setSearchValue("");
    setSelectedOption(e.target.textContent);
  };

  return (
    <div
      className="selector h-[36px] rounded-sm overflow-hidden shadow-[0px_2px_5px_#666666] dark:shadow-none"
      // shadow-[0px_2px_5px_#666666] outline-1 outline-gray-300 outline-double
      id="selector"
      ref={input}
    >
      <div
        className="bg-gray-400 dark:bg-[#3B3B3B] w-44 h-[38px] rounded-sm flex items-center"
        // onClick={handleClick}
      >
        <input
          className="w-32 h-full outline-none p-2 bg-transparent placeholder-gray-600 dark:placeholder-gray-400 text-gray-800 dark:text-white"
          placeholder={selectedOption === "" ? "Any" : ""}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          // onClick={handleFocus}
          onFocus={handleFocus}
          onBlur={(e) => handleBlur(e)}
        />
        {selectedbool && selectedOption !== "" && (
          <div className="absolute flex p-[7px] rounded-sm ml-1">
            <div
              onClick={() => setSelectedOption("")}
              className="bg-gradient-purple p-1 mr-1 text-xs hover:cursor-pointer rounded-md text-white"
            >
              {selectedOption}
            </div>
          </div>
        )}
        <div className="separator h-[24px] w-[1px] bg-gray-500 mx-1.5"></div>
        <div
          className="group h-full w-full flex justify-center items-center"
          onClick={handleClick}
        >
          <div className="w-[10px] h-[10px] border-[2px] rounded-sm group-hover:border-r-secondary group-hover:border-b-secondary border-r-gray-500 border-b-gray-500 border-l-transparent border-t-transparent transition-all rotate-45 -translate-y-[2px] -translate-x-[2px]"></div>
        </div>
      </div>
      <div
        id="optionlist"
        ref={optionList}
        className="optionslist h-0 transition-[height] duration-300 overflow-y-scroll mt-2 rounded-sm  w-44 absolute z-30  scrollbar-thin scrollbar-track-[#aeb6c4] dark:scrollbar-track-[#4A4A4A] scrollbar-thumb-secondary"
      >
        {optionlist.map((value, i) => {
          return (
            <div
              key={i}
              className="options flex items-center relative "
              onClick={(e) => handleClickOption(e)}
            >
              <label
                htmlFor={value.value}
                className="text-sm w-full text-left bg-gray-400 dark:bg-[#3B3B3B] py-2 pl-3 dark:hover:bg-[#4A4A4A] hover:bg-[#aeb6c4] hover:text-secondary dark:hover:text-secondary transition-colors text-gray-800 dark:text-white"
              >
                {value.value}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
