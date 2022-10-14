import React from "react";
import Primaryinfo from "./Primaryinfo";

export default function Animedata() {
  return (
    <div className="bg-gray-700 flex justify-center p-1">
      <Primaryinfo />
      <div className="secondary">
        <div className="ratingstatus">
          <div className="rating"></div>
          <div className="status"></div>
        </div>
        <div className="genre"></div>
      </div>
    </div>
  );
}
