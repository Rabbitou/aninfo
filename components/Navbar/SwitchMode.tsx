import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function SwitchMode() {
  const { theme, setTheme, systemTheme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState<string | undefined>("");

  const handleChangeTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setCurrentTheme(theme !== "system" ? theme : systemTheme);
  }, [theme, systemTheme]);

  return (
    <div
      className={`flex bg-gray-300 w-16 h-8 rounded-2xl items-center cursor-pointer`}
      onClick={handleChangeTheme}
    >
      <div
        className={`flex mx-1 bg-gray-500 items-center justify-center w-7 h-7 rounded-2xl transition-all ${
          currentTheme === "dark" ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {currentTheme !== "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#F9ED22"
              d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#1C2C48"
              d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
