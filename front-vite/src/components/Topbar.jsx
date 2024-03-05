import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

export default function Topbar() {
  return (
    <div className="lg:-ml-10 xl:-ml-2 2xl:-ml-28 flex">
      <header className="flex justify-between w-full pl-4 h-16 items-center">
        <Logo></Logo>
        <Searchbar Class="mr-14"/>
      </header>
    </div>
  );
}
