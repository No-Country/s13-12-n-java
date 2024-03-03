import React, { useState } from "react";
import { Link, } from "react-router-dom";
import NavElem from "./NavElem";

export default function Navbar( {Class} ) {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Inventario", path: "/inventory" },
    { name: "Actividad", path: "/activity" },
    { name: "Ventas", path: "/sales" },
    { name: "Pedidos", path: "/orders" },
    { name: "Recursos Humanos", path: "/human-resources" },
    { name: "Reportes", path: "/reports" },
  ];

  return (
    <div className={`fixed top-0 left-0 z-40 w-64 bg-blue text-white flex flex-col text-center justify-between min-h-screen lg:max-h-screen lg:static ${Class}`}>
      <div className="flex flex-col mt-16 items-center">
        <img
          src="/images/img-prueba.jpg"
          className="rounded-full bg-white w-20 h-20 lg:w-24 lg:h-24"
        ></img>
        <div className="mt-4">
          <h2 className="font-bold lg:text-lg">Nombre Apellido</h2>
          <h4 className="text-sm font-extralight lg:text-base">Administrador</h4>
        </div>
      </div>
      
      <nav className="flex flex-col text-center justify-center">
        <ul>
          {links.map((link, i) => (
            <NavElem path={link.path} label={link.name} key={i}></NavElem>
          ))}
        </ul>
      </nav>
      <button className="mb-8 text-xs">Cerrar sesión</button>
    </div>
  );
}
