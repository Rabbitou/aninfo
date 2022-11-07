import React, { useRef } from "react";

export default function SearchBar() {
  //   const searchList = useRef<HTMLDivElement>(null);
  //   const handleFocus = () => {
  //     if (searchList && searchList.current) {
  //       searchList.current.classList.add("h-[360px]");
  //       searchList.current.classList.add("max-h-52");
  //       searchList.current.classList.remove("h-0");
  //     }
  //   };
  //   const handleBlur = (e: any) => {
  //     if (
  //       searchList &&
  //       searchList.current &&
  //       !searchList.current.contains(e.target)
  //     ) {
  //       // optionList.current.classList.remove("h-auto");
  //       // optionList.current.classList.remove("max-h-52");
  //       // optionList.current.classList.toggle("h-0");
  //       // console.log(e.target);
  //       // setSearchValue("");
  //     }
  //   };
  return (
    <>
      <div className="flex-1 rounded-sm overflow-hidden relative">
        <input
          className="flex-1 w-full px-2 py-1 outline-none"
          placeholder="Coming Soon..."
          type="text"
          //   onFocus={handleFocus}
          //   onBlur={handleBlur}
        />
      </div>
      {/* <div
        ref={searchList}
        className="absolute w-full h-0 top-full bg-slate-500 mt-2 rounded-sm overflow-hidden"
      ></div> */}
    </>
  );
}
