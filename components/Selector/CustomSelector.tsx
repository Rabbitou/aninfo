import React, { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function CustomSelector({
  options,
  setOptions,
}: {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[] | null>>;
}) {
  const [searchValue, setSearchValue] = useState("");
  const [optionlist, setOptionlist] = useState(options);
  const input = useRef<HTMLDivElement>(null);
  const optionList = useRef<HTMLDivElement>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedbool, setSelectedbool] = useState(true);

  useEffect(() => {
    if (selectedOptions.length === 0) setOptions(null);
    else setOptions(selectedOptions);
  }, [selectedOptions]);

  useEffect(() => {
    searchValue === ""
      ? setOptionlist(options)
      : setOptionlist(
          options.filter(
            (o) => o.toLowerCase().search(searchValue.toLowerCase()) != -1
          )
        );
  }, [searchValue]);

  const handleChangeCheckBox = (e: BaseSyntheticEvent) => {
    if (e.target.checked) {
      setSelectedOptions((selectedOptions) => [
        ...selectedOptions,
        e.target.name,
      ]);
    } else if (!e.target.checked) {
      setSelectedOptions(selectedOptions.filter((o) => o !== e.target.name));
    }
  };

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

  const handleSearchInput = (e: string) => {
    if (
      optionList &&
      optionList.current &&
      !optionList.current.classList.contains("h-auto")
    ) {
      optionList.current.classList.toggle("h-auto");
      optionList.current.classList.toggle("max-h-52");
      optionList.current.classList.toggle("h-0");
    }
    e === ""
      ? setOptionlist(options)
      : setOptionlist(
          options.filter((o) => o.toLowerCase().search(e.toLowerCase()) != -1)
        );
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
          placeholder={selectedOptions.length === 0 ? "Any" : ""}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          // onClick={handleFocus}
          onFocus={handleFocus}
          onBlur={(e) => handleBlur(e)}
        />
        {selectedbool && selectedOptions.length !== 0 && (
          <div className="absolute flex p-[7px] rounded-sm">
            <div
              onClick={() =>
                setSelectedOptions(
                  selectedOptions.filter((o) => o !== selectedOptions[0])
                )
              }
              className="bg-gradient-purple p-1 mr-1 text-xs hover:cursor-pointer rounded-md text-white"
            >
              {selectedOptions[0]}
            </div>
            {selectedOptions.length > 1 && (
              <div className="bg-gradient-purple p-1 text-xs rounded-md">
                +{selectedOptions.length - 1}
              </div>
            )}
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
              onClick={() => setSearchValue("")}
            >
              <label
                htmlFor={value}
                className="text-sm w-full text-left bg-gray-400 dark:bg-[#3B3B3B] py-2 pl-3 dark:hover:bg-[#4A4A4A] hover:bg-[#aeb6c4] hover:text-secondary dark:hover:text-secondary transition-colors text-gray-800 dark:text-white"
              >
                {value}
              </label>
              <input
                className="hidden peer"
                type="checkbox"
                name={value}
                id={value}
                onChange={(e) => handleChangeCheckBox(e)}
                checked={!!selectedOptions.find((check) => value === check)}
              />
              <CheckCircleIcon className="invisible peer-checked:visible !absolute !right-2 !w-[18px]  !text-secondary" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
