const ProductInventory = ({ nombre, codigo, tipo, precio, cantidad, imagen, isChecked, onCheckboxChange }) => {
    return (
      <tr>
        <td><input type="checkbox" checked={isChecked} onChange={onCheckboxChange} /></td>
        <td>{nombre}</td>
        <td>{codigo}</td>
        <td>{tipo}</td>
        <td>{precio}</td>
        <td>{cantidad}</td>
        <td><img src={imagen} alt={nombre} /></td>
      </tr>
    );
  };
  
  export default ProductInventory;