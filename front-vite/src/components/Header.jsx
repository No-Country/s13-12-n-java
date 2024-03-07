import React, { useState } from "react";
import Navbar from "./Navbar";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

export default function Header() {
    const [isClicked, setClicked] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 1023 });
    const handleMenu = () => { setClicked(!isClicked); }
    const { state } = useLocation();

  return (
    <div className={`${state?.loggedIn ? "block" : "hidden"}`}>
      <header className="flex pl-4 mt-2 items-center mb-4 lg:hidden">
        {isClicked ? 
        <button onClick={handleMenu} className="z-50 hover:shadow-md absolute top-0 left-0 m-3 bg-dark-blue rounded-full p-2 flex lg:hidden">
            <span className="material-symbols-rounded text-semi-white">close</span>
        </button> : 
        <button onClick={handleMenu} className={`mr-2 flex items-center justify-center lg:hidden`}>
          <span className={`material-symbols-rounded ${isClicked ? 'hidden' : 'block'}`}>menu</span>
        </button>}
        <Logo/>
      </header>
      {isClicked && isMobile ? <Navbar></Navbar> : ""}
    </div>
  );
}
