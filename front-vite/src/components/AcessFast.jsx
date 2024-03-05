import Shortcuts from "./Shortcuts";
import { useMediaQuery } from "react-responsive";
import IndexPage from "./ProductosLast";

import React from 'react'

export default function AcessFast() {
    const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <div className="xl:col-span-1 flex flex-col items-center xl:mt-8 justify-center">
    {!isMobile && (
      <div className="bg-semi-white flex flex-col w-80 items-center justify-center p-7 rounded-3xl">
        <h2 className="mb-6 text-2xl">Accesos Rápidos</h2>
        <div className="grid grid-cols-2 gap-6 gap-y-6">
          <Shortcuts label={"Crear Producto"} icon='add_business'></Shortcuts>
          <Shortcuts label={"Nueva Orden"} icon='note_add'></Shortcuts>
          <Shortcuts label={"Nuevo Empleado"} icon='person_add'></Shortcuts>
          <Shortcuts label={"Nueva Categoría"} icon='category'></Shortcuts>
        </div>
      </div>
    )}
    <div className="">
      <IndexPage></IndexPage>
    </div>
  </div>
  )
}
