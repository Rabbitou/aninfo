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
        className="w-44 h-[38px] focus:outline-none rounded-sm shadow-[0px_2px_5px_#666666] p-2 bg-[#737373] dark:bg-white dark:text-black"
      />
    </div>
  );
}
