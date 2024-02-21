import React from "react";
import { Link } from "react-router-dom";
import NavElem from "./NavElem";

export default function Navbar() {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Inventario", path: "/inventory" },
    { name: "Actividad", path: "/activity" },
    { name: "Ventas", path: "/sales" },
    { name: "Pedidos", path: "/orders" },
    { name: "Recursos Huamnos", path: "/human-resources" },
    { name: "Reportes", path: "/reports" },
  ];
  return (
    <>
      <div className={`w-64 bg-dark-blue text-white flex flex-col text-center justify-between h-screen`}>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-white w-30 h-30 "></div>
          <div className="mt-7">
            <h2 className="text-xl font-bold">Nombre Apellido</h2>
            <h4 className="font-extralight">Administrador</h4>
          </div>
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
    </>
  );
}
