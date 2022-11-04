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
      // selectedOptions.filter((o) => o != e.target.name);
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
      // optionList.current.classList.remove("h-auto");
      // optionList.current.classList.remove("max-h-52");
      // optionList.current.classList.toggle("h-0");
      // console.log(e.target);
      setSelectedbool(true);
      // setSearchValue("");
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
      className="selector h-[36px] rounded-sm overflow-hidden shadow-[0px_2px_5px_#666666] outline-1 outline-gray-300 outline-double"
      id="selector"
      ref={input}
    >
      <div
        className="bg-[#737373] w-44 h-[38px] rounded-sm flex items-center"
        // onClick={handleClick}
      >
        <input
          className="w-32 h-full outline-none p-2 bg-transparent"
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
              className="bg-gradient-purple p-1 mr-1 text-xs hover:cursor-pointer rounded-md"
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
        <div className="separator h-[24px] w-[1px] bg-gray-400 mx-1.5"></div>
        <div
          className="group h-full w-full flex justify-center items-center"
          onClick={handleClick}
        >
          <div className="w-[10px] h-[10px] border-[2px] rounded-sm group-hover:border-r-[#999999] group-hover:border-b-[#999999]  border-l-transparent border-t-transparent transition-all rotate-45 -translate-y-[2px] -translate-x-[2px]"></div>
        </div>
      </div>
      <div
        id="optionlist"
        ref={optionList}
        className="optionslist h-0 transition-[height] duration-300 overflow-y-scroll mt-2 rounded-sm  w-44 absolute z-30"
      >
        {optionlist.map((value, i) => {
          return (
            <div
              key={i}
              className="options flex items-center relative"
              onClick={() => setSearchValue("")}
            >
              <label
                htmlFor={value}
                className="text-sm w-full text-left bg-[#737373] py-2 pl-3 hover:bg-[#909090] hover:text-[#FA53B2] transition-colors"
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
              <CheckCircleIcon className="invisible peer-checked:visible !absolute !right-2 !w-[18px]  !text-[#FA53B2]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
