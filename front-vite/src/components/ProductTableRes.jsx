import React, { useState } from "react";

const ProductTableRes = ({ productos }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="w-60 flex items-center justify-between p-4">
            <input type="checkbox" />
            <span>Nombre</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto, index) => (
          <React.Fragment key={index}>
            <tr onClick={() => handleRowClick(index)}>
              <td className="cursor-pointer flex items-center justify-between bg-table-comp-res p-4">
                <input type="checkbox" />
                <span className="theme-dark">{producto.nombre}</span>
                <img
                  className="w-10"
                  src={producto.imagen}
                  alt={producto.nombre}
                />
              </td>
            </tr>
            {expandedRow === index && (
              <tr>
                <td colSpan="4">
                  <div className="flex bg-light-blue border border-white p-4">
                    <span className="text-white text font-bold">Code:</span>
                    <td className="text-black">{producto.codigo}</td>
                  </div>
                  <div className="flex bg-light-blue border border-white p-4">
                    <span className="text-white font-bold">Tipo:</span>
                    <td className="text-black">{producto.tipo}</td>
                  </div>
                  <div className="flex bg-light-blue border border-white p-4">
                    <span className="text-white font-bold">Precio:</span>
                    <td className="text-black">{producto.precio}</td>
                  </div>
                  <div className="flex bg-light-blue border border-white p-4">
                    <span className="text-white font-bold">Quantity: </span>
                    <td className="text-black">{producto.cantidad}</td>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
      <div className="flex justify-center">
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 mr-1 rounded-l">
          1
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 mr-1">
          2
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 mr-1">
          3
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-r">
          4
        </button>
      </div>
    </table>
  );
};

export default ProductTableRes;
