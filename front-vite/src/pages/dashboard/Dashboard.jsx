import React from "react";
import IndexPage from "../../components/ProductosLast";
import { useMediaQuery } from "react-responsive";
import Shortcuts from "../../components/Shortcuts";

export default function Dashboard() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return (
    <div>
      <div className="xl:grid grid-cols-3 xl:max-w-screen xl:mt-8">
        <div className="col-span-2">
          <h1 className="text-center lg:text-left text-xl">HOY</h1>
          <div className="carousel rounded-box max-w-screen mx-6 lg:hidden">
            <div className="carousel-item w-1/2">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-1/2">
              <img
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="w-full"
              />
            </div>
          </div>
          {!isMobile && (
            <div>
              <div>COMPONENTE DANIEL</div>
            </div>
          )}
          <div className="flex justify-center gap-4 mt-2 lg:hidden">
            <button className="bg-light-blue rounded-xl w-14 h-14">
              {" "}
              {/* pasar a una lista de objetos para mapear */}
              <span className="text-white">ICON</span>
            </button>
            <button className="bg-light-blue rounded-xl w-14 h-14">
              <span className="text-white">ICON</span>
            </button>
            <button className="bg-light-blue rounded-xl w-14 h-14">
              <span className="text-white">ICON</span>
            </button>
            <button className="bg-light-blue rounded-xl w-14 h-14">
              <span className="text-white">ICON</span>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-white h-64 my-6 w-96 md:w-full md:mx-10 lg:mr-12 lg:ml-2">GRÁFICO</div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          {!isMobile && (
            <div className="bg-semi-white flex flex-col w-80 items-center justify-center p-7 rounded-3xl">
              <h2 className="mb-6 text-2xl">Accesos Rápidos</h2>
              <div className="grid grid-cols-2 gap-6 gap-y-6">
                <Shortcuts label={"Crear Producto"}></Shortcuts>
                <Shortcuts label={"Nueva Orden"}></Shortcuts>
                <Shortcuts label={"Nuevo Empleado"}></Shortcuts>
                <Shortcuts label={"Nueva Categoría"}></Shortcuts>
              </div>
            </div>
          )}
          <div className="mx-4">
            <IndexPage></IndexPage>
          </div>
        </div>
      </div>
    </div>
  );
}
