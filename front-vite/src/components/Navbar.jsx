import React, { useState } from "react";
import { Link, } from "react-router-dom";
import NavElem from "./NavElem";

export default function Navbar() {
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
    <div className={`fixed top-0 left-0 z-40 w-64 bg-blue text-white flex flex-col text-center justify-between h-screen`}>
      <div className="flex flex-col mt-16 items-center">
        <img
          src="/images/img-prueba.jpg"
          className="rounded-full bg-white w-20 h-20"
        ></img>
        <div className="mt-4">
          <h2 className="font-bold">Nombre Apellido</h2>
          <h4 className="text-sm font-extralight">Administrador</h4>
        </div>
      </div>
      <div className="flex justify-center">
        <input
          type="search"
          placeholder="Busque su producto aquí"
          className="h-11 rounded-full w-56 placeholder:px-4"
        ></input>
      </div>
      <nav className="flex flex-col text-center justify-center">
        <ul>
          {links.map((link, i) => (
            <NavElem path={link.path} label={link.name} id={i}></NavElem>
          ))}
        </ul>
      </nav>
      <button className="mb-8 text-xs">Cerrar sesión</button>
    </div>
  );
}

