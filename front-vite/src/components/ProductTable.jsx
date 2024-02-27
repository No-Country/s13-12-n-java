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
    <table className='my-4 bg-light-cyan'>
      <thead>
        <tr>
          <th className='px-5 py-3'><input type="checkbox" checked={isCheckedAll} onChange={handleCheckboxChangeAll} /></th>
          <th className='px-5 py-3 text-font-table'>Nombre</th>
          <th className='px-5 py-3 text-font-table'>Código</th>
          <th className='px-5 py-3 text-font-table'>Tipo</th>
          <th className='px-5 py-3 text-font-table'>Precio</th>
          <th className='px-5 py-3 text-font-table'>Cantidad</th>
          <th className='px-5 py-3 text-font-table'>Imagen</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='h-8'></td>
        </tr>
        {productos.map((producto, index) => (
          <ProductInventory
            key={index}
            nombre={producto.nombre}
            codigo={producto.codigo}
            tipo={producto.tipo}
            precio={producto.precio}
            cantidad={producto.cantidad}
            imagen={ producto.imagen}
            isChecked={producto.isChecked || false}
            onCheckboxChange={() => handleRowCheckboxChange(index)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
