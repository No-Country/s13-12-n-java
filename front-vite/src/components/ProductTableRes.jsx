import React, { useState } from "react";

const ProductTableRes = ({ productos }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <table className="w-full mt-5">
      <thead>
        <tr className="bg-found-list-res">
          <th className="w-60 flex items-center justify-between p-4">
            <input type="checkbox" />
            <span className="text-font-table">Nombre</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto, index) => (
          <React.Fragment key={index}>
            <tr onClick={() => handleRowClick(index)}>
              <td className="cursor-pointer flex items-center justify-between bg-table-comp-res p-4 border border-t border-b border-white">
                <input type="checkbox" />
                <div className="flex items-center gap-10"><span className="theme-dark">{producto.nombre}</span>
                <img
                  className="w-10 rounded-full"
                  src={producto.imagen}
                  alt={producto.nombre}
                />
                </div>
                <img src="/images/vector.svg" alt="" />
              </td>
            </tr>
            {expandedRow === index && (
              <tr>
                <td colSpan="4">
                  <div className="flex bg-light-blue border border-white p-4">
                    <span className="text-white text font-bold min-w-32">Code:</span>
                    <td className="text-black font-medium">{producto.codigo}</td>
                  </div>
                  <div className="flex bg-light-blue border border-white p-4">
                    <span className="text-white font-bold min-w-32">Tipo:</span>
                    <td className="text-black font-medium">{producto.tipo}</td>
                  </div>
                  <div className="flex bg-light-blue border border-white p-4">
                    <span className="text-white font-bold min-w-32">Precio:</span>
                    <td className="text-black font-medium">{producto.precio}</td>
                  </div>
                  <div className="flex bg-light-blue border border-white p-4">
                    <span className="text-white font-bold min-w-32">Quantity: </span>
                    <td className="text-black font-medium">{producto.cantidad}</td>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
      <div className="flex justify-center m-4">
        <img className="bg-gray-200 cursor-pointer hover:bg-gray-300 py-2 pl-3 rounded-l border border-white" src="/images/arrow-left.svg" alt="" />
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 border border-blue text-white bg-blue">
          1
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 border border-white text-blue">
          2
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 border border-white text-blue">
          3
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 border border-white text-blue">
          4
        </button>
        <img className="bg-gray-200 cursor-pointer hover:bg-gray-300 py-2 pl-2 pr-1 rounded-r border border-white" src="/images/arrow-right.svg" alt="" />
      </div>
    </table>
  );
};

export default ProductTableRes;
