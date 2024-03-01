import React from "react";
import { Link } from "react-router-dom";

export default function NavElem( {path, label } ) {
  return (
    <Link to={path}
      className="h-14 hover:bg-light-blue active:bg-light-blue focus:bg-light-blue flex items-center justify-center font-medium"
    >{label}</Link>
  );
}
