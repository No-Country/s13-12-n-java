import React, { useState } from "react";
import Navbar from "./Navbar";
import { useMediaQuery } from "react-responsive";

export default function Header() {
    const [isClicked, setClicked] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 1023 });
    const handleMenu = () => {
        setClicked(!isClicked);
    }

  return (
    <div className="">
      <header className="flex pl-4 mt-2 items-center mb-4 lg:hidden">
        {isClicked ? 
        <button onClick={handleMenu} className="z-50 hover:shadow-md absolute top-0 left-0 m-3 bg-dark-blue rounded-full p-2 flex lg:hidden">
            <span className="material-symbols-outlined text-semi-white">close</span>
        </button> : 
        <button onClick={handleMenu} className={`mr-2 flex items-center justify-center lg:hidden`}>
          <span className={`material-symbols-outlined ${isClicked ? 'hidden' : 'block'}`}>menu</span>
        </button>}
        <div className="flex items-center">
            <img className="w-6" src="/images/isotipo.svg" />
            <span className="pl-2 font-logo text-xl pt-1">ATLANTIS</span>
        </div>
      </header>
      {isClicked && isMobile ? <Navbar></Navbar> : ""}
      
    </div>
  );
}
