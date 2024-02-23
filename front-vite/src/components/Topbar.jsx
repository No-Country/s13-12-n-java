import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="lg:-ml-10 xl:-ml-2 2xl:-ml-24 flex">
      <header className="flex justify-between w-full pl-4 h-16 items-center">
        <h1 className="flex-shrink-0">LOGO</h1>
        <div className="flex justify-center">
          <input
            type="search"
            placeholder="Busque su producto aquí"
            className="h-11 rounded-full w-56 placeholder:px-4"
          ></input>
        </div>
      </header>
    </div>
  );
}
