import React from "react";
import Logo from "./Logo";

export default function Topbar() {
  return (
    <div className="lg:-ml-10 xl:-ml-2 2xl:-ml-28 flex">
      <header className="flex justify-between w-full pl-4 h-16 items-center">
        <Logo></Logo>
        <div className="flex justify-center mr-14 items-center bg-white rounded-full">
          <input
            type="search"
            placeholder="Busque su producto aquí"
            className="h-11 rounded-full w-56 placeholder:px-4"
          ></input>
          <span className="material-symbols-rounded pr-3">search</span>
        </div>
      </header>
    </div>
  );
}
