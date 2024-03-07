import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import { useLocation } from "react-router-dom";

export default function Topbar() {
  const { state } = useLocation();
  console.log(state)
  return (
    <div className={`${state?.loggedIn ? "flex" : "hidden" }lg:-ml-10 xl:-ml-2 2xl:-ml-28`}>
      <header className="flex justify-between w-full pl-4 h-16 items-center">
        <Logo></Logo>
        <Searchbar Class="mr-14"/>
      </header>
    </div>
  );
}
