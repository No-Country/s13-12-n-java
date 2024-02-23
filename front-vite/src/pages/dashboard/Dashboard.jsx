import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-center text-xl">HOY</h1>
      <div>
        <div className="carousel rounded-box max-w-screen mx-6">
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
        <div className="flex justify-center gap-4 mt-2">
          <button className="bg-light-blue rounded-xl w-14 h-14"> {/* pasar a una lista de objetos para mapear */}
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
        <div className="bg-white h-64 mt-4">
          GRÁFICO
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
