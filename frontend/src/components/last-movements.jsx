// import { useState, useEffect } from 'react';
import Productos from '../components/productos-last-moments';

const IndexPage = () => {
//   const [productos, setProductos] = useState([]);

  const productos = [{
    "id": 1,
    "imagen": "https://via.placeholder.com/150",
    "titulo": "Producto 1",
    "descripcion": "Descripción del Producto 1"
  },
  {
    "id": 2,
    "imagen": "https://via.placeholder.com/150",
    "titulo": "Producto 2",
    "descripcion": "Descripción del Producto 2"
  },
  {
    "id": 3,
    "imagen": "https://via.placeholder.com/150",
    "titulo": "Producto 3",
    "descripcion": "Descripción del Producto 3"
  }]

//   useEffect(() => {
//     const obtenerProductos = async () => {
//       try {
//         const respuesta = await fetch('URL_DE_TU_API');
//         if (!respuesta.ok) {
//           throw new Error('Error al obtener los productos');
//         }
//         const datos = await respuesta.json();
//         setProductos(datos);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     obtenerProductos();
//   }, []);

  return (
    <div>
      <h1>Productos</h1>
      {productos.map((producto, index) => (
        <Productos
          key={index}
          imagen={producto.imagen}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
};

export default IndexPage;
