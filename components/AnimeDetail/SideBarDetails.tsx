import React, { ReactNode } from "react";

function Info({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <h5>{title}</h5>
      <div>{children}</div>
    </div>
  );
}

export default function SideBarDetails() {
  return (
    <div className="w-52 p-6 bg-gray-400 rounded-sm flex flex-col">
      SideBarDetails
    </div>
  );
}
