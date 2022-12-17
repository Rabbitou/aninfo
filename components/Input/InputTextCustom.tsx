import React from "react";

export default function InputTextCustom({
  place,
  onChange,
}: {
  place: string;
  onChange: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <div>
      <input
        type="text"
        placeholder={place}
        onChange={(e) =>
          onChange(e.target.value === "" ? null : e.target.value)
        }
        className="w-44 h-[36px] focus:outline-none rounded-sm  p-2 bg-gray-400 dark:bg-[#3B3B3B] dark:text-white text-gray-800 shadow-[0px_2px_5px_#666666] dark:shadow-none placeholder-gray-600 dark:placeholder-gray-400"
        // shadow-[0px_2px_5px_#666666]
      />
    </div>
  );
}
