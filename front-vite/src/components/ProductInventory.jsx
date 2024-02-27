const ProductInventory = ({ nombre, codigo, tipo, precio, cantidad, imagen, isChecked, onCheckboxChange }) => {
    return (
      <tr className="text-center">
        <td className="bg-light-cyan text-theme-dark text-center pl-"><input type="checkbox" checked={isChecked} onChange={onCheckboxChange} /></td>
        <td className="bg-light-cyan text-theme-dark">{nombre}</td>
        <td className="bg-light-cyan text-theme-dark">{codigo}</td>
        <td className="bg-light-cyan text-theme-dark">{tipo}</td>
        <td className="bg-light-cyan text-theme-dark">{precio}</td>
        <td className="bg-light-cyan text-theme-dark">{cantidad}</td>
        <td className="bg-light-cyan text-theme-dark flex justify-center items-center"><img src={imagen} alt={nombre} className="w-16"/></td>
      </tr>
    );
  };
  
  export default ProductInventory;