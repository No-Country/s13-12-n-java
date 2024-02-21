import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
    const [clicked, isClicked] = useState(false);

    const handleMenu = () => {
        clicked ? isClicked(false) : isClicked(true);
        console.log(clicked)
    }

  return (
    <>
      <header className="flex items-center mb-4">
        {clicked ? <Navbar></Navbar> : ""}
        <button onClick={handleMenu} className={`mr-2 flex items-center justify-center`}>
          <span className={`material-symbols-outlined ${clicked ? 'hidden' : 'block'}`}>menu</span>
        </button>
        <div className="flex items-center">
            <img className="w-6" src="../../public/images/isotipo.svg" />
            <span className="pl-2 font-logo text-xl pt-1">ATLANTIS</span>
        </div>
      </header>
    </>
  );
}
