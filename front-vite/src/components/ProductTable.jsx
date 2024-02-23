import React, { useState } from 'react';
import ProductInventory from './ProductInventory';

const ProductTable = ({ productos }) => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const handleCheckboxChangeAll = () => {
    const updatedProducts = productos.map(producto => ({ ...producto, isChecked: !isCheckedAll }));
    setIsCheckedAll(!isCheckedAll);
    setIsCheckedAll(updatedProducts);
  };

  const handleRowCheckboxChange = (index) => {
    const updatedProducts = [...productos];
    updatedProducts[index].isChecked = !updatedProducts[index].isChecked;
    setIsCheckedAll(updatedProducts.every(producto => producto.isChecked));
    setIsCheckedAll(updatedProducts);
  };

  return (
    <table className='my-4'>
      <thead>
        <tr>
          <th className='border border-l-gray-800 px-5 py-3'><input type="checkbox" checked={isCheckedAll} onChange={handleCheckboxChangeAll} /></th>
          <th className='border border-l-gray-800 px-5 py-3'>Nombre</th>
          <th className='border border-l-gray-800 px-5 py-3'>Código</th>
          <th className='border border-l-gray-800 px-5 py-3'>Tipo</th>
          <th className='border border-l-gray-800 px-5 py-3'>Precio</th>
          <th className='border border-l-gray-800 px-5 py-3'>Cantidad</th>
          <th className='border border-l-gray-800 px-5 py-3'>Imagen</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto, index) => (
          <ProductInventory
            key={index}
            nombre={producto.nombre}
            codigo={producto.codigo}
            tipo={producto.tipo}
            precio={producto.precio}
            cantidad={producto.cantidad}
            imagen={producto.imagen}
            isChecked={producto.isChecked || false}
            onCheckboxChange={() => handleRowCheckboxChange(index)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
