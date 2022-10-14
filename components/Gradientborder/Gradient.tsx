import React, { ReactNode } from "react";

export default function Gradient({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-purple p-[2px] w-fit rounded-sm">
      {children}
    </div>
  );
}
