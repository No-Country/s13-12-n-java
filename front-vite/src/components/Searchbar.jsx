import React from "react";

export default function Searchbar( {hidden, Class} ) {
  return (
    <div className={`flex justify-center ${Class}  items-center bg-white rounded-full shadow-md border-blue border-2`}>
      <input
        type="search"
        placeholder="Busque su producto aquí"
        className={`h-11 rounded-full w-56 placeholder:px-4 placeholder:text-blue placeholder:text-sm ${hidden}`}
      ></input>
      <span className="material-symbols-rounded pr-3">search</span>
    </div>
  );
}
